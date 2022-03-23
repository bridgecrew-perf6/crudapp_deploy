const app = require('./server/app/app')

app.listen(process.env.PORT || 3000, function () {
  
  console.log('Servidor iniciado na porta: ' + this.address().port)
})
