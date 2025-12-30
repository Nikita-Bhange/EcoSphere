from pydantic import BaseModel
from typing import List
from datetime import datetime

class History(BaseModel):
    image_url: str
    waste_type: str
    type: str
    recyclable: bool
    ecoscore: str
    tips: List[str]
    confidence: float
    created_at: datetime
