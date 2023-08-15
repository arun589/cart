const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','Arun@2002',{
    dialect:'mysql'
});
module.exports=sequelize;