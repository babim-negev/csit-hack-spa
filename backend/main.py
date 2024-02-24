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
def read_item(usr: UserRegister):
    return jwt.encode({"login": usr.login}, JWT_SECRET)

try:
    repo = Repo('./testrepo')
except NoSuchPathError:
    repo = Repo.init('./testrepo')

print(repo.head.commit.tree)