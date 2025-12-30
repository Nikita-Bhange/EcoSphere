from fastapi import APIRouter
from src.config.db import db

router = APIRouter(prefix="/api/v1/auth")

@router.get("/history")
async def get_history():
    data = []
    async for item in db.history.find().sort("created_at", -1):
        item["_id"] = str(item["_id"])
        data.append(item)
    return data
