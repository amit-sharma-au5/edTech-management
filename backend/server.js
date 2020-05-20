//Create Server 
const PORT = 3010;
const http = require('http')
const app = require("./app")
let server = http.createServer(app)


server.listen(PORT, () => console.log("Server is active at Port address " + PORT ))