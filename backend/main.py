import os

from fastapi import FastAPI
from pydantic import BaseModel

import jwt

from git import NoSuchPathError, Repo

class UserLogin(BaseModel):
    login: str
    passw: str

class UserRegister(BaseModel):
    fio: str
    login: str
    passw: str

JWT_SECRET = os.getenv("HACH_JWT_SECRET", "testsecret")


app = FastAPI()
@app.post("/user/login")
def login(usr_log: UserLogin):
    # TODO: этот токен должны записать на фронте в Cookie
    return jwt.encode({"login": usr_log.login}, JWT_SECRET)

@app.post("/user/register")
def register(usr_reg: UserRegister):
    # TODO: работа с бд, регистрация
    return 

@app.post("/course/create")
def create_course():
    return "xz"

@app.get("/course/get_all")
def get_courses():
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

@app.get("/course/get_mine")
def get_mine_courses():
    # TOOD: посмотреть на курсы пользователя, их вернуть
    return [
        {
        'name': 'Матанализ',
        'teacher': 'teacherrrr',
        'id': 3
        }
    ]

@app.post("/course/task/create")
def create_task(course_id: int):
    return "bruh"


@app.get("/course/task/get_all")
def get_all_course_tasks(course_id: int):
    return [
        {
            'name': "Доказать теорему ферма",
            'id': 1
        }
    ]

@app.get("/course/task/get")
def get_task_description(task_id: int):
    return {
        'name': "Сделать консольное приложение A + B",
        'description': "extreme markdown **OMG**"
    }

@app.post("/course/task/gen_repo")
def get_repo(task_id: int):
    return "git@ip:2222/" + task_id

try:
    repo = Repo('./gitrepos/testrep3.git')
except NoSuchPathError:
    repo = Repo.init('./gitrepos/testrep3.git', bare=True)
