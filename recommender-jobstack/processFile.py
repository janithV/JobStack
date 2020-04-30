 
import urllib2
import json

data = {
        "Inputs": {
                "input1":
                [
                    {
                            'userid': "UID2222",   
                    }
                ],
                "input2":
                [
                    {
                            'userid': "UID2222",   
                            'codingskill': "ck0",   
                            'socialskill': "sk0",   
                            'languageskill': "ls1",   
                            'programdev': "pd0",   
                            'frontenddev': "fe0",   
                            'backenddev': "be0",   
                            'fullstack': "fs0",   
                            'mobiledev': "md1",   
                            'webdev': "wd0",   
                            'uiux': "u0",   
                            'salary': "",   
                            'degreeid': "DID02",   
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

req = urllib2.Request(url, body, headers)

try:
    response = urllib2.urlopen(req)

    result = response.read()
    print(result)
except urllib2.HTTPError, error:
    print("The request failed with status code: " + str(error.code))

    # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
    print(error.info())
    print(json.loads(error.read())) 