/**
 * 数据库操作测试
 */
let BaseInfo = require('../models/BaseInfo');

async function createPerson(){
    try{
        let res = await BaseInfo.create({
            account: 'lisi',
            phone: '1350000000',
            nickname: '李四'
        })
        console.log('inserted succ');
    }catch(err){
        console.log('inserted error');
        console.log(err);
    };
}
createPerson();
