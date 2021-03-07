# Laravel & Angular Demo

## Directories

|-- server // Laravel Project Source Code\
--|--resources/views/client.blade.php // This php file for bootstrap spa app\
|-- client // Angular Project Source Code\

## Environments
This project requires several global NodeJS Modules: Nodemon, GulpJS, Angular CLI. If you not setup them in you development environment, run this below command lines:\
-- Nodemon: `npm i -g nodemon`\
-- GulpJS: `npm i -g gulp`\
-- Angular CLI: `npm i -g @angular/cli`

## Config
This project use GulpJS config tasks for building client project and copy dist files to public/client, rewrite client.blade.php

## Tutorials
- In development, run `npm run build-dev` at dir `client`, then run php server, client app will build and copy to server with dev config.
- For deploying, run `npm run build-prod` at dir `client`, then run php server, client app will build and copy to server with prod config

## Thank for
https://medium.com/eliteng/integrate-and-deploy-laravel-5-and-angular-5-project-to-a-shared-hosting-8ce44050df91
