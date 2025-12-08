from fastapi import APIRouter
from src.models.User import User as userModel
from src.config.db import db as MongoDB

router = APIRouter(prefix="/api/v1/auth")

# collection
authCollection = MongoDB["user"]

@router.post("/register")
async def registerUser(data: userModel):
    # insert the user document
  await authCollection.insert_one(data.dict())
  return {
        "msg": "User registered successfully"
    }

# username:nikitabhange password:nikita