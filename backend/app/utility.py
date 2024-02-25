from git import NoSuchPathError, Repo
from pathlib import Path

def get_repo(name: str) -> Repo:
    path = REPO_DIR + name + ".git"
    try:
        return Repo(path)
    except NoSuchPathError:
        return Repo.init(path, bare=True)

REPO_DIR = "./gitrepos/"
Path(REPO_DIR).mkdir(parents=True, exist_ok=True)
