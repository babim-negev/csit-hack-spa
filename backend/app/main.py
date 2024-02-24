from fastapi import FastAPI

from .routers import course_router, task_router, user_router

from git import NoSuchPathError, Repo

app = FastAPI()
app.include_router(user_router.router)
app.include_router(course_router.router)
app.include_router(task_router.router)

try:
    repo = Repo('./gitrepos/testrep3.git')
except NoSuchPathError:
    repo = Repo.init('./gitrepos/testrep3.git', bare=True)
