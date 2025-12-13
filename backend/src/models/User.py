# from pydantic import BaseModel,Field,EmailStr
# from typing import Union
# class User(BaseModel):
#     username :str =Field(... ,description="Name is Required")
#     email: EmailStr =Field( ..., description="Email is Required")
#     password:str = Field(...,description="Password is Required")
  

from pydantic import BaseModel, EmailStr

class User(BaseModel):
    email: EmailStr
    password: str
