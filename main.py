from flask import *
from database_api import *
import requests

app = Flask(__name__)


@app.route('/login', methods=['POST'])
def login():
    value = request.get_json(silent=True)
    if authorize_user(value['email'], value['password']) == [(1,)]:
        result = select_user_data(value['email'])
        result.insert(0, 200)
        return '200'
    else:
        print('Неверный логин или пароль')
        return '400'

if __name__ == "__main__":
    app.run(debug=True)
