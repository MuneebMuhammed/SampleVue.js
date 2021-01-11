const express = require ('express')
const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
  response.send("Hello Vue")
})
app.listen(3000, () => console.log('Server running on port 3000'))