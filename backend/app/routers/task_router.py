from fastapi import APIRouter, Depends
from fastapi.security import HTTPBasicCredentials
from typing import Annotated

from ..auth import security

router = APIRouter(tags=['task'])

@router.post("/course/task/create")
def create_task(course_id: int, credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    return "bruh"


@router.get("/course/task/get_all")
def get_all_course_tasks(course_id: int, credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    return [
        {
            'name': "Доказать теорему ферма",
            'id': 1
        }
    ]

@router.get("/course/task/get")
def get_task_description(task_id: int, credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    return {
        'name': "Сделать консольное приложение A + B",
        'description': "extreme markdown **OMG**"
    }

@router.post("/course/task/gen_repo")
def get_repo(task_id: int, credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    return "git@ip:2222/" + task_id