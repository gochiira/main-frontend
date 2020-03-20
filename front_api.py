from fastapi import FastAPI
from starlette.requests import Request
import uvicorn
 
app = FastAPI(
    title='FastAPIでつくるtoDoアプリケーション',
    description='FastAPIチュートリアル：FastAPI(とstarlette)でシンプルなtoDoアプリを作りましょう．',
    version='0.9 beta'
)
 

@app.get("/")
def index(request: Request):
    return {'Hello': 'World'}
 
if __name__ == '__main__':
    uvicorn.run(app=app)