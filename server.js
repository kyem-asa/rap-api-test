const express = require('express');
const app = express();
const PORT = 8000
const cors = require('cors')

app.use(cors())

const rappers = {
  "21 savage": {
    "age": 30,
    "birthName": "Shéyaa Bin Abraham-Joseph",
    "birthLocation": "London, England",
  },
  "chance the rapper": {
    "age": 30,
    "birthName": "Chancellor Bennet",
    "birthLocation":  "Chicago, Illinois",
  },

  "dylan": {
    "age": "unknown",
    "birthName": "unknown",
    "birthLocation": "unknown",
  },
};

app.get('/', (reqeust, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rappername', (request, response) => {
  const rappersName = request.params.rappername.toLowerCase()
  if(rappers[rappersName]) {
    response.json(rappers[rappersName])
  } else {
    response.json(rappers['dylan'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}, go catch it.`)
})