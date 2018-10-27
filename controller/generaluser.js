const express = require('express')
const router = express.Router();
const adminauth = require('./adminauth')
const auth = require('./auth')

const user = require('../database/model/generaluser')
const adminuser = require('../database/model/adminuser')

// 添加普通用户
router.post('/add',adminauth, async (req,res,next) => {
    try{
        let{username,password,nicheng,desc,avatar,job,phone,sex} = req.body;
        let finddata = await user.findOne({username})
        if(finddata){
            res.json({
                code:401,
                msg:'该用户名已被注册'
            })
        }else{
            if(!avatar){
                let avatarNumber = Math.floor(Math.random()*9)
                avatar = `http://pgdt2gm62.bkt.clouddn.com/avatar${avatarNumber}.png`
            }
            const data = await user.create({username,password,nicheng,avatar,desc,job,phone,sex})

            res.json({ // count未加
                code: 200,
                data,
                msg: '添加普通用户成功'
            })
        }
        
    }catch(err){
        next(err)
    }
})

// 普通用户登录
router.post('/login', async (req,res,next) => {
    try{
        let {username, password} = req.body;
        let finddata = await user.findOne({username})
        if(username&&password){
            if(!finddata){
                res.json({
                    code:401,
                    msg:'该用户不存在'
                })
            }else if(finddata.password == password){
                req.session.user = finddata;
                res.json({
                    code:200,
                    msg:'登录成功',
                    data:finddata
                })
            }else{
                res.json({
                    code:401,
                    msg:'密码错误'
                })
            }
        }else{
            res.json({
                code:403,
                msg:'缺少用户名或密码'
            })
        }
       
    }catch(err){
        next(err)
    }
})

// 获取全部普通用户
router.get(`/user`,adminauth,async (req,res,next) => {
    try{
        let {pn=1,size=10} = req.query;
        pn = parseInt(pn)
        size = parseInt(size)

        let count ='';
        user.find().then(countdata => {
            count = countdata.length
        })

        let data =  await user.find()
            .skip((pn-1)*size)
            .limit(size)
            .select('-password')

        res.json({
            code:200,
            msg:'获取普通用户成功',
            data,
            count
        })
    }catch(err){
        next(err)
    }
})

// 获取单个用户
router.get(`/user/:id`,auth, async (req,res,next) => {
    try{
        let {id} = req.params;
        // if(req.session.user._id != id){
        //     res.json({
        //         code:403,
        //         msg:'无法获取其他用户信息'
        //     })
        // }
        let data = await user.findById({_id:id})
        if(data){
            res.json({
                code:200,
                msg:'获取单个用户成功',
                data
            })
        }else{
            res.json({
                code:401,
                msg:'传入id值有误'
            })
        }
   }catch(err){
       next(err)
   }
   
})

// 修改单个用户  --个人用户/管理员才可操作--
router.put(`/user/:id`,auth, async (req,res,next) => {
    try{
        let {id} = req.params;
        let isadmin = await adminuser.findById(req.session.user._id)
        if(!isadmin){//不是管理员
            if(req.session.user._id != id){//是否是个人用户
                res.json({
                    code:403,
                    msg:'无法修改其他用户信息'
                })
                console.log('个人用户')
            }
        }else{
            console.log('管理员用户')
            let {password,nicheng,desc,avatar,job,phone,sex} = req.body;
            await user.updateOne({_id:id},{$set:{password,nicheng,desc,avatar,job,phone,sex}})
            res.json({
                code:200,
                msg:'修改成功',
            })
        }
        
    }catch(err){
        next(err)
    }
    
})

// 删除单个用户
router.delete(`/user/:id`,adminauth,async (req,res,next) => {
    try{
        let {id} = req.params;
        await user.deleteOne({_id:id})
        res.json({
            code:200,
            msg:'删除成功'
        })
    }catch(err){
        next(err)
    }
   
})


module.exports = router