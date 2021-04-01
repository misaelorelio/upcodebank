'use strict';
const contas = require('../conta/conta.model');
exports.findAll = function(req, res) {
contas.findAll(function(err, contas) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', contas);
  res.send(contas);
});
};
exports.create = function(req, res) {
const new_contas = new contas(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
contas.create(new_contas, function(err, contas) {
  if (err)
  res.send(err);
  res.json({error:false,message:"contas added successfully!",data:contas});
});
}
};
exports.findById = function(req, res) {
contas.findById(req.params.id, function(err, contas) {
  if (err)
  res.send(err);
  res.json(contas);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    contas.update(req.params.id, new contas(req.body), function(err, contas) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'contas successfully updated' });
});
}
};
exports.delete = function(req, res) {
contas.delete( req.params.id, function(err, contas) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'contas successfully deleted' });
});
};