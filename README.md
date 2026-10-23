# Jenkins-ci-cd
# Jenkins CI/CD Pipeline

A Jenkins pipeline that builds, tests and deploys a Node.js (Express) app with Docker.

## Pipeline stages
1. **Build**: builds the Docker image, tagged with the build number
2. **Test**: runs `npm test` inside the built image
3. **Deploy**: restarts the app with Docker Compose and checks `/health`

## Trigger
Jenkins polls GitHub every 2 minutes (Poll SCM) and starts a build on each new commit.

## Run locally
    docker compose up -d --build
    curl http://localhost:3000/health

    
<img width="1152" height="502" alt="image" src="https://github.com/user-attachments/assets/2fd142db-3a96-42cc-a1c5-6eb84a1f16aa" />
