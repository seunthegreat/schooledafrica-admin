
> Tested with:

| NodeJS | NPM | YARN | Status | 
| --- | --- | --- | --- | 
| `v16.13.0` | `v8.1.0`   | `v1.22.5` | ✔️ | 
| `v14.15.0` | `v6.14.8`  | `v1.22.5` | ✔️ |
| `v12.22.0` | `v6.14.11` | `v1.22.5` | ✔️ |


## ✨ How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

**Step #1** - Clone the project

```bash
$ git clone https://github.com/seunthegreat/schooledafrica-admin.git
$ cd react-soft-ui-dashboard
```

<br >

**Step #2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

**Step #3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## ✨ Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />

## ✨ LARAVEL API Server

<br />

[https://www.google.com/search?q=LARAVEL+9&biw=1920&bih=969&tbm=isch&sxsrf=ALiCzsYSVwsqf3Twaq3K07LO0X5adCx8gQ:1661978305295&source=lnms&sa=X&ved=2ahUKEwi7uovU9_H5AhUOR_EDHQ0wA3MQ_AUoA3oECAEQBQ#imgrc=Z-iBE1rcXLXhkM](https://laravelnews.imgix.net/images/laravel9.png?ixlib=php-3.3.1)

<br />

### Compile the API Server

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

**Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Step #3** - Run the SQLite migration via TypeORM

```
$ yarn typeorm migration:run
```

**Step #4** - Start the API server (development mode)

```bash
$ npm dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

---
[React Soft Dashboard](https://appseed.us/product/node-js-react-soft-dashboard) - Provided by AppSeed **[App Generator](https://appseed.us/app-generator)**.
