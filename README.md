# docker-nodejs-env

Express based app to inspect incoming request and host env variables.

`{
  process.env,
  request
}
`
## Usage
### docker:

`docker run -p 80:100 vit100/nodejs-env`
where 80 is exposed port for your browser

### local nodejs

```
git clone https://github.com/vit100/docker-nodejs-env.git

cd https://github.com/vit100/docker-nodejs-env.git

npm install

npm run start
```

## What you can get from this image and info it returns
Useful for hosting inspection/testing.
Response returns incoming request + host env variables

When you deploy this image into your host (azure for example), you can see what host injects into process.env and into request.

For example azure web application container service injects properties from Application Settings tab.

Another useful usage is to review incoming request.
Here you can see authorization claims, for example. If your host does authorization for you it should inject some params in request, for example azure does it like this: https://docs.microsoft.com/en-us/azure/app-service/app-service-authentication-how-to#access-user-claims

Also can be used for code /token inspection in oauth2/oidc scenarios - when your identity server redirects back with code or tokens (in case of implicit flow).

