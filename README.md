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

## Design - API

## Design - Databases

### policyEngine

### References:
https://deloittedevelopment.udemy.com/course/react-django-full-stack/learn/lecture/14268834#content