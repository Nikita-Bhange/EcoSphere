
from fastapi import APIRouter, UploadFile, File
from datetime import datetime
import uuid, os
from src.ml.predictor import predict_image
from src.config.db import db

router = APIRouter(prefix="/api/v1/auth")

UPLOAD_DIR = "static/images"
os.makedirs(UPLOAD_DIR, exist_ok=True)
@router.post("/predict")
async def predict(file: UploadFile = File(...)):

    try:
        image_bytes = await file.read()

        ext = file.filename.split(".")[-1]
        filename = f"{uuid.uuid4()}.{ext}"
        file_path = os.path.join(UPLOAD_DIR, filename)

        with open(file_path, "wb") as f:
            f.write(image_bytes)

        with open(file_path, "rb") as img:
            result = predict_image(img)

        # ✅ prevent duplicates
        existing = await db.history.find_one({
            "waste_type": result["waste_type"]
        })

        if not existing:
            await db.history.insert_one({
                "image_url": f"{filename}",
                "waste_type": result["waste_type"],
                "type": result["type"],
                "recyclable": result["recyclable"],
                "ecoscore": result.get("ecoscore", "N/A"),
                "confidence": round(result["confidence"] * 100),
                "tips": result["tips"],
                "created_at": datetime.utcnow()
            })

        return {
            **result,
            "image_url": f"images/{filename}"
        }

    except Exception as e:
        print("🔥 PREDICT ERROR:", e)
        # raise HTTPException(status_code=500, detail=str(e))
