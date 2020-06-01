const Pro=require('../models/pro');
class  ProjectCtl{
    async find(ctx){
        const {phone}=ctx.request.body;
        ctx.body= await Pro.findOne({phone});
        const answer = ctx.body;
        console.log(answer['phone'])
    }
    async create(ctx){
        const {phone}=ctx.request.body;
        const repeatProject=await Pro.findOne({phone});
        if(repeatProject){ctx.throw(409,'文件已经存在')}
        // const repeatProject=await Pro.findOne({phone});
        // if(repeatProject){ctx.throw(409,'文件已经存在')}
        const project=await new Pro(ctx.request.body).save();
        ctx.body=project ;
    }
    async update(ctx){
        const {phone}=ctx.request.body;
        const Project=await Pro.findOneAndUpdate({phone},ctx.request.body,{new:true})
        if(!Project){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=Project;
    }
    async del(ctx){
        const {phone}=ctx.request.body;
        const Project= await Pro.findOneAndRemove({phone});
        if(!Project){ctx.throw(404,'文件不存在！')}
        ctx.status=204;
    }
};

module.exports=new ProjectCtl();