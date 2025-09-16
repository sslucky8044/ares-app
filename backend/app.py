from flask import Flask, jsonify
from business import get_data

app = Flask(__name__)

@app.route('/')
def hello_world():
    
    return "Hello, World!"

@app.route('/api', methods=['GET'])
def api():
    data = get_data()
    data = {"data": data}
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000, debug=True)