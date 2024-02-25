import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import course_router, task_router, user_router

FRONTEND_ADDR = os.getenv("FRONTEND_ADDR")

origins = [
    FRONTEND_ADDR,
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router.router)
app.include_router(course_router.router)
app.include_router(task_router.router)