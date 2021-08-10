from flask import request 
import json
import typing 

def ParseReqBody(request) -> dict: 
    return dict(json.loads(request.get_data()))