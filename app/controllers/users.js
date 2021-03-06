const Users=require('../models/users');
class  UserCtl{
    async find(ctx){
        const {phone}=ctx.query;
        console.log({phone});
        ctx.body= await Users.findOne({phone});
    }
    async create(ctx){
        const {phone}=ctx.request.body;
        const repeatUser = await Users.findOne({ phone });
        if (repeatUser) { ctx.throw(409, '文件已经存在') }
        const users=await new Users(ctx.request.body).save();
        ctx.body=users;
    }
    async update(ctx){
       const {phone}=ctx.request.body;
       const users=await Users.findOneAndUpdate({phone},ctx.request.body,{new:true})
       if(!users){
           ctx.throw(404,'用户不存在！')
       }
       ctx.body=users;
    }
    async del(ctx){
        const { phone } = ctx.request.body;
        const users= await Users.findOneAndRemove({phone});
        if(!users){ctx.throw(404,'用户不存在！')}
        ctx.status=204;
}

    async login(ctx){
    const users= await Users.findOne(ctx.request.body);
    if(!users){ctx.throw(401,'用户名或密码不正确！');}
    ctx.body = users;
    }
    };

module.exports=new UserCtl();