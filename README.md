# docker-nodejs-env

Docker image of node server which replies with 

`{
  process.env,
  request
}
`


## Usage:

`docker run vit100/nodejs-env`


## What you can get from this image and info it returns
Useful to for hosting inspection/testing

When you deploy this image into your host (azure for example), you can see what host injects into process.env and into request.

For example azure web application container service injects properties from Application Settings tab.

Another interesting point to review is request. Here you can see authorization claims for example. If your host does authorization for you it should inject some params in request, for example azure does it like this: https://docs.microsoft.com/en-us/azure/app-service/app-service-authentication-how-to#access-user-claims

