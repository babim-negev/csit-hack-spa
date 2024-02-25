from fastapi import APIRouter
from pydantic import BaseModel

import os

class UserLogin(BaseModel):
    login: str
    passw: str

class UserRegister(BaseModel):
    fio: str
    login: str
    passw: str

router = APIRouter(tags=['user'])

@router.post("/user/login")
def user_login(usr_log: UserLogin):
    # TODO: токен должны записать на фронте в Cookie
    return {'token': "nothing"}

@router.post("/user/register")
def user_register(usr_reg: UserRegister):
    # TODO: работа с бд, регистрация
    return 