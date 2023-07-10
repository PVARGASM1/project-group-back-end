# Project-group-back-end - MAKE IT REAL

## Built with

- Node.js and Express

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Express Router and Routes




| Route        | HTTP Verb | Description             |
|--------------|-----------|-------------------------|
| /healthcheck | GET       | Return an ok            |
| /data        | POST      | Creates a new data      |
| /data        | GET       | Get list of data        |
| /data/:id    | GET       | Get a single row        |
| /data/:id    | PUT       | Update a row            |
| /data/:id    | DELETE    | Delete a row            | 

## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a row at table, here we have some examples.

### Create a **row** 

Request Body:

```json
{
  "name": "Recycled Steel Sausages",
  "color": "white",
  "category": "Music",
  "price": "386"
}
```

Response:

```json
{
  {
    "message": "User is created",
     "data": {
       "name": "Recycled Steel Sausages",
       "color": "white",
       "category": "Music",
       "price": "386",
       "id": 1
     }
  }
}
```

### Read **data**

Response:

```json
{
  "message": "Users found it",
  "data": [
    {
        "name": "Recycled Steel Sausages",
        "color": "white",
        "category": "Music",
        "price": "386",
        "id": 1
    }
  ]
}
```


### Developing

1. Clone the repository: `https://github.com/PVARGASM1/project-group-back-end`

2. Run `npm install` or `yarn` to install server dependencies.

3. Run `npm run start` or `yarn start` to start the development server.

### Deploying

This API is deployed on Render services. You can make requests on: 
 https://project-group-back-end.onrender.com

## Contributors

- [Camilo Suarez](https://github.com/Camilo-Suarez98)
- [Andrea Vargs](https://github.com/PVARGASM1)
