from  fastapi import APIRouter

route = APIRouter(prefix="/api/v1")

@route.get("/")
def indexView():
    return{
        "msg":"Server is running "
    }