# Todos


## Setting up the Environment

### Front-end

- Navigate to `frontend` folder
    `cd frontend`

- Install Dependencies
    `npm install`


### Back-end

- Navigrate to `backend` folder
    `cd backend`

- Install Dependencies
    `composer install`

- Create a MySQL Database on your localhost

- Get a copy of `.env.example` file and rename it to `.env`

- Add the name of the database you created to the `DB_DATABASE` key of the `.env` file. Change other database also, if needed

- Run below command to create a secret key
    `php artisan key:generate`

- Migrate & Seed Database
    `php artisan migrate`
    `php artisan db:seed`

## Usage

### Front-end

`npm run start`

### Back-end

`php artisan serve`

## Frontend pages

- Login `/login`
- Home `/`

## API Endpoints

### GET
`/api/todos`

### POST

`/api/todos`

Body:

```json
{
    "description": "Order ssss"

}
```

### PUT
`/api/todos{id}`

```json
{
    "description": "Order ssss"

}
```
### DELETE
`/api/todos{id}`