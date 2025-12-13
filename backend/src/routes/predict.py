# from fastapi import APIRouter, UploadFile, File
# from src.ml.predictor import predict_image

# router = APIRouter()

# @router.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     result = predict_image(file.file)
#     return result
