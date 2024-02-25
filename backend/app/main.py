from fastapi import FastAPI

from .routers import course_router, task_router, user_router

from git import NoSuchPathError, Repo

app = FastAPI()
app.include_router(user_router.router)
app.include_router(course_router.router)
app.include_router(task_router.router)

def get_repo(path: str) -> Repo:
    try:
        return Repo(path)
    except NoSuchPathError:
        return Repo.init(path, bare=True)

REPO_DIR = "./gitrepos/"

repo = get_repo(REPO_DIR + "testrepo3.git")