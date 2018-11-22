
## UserEntity

#### Keep track of users without the need for login

When the app starts, it first looks in the persistant redux store
to see if there is already a __fingerprint__. 

If not, then the fingerprinting process is initalised

- A fingerprint is generated using __fingerprintjs2__
- This fingerprint is checked against firestore for matches
- If there is a match, retrieve that user data
- If no match, a new record is created and user data is returned

And the user's geolocation and IP is looked up https://geoiplookup.io
