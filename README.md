## 목표

- database(mysql, postgresql) - prisma - graphql api - client 구조
- graphql api subscription resolve 를 이용해 prisma subscription 에 realtime 으로 데이터 전송이 가능한지 테스트
- client -> request subscription(graphql api) -> request subscription(prisma)
- success

### prisma

- select new database
- port: 4466

```
prisma init prisma-graphql-test

cd prisma-graphql-test

docker-compose up -d
```

### graphql-yoga

- import prisma-client
- port: 4000

```
ts-node index.ts # yarn global add ts-node or npm install ts-node -g
```
