"""

# PIPENV RUN START
# NPM RUN START

This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

"""
JWT MODULES
"""
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)
# ITS API.ROUTE BECAUSE OF THIS LINE HERE

#LOGIN
@api.route("/signin", methods=["POST"])
def login():
    body=request.get_json()
    if 'email' not in body or body['email']=="":
        raise APIException("User Not Found", status_code=400)
    if "password" not in body or body["password"]=="":
        raise APIException("User Not Found", status_code=400)

    user=User.query.filter_by(email=body['email']).first()
    print(user.password)
    if user == None or body['password'] != user.password:
        raise APIException("User  not found or password incorrect", status_code=400)
    else:
        access_token = create_access_token(identity=body['email'])
        return jsonify(access_token=access_token)

@api.route("/protected", methods=['GET'])
@jwt_required()
def protected():
    current_user=get_jwt_identity()
    user=User.query.filter_by(email=current_user).first()
    return jsonify({"first_name":user.first_name, "email":user.email}), 200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['GET'])
def get_user():
    person=User.query.all()
    user_list=list(map(lambda x: x.serialize(), person))
    return jsonify(user_list), 200


    # HAD TO CREATE A POST FOR THE SIGN UP

@api.route('/signup', methods=['POST'])
def create_user():
    response_body= request.get_json()
    print(response_body)
    if 'email' not in response_body:
        raise APIException('bad request, email needed', status_code=400)
    if 'password' not in response_body:
        raise APIException('bad request, password needed', status_code=400)
    if 'first_name' not in response_body:
        raise APIException('bad request, first_name needed', status_code= 400)
    if 'last_name' not in response_body:
        raise APIException('bad request, last_name needed', status_code= 400)
    if 'dob' not in response_body:
        raise APIException('bad request, Date of birth needed', status_code= 400)
    new_user=User(email=response_body['email'], password=response_body['password'],first_name=response_body['first_name'],last_name=response_body['last_name'], dob=response_body['dob'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 200

# @api.route('/signin', methods=['POST'])
# def login_user():
#     response_body= request.get_json()
#     print(response_body)
#     signinModel= User.query.filter(User.email == response_body['email'])
#     if signinModel is None:
#         return "Wrong email or password", 404
#     #  and User.query.filter(User.password== response_body['password']):
#     raise APIException('Good request', status_code=200)
#     return "SUCCESS!!!", 200
# HAD THIS AS MY SIGN IN BUT HAD TO CHANGE IT TO USE MARCELLOS JWT

# @api.route('/https://3000-55746-reactjsandflaskc-7fuvd46mddi.ws-us44.gitpod.io/signin', methods=['GET'])
# def LoginUser():
#     response_body= request.get_json()
#     if 'email' not in response_body:
#         raise APIException('bad request, email needed', status_code=400)
#     if 'password' not in response_body:
#         raise APIException('bad request, password needed', status_code=400)
#     get_user_data=User(store.demo)
#     return jsonify(get_user_data.serialize()), 200