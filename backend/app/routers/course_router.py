from fastapi import APIRouter, Depends
from fastapi.security import HTTPBasicCredentials
from typing import Annotated

from ..auth import security

router = APIRouter(tags=['course'])

@router.post("/course/create")
def create_course(credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    return "xz"

@router.get("/course/get_all")
def get_courses(credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    # TODO: вынуть из бд курсы, вернуть их
    return [
        {
        'name': 'Алгем',
        'teacher': 'teacher1',
        'id': 1
        },
        {
            'name': 'Java',
            'teacher': 'teacher2',
            'id': 2
        }]

@router.get("/course/get_mine")
def get_mine_courses(credentials: Annotated[HTTPBasicCredentials, Depends(security)]):
    # TOOD: посмотреть на курсы пользователя, их вернуть
    return [
        {
        'name': 'Матанализ',
        'teacher': 'teacherrrr',
        'id': 3
        }
    ]