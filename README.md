# ContactsApp

## Project setup

```bash
$ npm install
```

## Database in Prisma setup

install postgres and create table "allcloud"

set postgres user as db owner or create new db user 

Create .env file in root of the project, example:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/allcloud"

```bash
npx prisma migrate reset 
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
