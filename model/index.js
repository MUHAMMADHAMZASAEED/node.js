const {Sequelize,DataTypes,op}=require('sequelize');

const Con=new Sequelize('database','root','',{

  host:'localhost',
  dialect:'mysql'

});
Con.authenticate()
.then(()=>{
    console.log('Connection make Successfully!!!!');
})
.catch(()=>{
    console.log('Connection not Sucessfully!!!!');
});


Con.sync()