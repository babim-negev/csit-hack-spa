import os
from fastapi import FastAPI
from pydantic import BaseModel
import jwt
from git import NoSuchPathError, Repo

class UserRegister(BaseModel):
    login: str
    passw: str

app = FastAPI()

JWT_SECRET = os.getenv("HACH_JWT_SECRET", "testsecret")

@app.post("/register")
def register(usr: UserRegister):
    return jwt.encode({"login": usr.login}, JWT_SECRET)

try:
    repo = Repo('./gitrepos/testrep3.git')
except NoSuchPathError:
    repo = Repo.init('./gitrepos/testrep3.git', bare=True)
