const Par_q=require('../models/par_q');
class  Par_qCtl{
    async find(ctx){
        const {phone}=ctx.query;
        const result= await Par_q.findOne({phone});//只要有一个一就看医生
        if(result['q1']== 0||
            result['q2'] == 0 ||
            result['q3'] == 0 ||
            result['q4'] == 0 ||
            result['q5'] == 0 ||
            result['q6'] == 0 ||
            result['q7'] == 0
            ){
                a='可以运动'
            }
            else{
                a=ctx.body='看医生'
            }
        let dic = new Array();
        dic.push(a)
        dic.push(result['ParQ_Status'])
        dic.push(result['ExerciseRiskActiveStep'])
        ctx.body = dic
    }
    async create(ctx){
        const {phone}=ctx.request.body;
        const repeatParq = await Par_q.findOne({ phone });
        if (repeatParq) { ctx.throw(409, '文件已经存在') }
        const {name}=ctx.request.body;
        const par_q=await new Par_q(ctx.request.body).save();
        ctx.body=par_q;
    }
    async update(ctx){
        const {phone}=ctx.request.body;
        const par_q=await Par_q.findOneAndUpdate({phone},ctx.request.body,{new:true})
        if(!par_q){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=par_q;
    }
    async del(ctx){
        const { phone } = ctx.request.body;
        const par_q= await Par_q.findOneAndRemove({phone});
        if(!par_q){ctx.throw(404,'文件不存在！')}
        ctx.status=204;

    }

};

module.exports=new Par_qCtl();