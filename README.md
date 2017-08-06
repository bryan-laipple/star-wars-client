# Star Wars DB Client

The Star Wars DB Client is a small *(really small)* front-end application built using [Angular 4](https://angular.io) and leveraging [Angular Material](https://material.angular.io/) components.

The client communicates with a RESTful API server found in [another repo](https://github.com/bryan-laipple/star-wars-server).

This project was initially populated with the help of the [Angular CLI](https://github.com/angular/angular-cli) tool.

## Running in development

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

Two scripts provide the ability to deploy to AWS.  One for EC2 and the other for S3.
 
### Dockerized server

The **`deploy-to-aws-ecs.sh`** script builds a Docker image that runs [Express](http://expressjs.com/) to serve the web-app.  The image is tagged and pushed to AWS ECR.  An ECS task definition is updated and corresponding service is modifed to use this new task definition.

Initial setup of the ECR repository, ECS cluster, task definition and service are necessary before running the deploy script.

### Letting S3 host it

The **`deploy-to-aws-s3.sh`** script builds the web resources and assets then pushes them to an S3 bucket setup for web hosting.

Similar to the Dockerized deployment solution, AWS S3 must [configured](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html) to host the content before running the deploy script.

## Disclosure

I do not take any credit for the actual content served through the API.  The data and images have been provided/stolen from the [Star Wars API](http://swapi.co/) as well as [Wookieepedia](http://starwars.wikia.com/wiki/Main_Page).
