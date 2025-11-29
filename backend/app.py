from fastapi import FastAPI
from src.routes.PublicRoute import route as PublicRoute
from src.routes.AuthRoute import router as AuthRoute
#cors error solution
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",  # your frontend dev server
    "http://localhost:8000",  # optional, if you want backend to call itself
    "*"                       # allow all (use only in dev!)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # list of allowed origins
    allow_credentials=True,
    allow_methods=["*"],          # allow all HTTP methods
    allow_headers=["*"],          # allow all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

#add routes
app.include_router(PublicRoute)
app.include_router(AuthRoute)




# run backend:
# activate virtual env : venv\Scripts\Activate
#                         fastapi dev app.py