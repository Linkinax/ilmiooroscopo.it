import requests
import requests.auth
client_auth = requests.auth.HTTPBasicAuth('66ByZso0ieQJGQ', 'uT1oipvtEufm-pW1m_Qe2QQUy3k')
post_data = {"grant_type": "password", "username": "Linkyolo", "password": "V3rd3sm3r4ld0"}
headers = {"User-Agent": "ChangeMeClient/0.1 by Linkyolo"}
response = requests.post("https://www.reddit.com/api/v1/access_token", auth=client_auth, data=post_data, headers=headers)
print(response.json())