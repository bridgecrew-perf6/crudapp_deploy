const app = require('./server/app/app')

app.listen(process.env.PORT || 3333, function () {
  console.log('Servidor iniciado na porta: ' + this.address().port)
})
