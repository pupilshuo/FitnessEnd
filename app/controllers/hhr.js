const hhr=require('../models/hhr');
class  hhrCtl{
    async find(ctx){
        const {phone}=ctx.query;
        ctx.body= await hhr.findOne({phone});
    }
    async create(ctx){
        const {phone}=ctx.request.body;
        const repeatUser=await hhr.findOne({phone});
        if(repeatUser){ctx.throw(409,'文件已经存在')}

        const {name}=ctx.request.body;
        // const repeatUser=await hhr.findOne({name});
        // if(repeatUser){ctx.throw(409,'文件已经存在')}

        const Hhr=await new hhr(ctx.request.body).save();
        ctx.body=Hhr;
    }
    async update(ctx){
        const {phone}=ctx.request.body;
        const Hhr=await hhr.findOneAndUpdate({phone},ctx.request.body,{new:true})
        if(!Hhr){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=Hhr;
    }
    async del(ctx){
        const { phone } = ctx.request.body;
        const Hhr= await hhr.findByIdAndRemove({phone});
        if(!Hhr){ctx.throw(404,'文件不存在！')}
        ctx.status=204;

    }
};

module.exports=new hhrCtl();