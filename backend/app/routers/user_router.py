from fastapi import APIRouter
from pydantic import BaseModel

import os
import jwt

JWT_SECRET = os.getenv("HACH_JWT_SECRET", "testsecret")

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
    # TODO: этот токен должны записать на фронте в Cookie
    return jwt.encode({"login": usr_log.login}, JWT_SECRET)

@router.post("/user/register")
def user_register(usr_reg: UserRegister):
    # TODO: работа с бд, регистрация
    return 