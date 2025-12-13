# from fastapi import APIRouter, HTTPException
# from src.config.db import db

# router = APIRouter(prefix="/api/v1/auth")

# @router.post("/login")
# async def login(user: dict):
#     email = user.get("email")
#     password = user.get("password")

#     if not email or not password:
#         raise HTTPException(status_code=400, detail="Email and password required")

#     existing_user = await db.users.find_one({"email": email})

#     if not existing_user:
#         raise HTTPException(status_code=401, detail="Invalid email or password")

#     # ❗ Plain text password check (for testing only)
#     if existing_user["password"] != password:
#         raise HTTPException(status_code=401, detail="Invalid email or password")

#     return {
#         "access_token": "dummy-token",
#         "message": "Login successful"
#     }


from fastapi import APIRouter, HTTPException
from src.config.db import db

router = APIRouter(
    prefix="/api/v1/auth",
    tags=["Auth"]
)

# ---------------- REGISTER ----------------
@router.post("/registration")
async def register(user: dict):
    email = user.get("email")
    password = user.get("password")

    if not email or not password:
        raise HTTPException(
            status_code=400,
            detail="Email and password are required"
        )

    # Check if user already exists
    existing_user = await db.users.find_one({"email": email})
    if existing_user:
        raise HTTPException(
            status_code=409,
            detail="User already exists"
        )

    # Insert user (plain password - for learning only)
    new_user = {
        "email": email,
        "password": password
    }

    await db.users.insert_one(new_user)

    return {
        "message": "Registration successful"
    }


# ---------------- LOGIN ----------------
@router.post("/login")
async def login(user: dict):
    email = user.get("email")
    password = user.get("password")

    if not email or not password:
        raise HTTPException(
            status_code=400,
            detail="Email and password are required"
        )

    existing_user = await db.users.find_one({"email": email})

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if existing_user.get("password") != password:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    return {
        "message": "Login successful",
        "access_token": "dummy-token"
    }



# from fastapi import APIRouter
# from src.models.User import User as userModel
# from src.config.db import db as MongoDB


# username:nikitabhange password:nikita