FROM python:3.12.1

WORKDIR /code
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app app

CMD ["uvicorn", "app.main:app"]