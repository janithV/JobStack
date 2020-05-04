import urllib.request
import json
import sys 

data = {
        "Inputs": {
                "input1":
                [
                    {
                            'userid': sys.argv[1]
                    }
                ],
                "input2":
                [
                    {
                            'userid': sys.argv[1],
                            'codingskill': sys.argv[2],
                            'socialskill': sys.argv[3],
                            'languageskill': sys.argv[4],
                            'programdev': sys.argv[5],
                            'frontenddev': sys.argv[6],
                            'backenddev': sys.argv[7],
                            'fullstack': sys.argv[8],
                            'mobiledev': sys.argv[9],
                            'webdev': sys.argv[10],
                            'uiux': sys.argv[11],
                            'salary': "",
                            'degreeid': sys.argv[12],
                    }
                ],
        },
    "GlobalParameters":  {
    }
}

body = str.encode(json.dumps(data))

url = 'https://ussouthcentral.services.azureml.net/workspaces/8d0b84fbc4f24e91b3a9441488fa5f04/services/d3084088125b438a83a63d59fb3170fd/execute?api-version=2.0&format=swagger'
api_key = 'iYv8xdn9oB5wy/grRMJD7o4PYfV/ct6VapqZB+jzBxOb8tZ38hs8aGR/yptrYsTWRvyqN295n4vz3FTPWp4QmQ==' # Replace this with the API key for the web service
headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

req = urllib.request.Request(url, body, headers)

try:
    response = urllib.request.urlopen(req)

    result = response.read()
    print(result)
except urllib.error.HTTPError as error:
    print("The request failed with status code: " + str(error.code))

    # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
    print(error.info())
    print(json.loads(error.read().decode("utf8", 'ignore')))