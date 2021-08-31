from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)
CORS(app)

class getGoals(Resource):
    def get(self, id):
        return "honk"
        # TODO: build API to return the goals for each of the five categories at each level

class Y3NumSeq(Resource):
    def get(self, id):
        if id == 4:
            questions = [
                {'qtext': 'What is 172 rounded to the nearest ten?', 'answer': '170'},
                {'qtext': 'What is 537 rounded to the nearest ten?', 'answer':  '540'},
                {'qtext': 'What is 481 rounded to the nearest hundred?', 'answer':  '500'},
                {'qtext': 'What is 841 rounded to the nearest hundred?', 'answer':  '800'},
                {'qtext': 'What is 652 rounded to the nearest hundred?', 'answer':  '700'},
            ]
            return jsonify(year=3, goaltext='Round 3 digit numbers to the nearest ten or hundred', questions=questions)
        else:
            return "HONK"
        
api.add_resource(Y3NumSeq, '/y3/numseq<int:id>')
api.add_resource(getGoals, '/getgoals/y<int:id>')

if __name__ == '__main__':
    app.run(debug=True)