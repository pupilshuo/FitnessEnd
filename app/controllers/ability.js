const Ability=require('../models/ability');
class  UserCtl{
    async find(ctx){
        const {phone}=ctx.query;
        const result= await Ability.findOne({phone});
        if (result['gender']='男') {
            if(result['age']<29){
                if (result['muscle'] >= 36) {
                    ctx.body = '优秀'
                }
                if (result['muscle'] >=29 && result['muscle'] <=35) {
                    ctx.body = '很好'
                }
                if (result['muscle'] >= 22 && result['muscle'] <= 28) {
                    ctx.body = '好'
                }
                if (result['muscle'] >= 17&& result['muscle'] <= 29) {
                    ctx.body = '一般'
                }
                if (result['muscle'] <= 16) {
                    ctx.body = '需改进'
                }
            }
            if (result['age'] <=39 && result['age']>=30) {
                if (result['muscle'] >= 30) {
                    ctx.body = '优秀'
                }
                if (result['muscle'] >= 22 && result['muscle'] <= 29) {
                    ctx.body = '很好'
                }
                if (result['muscle'] >= 17 && result['muscle'] <= 21) {
                    ctx.body = '好'
                }
                if (result['muscle'] >= 12&& result['muscle'] <= 16) {
                    ctx.body = '一般'
                }
                if (result['muscle'] <= 11) {
                    ctx.body = '需改进'
                }
            }
                if (result['age'] <= 49 && result['age'] >= 40) {
                    if (result['muscle'] >= 25) {
                        ctx.body = '优秀'
                    }
                    if (result['muscle'] >= 17 && result['muscle'] <= 24) {
                        ctx.body = '很好'
                    }
                    if (result['muscle'] >= 13 && result['muscle'] <= 16) {
                        ctx.body = '好'
                    }
                    if (result['muscle'] >= 10 && result['muscle'] <= 12) {
                        ctx.body = '一般'
                    }
                    if (result['muscle'] <= 9) {
                        ctx.body = '需改进'
                    }
                }
                if (result['age'] <= 59 && result['age'] >= 50) {
                    if (result['muscle'] >= 21) {
                        ctx.body = '优秀'
                    }
                    if (result['muscle'] >= 13 && result['muscle'] <= 20) {
                        ctx.body = '很好'
                    }
                    if (result['muscle'] >= 10 && result['muscle'] <= 12) {
                        ctx.body = '好'
                    }
                    if (result['muscle'] >= 7 && result['muscle'] <= 9) {
                        ctx.body = '一般'
                    }
                    if (result['muscle'] <= 7) {
                        ctx.body = '需改进'
                    }
                }
                if (result['age'] <= 69 && result['age'] >= 60) {
                    if (result['muscle'] >= 18) {
                        ctx.body = '优秀'
                    }
                    if (result['muscle'] >= 11 && result['muscle'] <= 17) {
                        ctx.body = '很好'
                    }
                    if (result['muscle'] >= 8 && result['muscle'] <= 10) {
                        ctx.body = '好'
                    }
                    if (result['muscle'] >= 5 && result['muscle'] <= 7) {
                        ctx.body = '一般'
                    }
                    if (result['muscle'] <=4) {
                        ctx.body = '需改进'
                    }
                }
        } else {
                if (result['age'] <=29) {
                    if (result['muscle'] >= 30) {
                        ctx.body = '优秀'
                    }
                    if (result['muscle'] >= 21 && result['muscle'] <= 29) {
                        ctx.body = '很好'
                    }
                    if (result['muscle'] >= 15 && result['muscle'] <= 20) {
                        ctx.body = '好'
                    }
                    if (result['muscle'] >= 10 && result['muscle'] <= 14) {
                        ctx.body = '一般'
                    }
                    if (result['muscle'] <= 9) {
                        ctx.body = '需改进'
                    }
                }
                if (result['age'] <= 39 && result['age'] >= 30) {
                    if (result['muscle'] >= 27) {
                        ctx.body = '优秀'
                    }
                    if (result['muscle'] >= 20 && result['muscle'] <= 26) {
                        ctx.body = '很好'
                    }
                    if (result['muscle'] >= 13 && result['muscle'] <= 19) {
                        ctx.body = '好'
                    }
                    if (result['muscle'] >= 8 && result['muscle'] <= 12) {
                        ctx.body = '一般'
                    }
                    if (result['muscle'] <= 7) {
                        ctx.body = '需改进'
                    }
                }
                    if (result['age'] <= 49 && result['age'] >= 40) {
                        if (result['muscle'] >= 24) {
                            ctx.body = '优秀'
                        }
                        if (result['muscle'] >= 15 && result['muscle'] <= 23) {
                            ctx.body = '很好'
                        }
                        if (result['muscle'] >= 11 && result['muscle'] <= 14) {
                            ctx.body = '好'
                        }
                        if (result['muscle'] >= 5 && result['muscle'] <= 10) {
                            ctx.body = '一般'
                        }
                        if (result['muscle'] <= 4) {
                            ctx.body = '需改进'
                        }
                    }
                    if (result['age'] <= 59 && result['age'] >= 50) {
                        if (result['muscle'] >= 21) {
                            ctx.body = '优秀'
                        }
                        if (result['muscle'] >= 11 && result['muscle'] <= 20) {
                            ctx.body = '很好'
                        }
                        if (result['muscle'] >= 7 && result['muscle'] <= 10) {
                            ctx.body = '好'
                        }
                        if (result['muscle'] >= 2 && result['muscle'] <= 6) {
                            ctx.body = '一般'
                        }
                        if (result['muscle'] <= 7) {
                            ctx.body = '需改进'
                        }
                    }
                    if (result['age'] <= 69 && result['age'] >= 60) {
                        if (result['muscle'] >= 17) {
                            ctx.body = '优秀'
                        }
                        if (result['muscle'] >= 12 && result['muscle'] <= 16) {
                            ctx.body = '很好'
                        }
                        if (result['muscle'] >= 5 && result['muscle'] <= 11) {
                            ctx.body = '好'
                        }
                        if (result['muscle'] >= 2 && result['muscle'] <= 4) {
                            ctx.body = '一般'
                        }
                        if (result['muscle'] <= 1) {
                            ctx.body = '需改进'
                        }
                    }
        
    }}
    async create(ctx){

        const {phone}=ctx.request.body;
        const {name}=ctx.request.body;
        // const repeatUser=await Ability.findOne({name});
        // if(repeatUser){ctx.throw(409,'文件已经存在')}
        const ability=await new Ability(ctx.request.body).save();
        ctx.body=ability;
    }
    async update(ctx){
        const {phone} =ctx.request.body
        //const Ability=await Ability.findByIdAndUpdate(ctx.params.id,ctx.request.body)
        const ability= await  Ability.findOneAndUpdate({phone},ctx.request.body,{new:true})
        if(!ability){
            ctx.throw(404,'文件不存在！')
        }
        ctx.body=ability;
    }
    async del(ctx){
        const {phone} =ctx.requst.body;
        const ability= await Ability.findOneAndRemove({phone});
        if(!ability){ctx.throw(404,'文件不存在！')}
        ctx.status=204;
    }
};

module.exports=new UserCtl();