## Client Gateway
Gateway to interact with microservices

## Dev
1. Clone repo
2. Install dependencies `npm install`
3. Create .env file based on `.env.template`
4. Run microservices that are going to be consumed
5. Run project with `npm run start:dev`

## Nats
```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```