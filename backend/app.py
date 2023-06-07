import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)
@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

@app.route('/api/getAnswer', methods=["post"])
def getAnswer():
    try:
        getanswer_details = request.get_json()
        result = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[
            {"role": "system", "content": "You are AI Assistant for lesson plan generation."},
            {"role": "user", "content": getanswer_details["prompt"]}
        ])
        return result['choices'][0]['message']['content'], 200
    except Exception as err:
        print(err)
        return jsonify({'message': 'Langchain Error'}), 401

if __name__ == "__main__":
    app.run(host='0.0.0.0')
