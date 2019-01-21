var OrientDB = require('orientjs');

var server = OrientDB({
   host: 'localhost',
   port: 2424,
   username: 'root',
   password: '****'
});
var db = server.use('o2');
/*
db.record.get('#46:0').then(function (record){
   	console.log('Loaded record:',record);
});
*/
/*
*CREATE
*READ
*UPDATE
*DELETE
*/

//CREATE
/*var sql = 'SELECT FROM topic';
db.query(sql).then(function(results){
  console.log(results);
});*/

// var sql = 'SELECT FROM topic WHERE @rid=:rid';
// var param = {
//   params:{
//     rid:'#46:0'
//   }
// };
// db.query(sql,param).then(function(results){
//   console.log(results);
// });

//INSERT
/*
var sql = "INSERT INTO topic (title, description) VALUES(:title,:desc)" ;
var param = {
  params:{
    title:'Express',
    desc:'Express is framework for web'
  }
}
db.query(sql,param).then(function(results){
  console.log(results);
});
*/
//UPDATE
/*
var sql = "UPDATE topic SET title=:title WHERE @rid=:rid";
db.query(sql,{params:{title:'Expressjs',rid:'#47:0'}}).then(function(results){
  console.log(results);
})
*/

//DELETE
/*
var sql = "DELETE VERTEX FROM topic WHERE @rid=:rid";
db.query(sql,{params:{rid:'#47:0'}}).then(function(results){
  console.log(results);
});
*/
