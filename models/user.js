const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const user=sequelize.define('USERTABLE',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
})
module.exports=user;