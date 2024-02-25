from fastapi import APIRouter
from pydantic import BaseModel

import os

class UserLogin(BaseModel):
    username: str
    password: str

class UserRegister(BaseModel):
    fio: str
    username: str
    password: str

router = APIRouter(tags=['user'])

@router.post("/user/login")
def user_login(usr_log: UserLogin):
    # TODO: токен должны записать на фронте в Cookie
    return "abobus"

@router.post("/user/register")
def user_register(usr_reg: UserRegister):
    # TODO: работа с бд, регистрация
    return "amogus"