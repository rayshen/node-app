var express = require('express');
var router = express.Router();

let BaseInfo = require('../models/BaseInfo');

/**
 * 获取所有用户信息
 */
router.get('/', async (req, res)=>{
    let users = await BaseInfo.findAll();
    res.send(users);
});


/**
 * 获取具体某个用户
 */
router.get('/:account', async (req, res) =>{
    let queryAccount = req.params.account;
    if(queryAccount){
        let user = await BaseInfo.findOne({
            where: {
                account:queryAccount
            }
        })
        if(user){
            res.send(user);
        }else{
            res.send({
                error:'找不到此人'
            });
        }
        return;
    }
    res.send({
        error:'请传递正确的账号'
    });
});

module.exports = router;
