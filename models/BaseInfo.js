let Sequelize = require('sequelize');
let sequelize = require('../service/mysql');


//默认会自带id字段
let BaseInfo = sequelize.define(
    'BaseInfo',
    {
        account:{
            type:Sequelize.STRING(64),
            allowNull:false,
        },
        phone:{
            type:Sequelize.STRING(13),
            allowNull:true
        },
        nickname:{
            type:Sequelize.STRING(30),
            allowNull:true
        }
    },
    {
        // 自定义表名
        // 'freezeTableName': true,
        // 'tableName': 'xyz_users',
        // 是否需要增加createdAt、updatedAt、deletedAt字段
        // 'timestamps': true,
        // 不需要createdAt字段
        // 'createdAt': false,
        // 将updatedAt字段改个名
        // 'updatedAt': 'utime',
        // 将deletedAt字段改名
        // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
        // 'deletedAt': 'dtime',
        'paranoid': true

    }
);
//不存在就创建【不要用force，会删除表】
BaseInfo.sync();

module.exports = BaseInfo;