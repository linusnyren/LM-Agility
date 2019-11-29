const { Client } = require('pg')
const ical = require('ical-generator')
const express = require('express')

function Main(){
var app = express();
app.listen(9999)

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'lm_hundsport',
  password: 'password',
  port: 5432,
})
client.connect()

let obj = []

client.query('SELECT * from Activity', (err, res) => {
    obj = res.rows
    client.end()
})

app.get('/', (req,res) => {
    res.send(obj)
})
}
Main();