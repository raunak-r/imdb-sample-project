### Expected Workflow

## Setting Up

## PostMan Link
https://www.getpostman.com/collections/bc01658aa4971bde80ac

## DBDiagram Link

### Backend-Dependencies
```
Via Anaconda Prompt:
	> virtualenv . (Requires Python 3)
	> .\Scripts\activate

	> Inside Master folder
	> pip install -r requirements.txt
	> python backend\manage.py runserver

<!-- DATABASE POPULATION -->
> python backend/manage.py loaddata <fixturename>.json
```

### Frontend-Dependencies
```
1. THE PROJECT ECOSYSTEM (npm, bower)
	<!-- Install Node Js -->
	> https://nodejs.org/en/download/

	<!-- Check version using  -->
	> node -v #v12.15.0
	> npm -v #v6.13.4

2. React App
	> npx create-react-app imdb	

3. SETUP DEPENDENCY MANAGERS FOR PROJECT
	> cd frontend
	> npm install (from package.json)

	<!-- INFO  -->
	* npm install will install all dependencies mention in package.json

4. RUNNING THE FRONTEND
	> Open a new terminal
	> cd speech-recognizer\Master\frontend>
	> npm start

<!-- Other Commands -->
ng generate component dashboard
```	

### React-Native Dependencies
```
Choose 1 of the 3:
1. Snack.expo.io - to directly write code on browser and compile.
2. React-Native CLI Support(Using Android Studio) - Get React Native Support and build on it.
3. React-Native Expo - A set of tools to work on, requires a phone/emulator.

> npm install -g expo-cli
> expo init project-name
> npm start

```

## Design - API

## Design - Databases

### policyEngine

### References:
https://deloittedevelopment.udemy.com/course/react-django-full-stack/learn/lecture/14268834#content