from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes.PublicRoute import route as PublicRoute
from src.routes.AuthRoute import router as AuthRoute

app = FastAPI()

# ✅ ONLY frontend origins
origins = [
    "http://localhost:5173",  # Vite React
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,   # use only if cookies/session
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

# ✅ ROUTERS AFTER CORS
app.include_router(PublicRoute)
app.include_router(AuthRoute)
