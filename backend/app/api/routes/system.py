import platform

from fastapi import APIRouter

from app.core.config import settings

router = APIRouter()


@router.get("/system/info", tags=["System"])
def system_info():
    return {
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "python": platform.python_version(),
        "platform": platform.system(),
        "debug": settings.DEBUG,
    }
