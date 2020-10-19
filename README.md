# Auth-Board

This is an management application for creating and editing OIDC / Oauth2-clients of Onlineweb4.  
The goal and purpose is to allow for easier access and development of new systems which rely on data from the OW4-api.  

## Contribute  
All contributions are welcome.  
Please note that some code are tightly coupled with OW4-logic.  

### Install  
```bash  
npm i

npm run dev
```

### Authenticate  
This app has to authenticate with OW4.  
To use a local OW4-installation, you need to set some environment variables:  
```bash
export OW4_ADDRESS=http://localhost:8000
export NEXTAUTH_URL=http://localhost:3001
```

Since OW4 already uses port 3000, you need to run Auth-Board at another port.  
In this README, we are using port 3001.  
```bash
npm run dev -- -p 3001
```
