const Risk=require('../models/risk');
class  RiskCtl{
    async find(ctx){
        const {phone}=ctx.query;

        ctx.body= await Risk.findOne({phone});
    }
    async create(ctx){
        const {phone}=ctx.request.body;
        const repeatRisk=await Risk.findOne({phone});
        if(repeatRisk){ctx.throw(409,'文件已经存在')}
        // const repeatRisk=await Risk.findOne({phone});
        // if(repeatRisk){ctx.throw(409,'文件已经存在')}
        const risk=await new Risk(ctx.request.body).save();
        ctx.body=risk ;
    }
    async update(ctx){
        const {phone}=ctx.request.body;
        const risk=await Risk.findOneAndUpdate({phone},ctx.request.body,{new:true})
        if(!risk){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=risk;
    }
    async del(ctx){
        const {phone}=ctx.request.body;
        const risk= await Risk.findOneAndRemove({phone});
        if(!risk){ctx.throw(404,'文件不存在！')}
        ctx.status=204;
    }
};

module.exports=new RiskCtl();