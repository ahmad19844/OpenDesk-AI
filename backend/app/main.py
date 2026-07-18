from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import settings
from app.core.logging import logger

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Offline AI Workspace",
)

app.include_router(
    api_router,
    prefix=settings.API_PREFIX,
)


@app.get("/")
def root():
    logger.info("Root endpoint accessed")

    return {
        "message": f"Welcome to {settings.APP_NAME}",
        "version": settings.APP_VERSION,
    }
