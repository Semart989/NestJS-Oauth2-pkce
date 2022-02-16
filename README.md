### This is an example on NestJS application using Oauth2 pkce flow. 
This repo uses Azure AD as example.
- It shows how to configure and safeguard an API using Oauth pkce flow with passport
- It shows how to configure swagger-ui to use Oauth pkce flow and decorate an API to let swagger know a bearer token is needed in `Authorization` header

#### Development
Update the variable in `.env`
1. run `yarn install`
2. run `yarn start`