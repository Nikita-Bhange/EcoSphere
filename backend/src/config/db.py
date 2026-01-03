

import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://nikitabhange:nikita@cluster0.bzijdqf.mongodb.net/?appName=Cluster0")
DB_NAME = os.getenv("DB_NAME", "ecosphere")

# Create MongoDB client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)

# Database
db = client[DB_NAME]

# Collection
users_collection = db["users"]