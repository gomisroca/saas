from backend.config import get_settings
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI"}

settings = get_settings()
@app.get("/info")
def read_info():
    return {
        "allowed_origins": settings.allowed_origins,
        "environment": settings.environment
    }
