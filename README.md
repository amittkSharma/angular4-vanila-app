# Angular4-Vanila-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Manual Steps for creating a project

	1. Install angular cli globally on the machine - using npm install -g @angular/cli
	2. Create a new project folder using the cli utility ng new PROJECT-NAME
	3. Navigate inside the project
	4. Execute the command ng-serve and sample application will come up.
	5. Include angular-material framework inside the project
		a. Install npm install --save @angular/material @angular/cdk @angular/animations
	6. Execute ng g module material-module command to create a new module in the system. This command is from angular cli. 
	7. Import material modules that are needed in the app in the module of the app. The material modules are defined in the API section of the angular material of each component
	8. Do the following imports in the "app.module"
		a. import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
		b. import { HttpClientModule } from '@angular/common/http';
		c. import { MaterialModule } from './material-module/material-module.module';
	9. Include  : <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> in index.html for the material icons

