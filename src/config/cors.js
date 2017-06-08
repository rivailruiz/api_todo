module.exports = function(req, res, next){
  //Cabeçalhos do cors
  res.header('Acess-Control-Allow-Origin', '*');
  res.header('Acess-Control-Allow-Origin', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Acess-Control-Allow-Origin', 'Originm X-Requested-With, Content-Type, Accept');
  next()
}
