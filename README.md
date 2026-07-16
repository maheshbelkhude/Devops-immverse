# Devops-immverse
assignment of Immverse AI 
# Sample Node.js Docker Application
## Prerequisites
- - Docker
- Node.js (optional for local development)
## Install Dependencies
```bash
npm install
```

## Run Locally
```bash
node app.js
```

Application URL:
```
http://localhost:3000
```

## Build Docker Image
```bash
docker build -t sample-app .
```

## Run Docker Container
```bash
docker run -d -p 3000:3000 --name sample-container sample-app
```
## Verify
Open:
```
http://localhost:3000
```
Health Check:
```
http://localhost:3000/health
```
