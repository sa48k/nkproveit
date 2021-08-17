from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)
CORS(app)

class Y3NumSeq(Resource):
    def get(self, id):
        if id == 4:
            questions = [
                {'What is 172 rounded to the nearest ten?': '170'},
                {'What is 537 rounded to the nearest ten?': '540'},
                {'What is 481 rounded to the nearest hundred?': '500'},
                {'What is 841 rounded to the nearest hundred?': '800'},
                {'What is 652 rounded to the nearest hundred?': '700'},
            ]
            return jsonify(questions)
        else:
            return "HONK"
        
api.add_resource(Y3NumSeq, '/y3/numseq<int:id>')

if __name__ == '__main__':
    app.run(debug=True)