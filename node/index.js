const express = require('express')
const app = express()
const port = 3030
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};


app.get('/', (req,res) => {
  //insert names
  const mysql = require('mysql')
  const connection = mysql.createConnection(config)
  const trunca = `truncate table people`
  const sql = `INSERT INTO people(name) values('Anderson'),('Antonio'),('Jorge'), ('Fatima')`
  connection.query(trunca)
  connection.query(sql)

  //Return Names
  var resultNames = ""
  connection.query("SELECT name from people", (err, results) => {
    if (err) {
      throw err
    }
    
    
    for ( const returnDb in results) {
      
      resultNames = resultNames + "<li>"+results[returnDb].name+"</li>"
                  
    }
    console.log(resultNames)
    res.send(`<h1>Full Cycle Rocks!</h1>
            <ul>
              ${resultNames}
            </ul>`) 
  })
  
  connection.end()  
})


app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})