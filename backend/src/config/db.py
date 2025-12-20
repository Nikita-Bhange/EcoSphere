# import motor.motor_asyncio
# from dotenv import load_dotenv
# import os

# load_dotenv()

# MONGO_URI='mongodb://localhost:27017/'

# MONGO_URI = os.getenv("MONGO_URI")
# DB_NAME = os.getenv("DB_NAME", "ecoSphere")

# # client
# client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
# db = client[DB_NAME]

import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()

# If .env exists, it will use it; otherwise fallback to localhost
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
DB_NAME = os.getenv("DB_NAME", "ecosphere")

# Create MongoDB client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)

# Database
db = client[DB_NAME]

# Collection
users_collection = db["users"]