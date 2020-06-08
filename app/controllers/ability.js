const Ability=require('../models/ability');
class  UserCtl{
    async find(ctx){
        const {phone}=ctx.query;
        const result= await Ability.findOne({phone});
        ctx.body['gender']=result['gender']
        if (result['gender']='男') {
            if(result['age']<29){
                if (result['muscleLevel'] >= 36) {
                    ctx.body['1'] = '优秀'
                }
                if (result['muscleLevel'] >=29 && result['muscleLevel'] <=35) {
                    ctx.body['1'] = '很好'
                }
                if (result['muscleLevel'] >= 22 && result['muscleLevel'] <= 28) {
                    ctx.body['1'] = '好'
                }
                if (result['muscleLevel'] >= 17&& result['muscleLevel'] <= 29) {
                    ctx.body['1'] = '一般'
                }
                if (result['muscleLevel'] <= 16) {
                    ctx.body['1'] = '需改进'
                }
            }
            if (result['age'] <=39 && result['age']>=30) {
                if (result['muscleLevel'] >= 30) {
                    ctx.body['1'] = '优秀'
                }
                if (result['muscleLevel'] >= 22 && result['muscleLevel'] <= 29) {
                    ctx.body['1'] = '很好'
                }
                if (result['muscleLevel'] >= 17 && result['muscleLevel'] <= 21) {
                    ctx.body['1'] = '好'
                }
                if (result['muscleLevel'] >= 12&& result['muscleLevel'] <= 16) {
                    ctx.body['1'] = '一般'
                }
                if (result['muscleLevel'] <= 11) {
                    ctx.body['1'] = '需改进'
                }
            }
                if (result['age'] <= 49 && result['age'] >= 40) {
                    if (result['muscleLevel'] >= 25) {
                        ctx.body['1'] = '优秀'
                    }
                    if (result['muscleLevel'] >= 17 && result['muscleLevel'] <= 24) {
                        ctx.body['1'] = '很好'
                    }
                    if (result['muscleLevel'] >= 13 && result['muscleLevel'] <= 16) {
                        ctx.body['1'] = '好'
                    }
                    if (result['muscleLevel'] >= 10 && result['muscleLevel'] <= 12) {
                        ctx.body['1'] = '一般'
                    }
                    if (result['muscleLevel'] <= 9) {
                        ctx.body['1'] = '需改进'
                    }
                }
                if (result['age'] <= 59 && result['age'] >= 50) {
                    if (result['muscleLevel'] >= 21) {
                        ctx.body['1'] = '优秀'
                    }
                    if (result['muscleLevel'] >= 13 && result['muscleLevel'] <= 20) {
                        ctx.body['1'] = '很好'
                    }
                    if (result['muscleLevel'] >= 10 && result['muscleLevel'] <= 12) {
                        ctx.body['1'] = '好'
                    }
                    if (result['muscleLevel'] >= 7 && result['muscleLevel'] <= 9) {
                        ctx.body['1'] = '一般'
                    }
                    if (result['muscleLevel'] <= 7) {
                        ctx.body['1'] = '需改进'
                    }
                }
                if (result['age'] <= 69 && result['age'] >= 60) {
                    if (result['muscleLevel'] >= 18) {
                        ctx.body['1'] = '优秀'
                    }
                    if (result['muscleLevel'] >= 11 && result['muscleLevel'] <= 17) {
                        ctx.body['1'] = '很好'
                    }
                    if (result['muscleLevel'] >= 8 && result['muscleLevel'] <= 10) {
                        ctx.body['1'] = '好'
                    }
                    if (result['muscleLevel'] >= 5 && result['muscleLevel'] <= 7) {
                        ctx.body['1'] = '一般'
                    }
                    if (result['muscleLevel'] <=4) {
                        ctx.body['1'] = '需改进'
                    }
                }
        } else {
                if (result['age'] <=29) {
                    if (result['muscleLevel'] >= 30) {
                        ctx.body['1'] = '优秀'
                    }
                    if (result['muscleLevel'] >= 21 && result['muscleLevel'] <= 29) {
                        ctx.body['1'] = '很好'
                    }
                    if (result['muscleLevel'] >= 15 && result['muscleLevel'] <= 20) {
                        ctx.body['1'] = '好'
                    }
                    if (result['muscleLevel'] >= 10 && result['muscleLevel'] <= 14) {
                        ctx.body['1'] = '一般'
                    }
                    if (result['muscleLevel'] <= 9) {
                        ctx.body['1'] = '需改进'
                    }
                }
                if (result['age'] <= 39 && result['age'] >= 30) {
                    if (result['muscleLevel'] >= 27) {
                        ctx.body['1'] = '优秀'
                    }
                    if (result['muscleLevel'] >= 20 && result['muscleLevel'] <= 26) {
                        ctx.body['1'] = '很好'
                    }
                    if (result['muscleLevel'] >= 13 && result['muscleLevel'] <= 19) {
                        ctx.body['1'] = '好'
                    }
                    if (result['muscleLevel'] >= 8 && result['muscleLevel'] <= 12) {
                        ctx.body['1'] = '一般'
                    }
                    if (result['muscleLevel'] <= 7) {
                        ctx.body['1'] = '需改进'
                    }
                }
                    if (result['age'] <= 49 && result['age'] >= 40) {
                        if (result['muscleLevel'] >= 24) {
                            ctx.body['1'] = '优秀'
                        }
                        if (result['muscleLevel'] >= 15 && result['muscleLevel'] <= 23) {
                            ctx.body['1'] = '很好'
                        }
                        if (result['muscleLevel'] >= 11 && result['muscleLevel'] <= 14) {
                            ctx.body['1'] = '好'
                        }
                        if (result['muscleLevel'] >= 5 && result['muscleLevel'] <= 10) {
                            ctx.body['1'] = '一般'
                        }
                        if (result['muscleLevel'] <= 4) {
                            ctx.body['1'] = '需改进'
                        }
                    }
                    if (result['age'] <= 59 && result['age'] >= 50) {
                        if (result['muscleLevel'] >= 21) {
                            ctx.body['1'] = '优秀'
                        }
                        if (result['muscleLevel'] >= 11 && result['muscleLevel'] <= 20) {
                            ctx.body['1'] = '很好'
                        }
                        if (result['muscleLevel'] >= 7 && result['muscleLevel'] <= 10) {
                            ctx.body['1'] = '好'
                        }
                        if (result['muscleLevel'] >= 2 && result['muscleLevel'] <= 6) {
                            ctx.body['1'] = '一般'
                        }
                        if (result['muscleLevel'] <= 7) {
                            ctx.body['1'] = '需改进'
                        }
                    }
                    if (result['age'] <= 69 && result['age'] >= 60) {
                        if (result['muscleLevel'] >= 17) {
                            ctx.body['1'] = '优秀'
                        }
                        if (result['muscleLevel'] >= 12 && result['muscleLevel'] <= 16) {
                            ctx.body['1'] = '很好'
                        }
                        if (result['muscleLevel'] >= 5 && result['muscleLevel'] <= 11) {
                            ctx.body['1'] = '好'
                        }
                        if (result['muscleLevel'] >= 2 && result['muscleLevel'] <= 4) {
                            ctx.body['1'] = '一般'
                        }
                        if (result['muscleLevel'] <= 1) {
                            ctx.body['1'] = '需改进'
                        }
                    }
        
    }//肌肉



        if (result['gender'] = '男') {
            if (result['age'] <=25) {
                if (result['heart'] >= 65) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 53 && result['heart'] < 65) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 48 && result['heart'] < 53) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 43 && result['heart'] < 48) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 36 && result['heart'] < 43) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 36) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] <=35&& result['age'] >= 26) {
                if (result['heart'] >= 60) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 50 && result['heart'] < 60) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >=44&& result['heart'] < 50) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 39 && result['heart'] < 44) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 33 && result['heart'] <39) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 33) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] <= 45 && result['age'] >= 36) {
                if (result['heart'] >= 55) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 45 && result['heart'] < 55) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 40 && result['heart'] < 45) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 36 && result['heart'] < 40) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 30 && result['heart'] < 36) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 30) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] <=55 && result['age'] >= 46) {
                if (result['heart'] >= 49) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 40 && result['heart'] < 49) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 36 && result['heart'] < 40) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 32 && result['heart'] < 36) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 27 && result['heart'] < 32) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 27) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] < 65 && result['age'] >= 56) {
                if (result['heart'] >= 43) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 37 && result['heart'] < 43) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >=33 && result['heart'] < 37) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 30 && result['heart'] < 33) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 25 && result['heart'] < 30) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 25) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] >= 66) {
                if (result['heart'] >= 38) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 32 && result['heart'] < 38) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >=29 && result['heart'] < 32) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 26 && result['heart'] < 29) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 22 && result['heart'] < 26) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 22) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
        } else {
            if (result['age'] <= 25) {
                if (result['heart'] >= 59) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 50 && result['heart'] < 59) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 44 && result['heart'] < 50) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 39 && result['heart'] < 44) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 33 && result['heart'] < 39) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 33) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] <= 35 && result['age'] >= 26) {
                if (result['heart'] >= 58) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 48 && result['heart'] < 58) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 43&& result['heart'] < 48) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 37 && result['heart'] < 43) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 32 && result['heart'] < 37) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 32) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] <= 45 && result['age'] >= 36) {
                if (result['heart'] >= 50) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 42 && result['heart'] < 50) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 37 && result['heart'] < 42) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 33 && result['heart'] < 37) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 28 && result['heart'] < 33) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 28) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] <= 55 && result['age'] >= 46) {
                if (result['heart'] >= 45) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 36 && result['heart'] < 45) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 32 && result['heart'] < 36) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 29 && result['heart'] < 32) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 25 && result['heart'] < 29) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 25) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] < 65 && result['age'] >= 56) {
                if (result['heart'] >= 40) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 33 && result['heart'] < 40) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 30 && result['heart'] < 33) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 26 && result['heart'] < 30) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 22 && result['heart'] < 26) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 22) {
                    ctx.body['heartLevel'] = '弱'
                }
            }
            if (result['age'] >= 66) {
                if (result['heart'] >= 34) {
                    ctx.body['heartLevel'] = '出色'
                }
                if (result['heart'] >= 29 && result['heart'] < 34) {
                    ctx.body['heartLevel'] = '良好'
                }
                if (result['heart'] >= 26 && result['heart'] < 29) {
                    ctx.body['heartLevel'] = '高于平均'
                }
                if (result['heart'] >= 23 && result['heart'] < 26) {
                    ctx.body['heartLevel'] = '平均水平'
                }
                if (result['heart'] >= 19 && result['heart'] < 23) {
                    ctx.body['heartLevel'] = '低于平均'
                }
                if (result['heart'] < 19) {
                    ctx.body['heartLevel'] = '弱'
                }
            }

        }
        if(result['gender']=='男'){
            if (result['Bend_sitting'] == 0 || result['Bend_sitting'] == 1){
                ctx.body['FlexLevel']='优秀'
            }
            if (result['Bend_sitting'] == 2) {
                ctx.body['FlexLevel'] = '很好'
            }
            if (result['Bend_sitting'] == 3) {
                ctx.body['FlexLevel'] = '好'
            }
            if (result['Bend_sitting'] == 4) {
                ctx.body['FlexLevel'] = '一般'
            }
            if (result['Bend_sitting'] == 5) {
                ctx.body['FlexLevel'] = '需改进'
            }
        }
        else{
            if (result['Bend_sitting'] == 0) {
                ctx.body['FlexLevel'] = '优秀'
            }
            if (result['Bend_sitting'] == 1) {
                ctx.body['FlexLevel'] = '很好'
            }
            if (result['Bend_sitting'] == 2) {
                ctx.body['FlexLevel'] = '好'
            }
            if (result['Bend_sitting'] == 3) {
                ctx.body['FlexLevel'] = '一般'
            }
            if (result['Bend_sitting'] == 4 || result['Bend_sitting'] == 5) {
                ctx.body['FlexLevel'] = '需改进'
            }
        }


        if (result['gender'] == '男') {
            if (result['Bend_standing'] == 0 || result['Bend_standing'] == 1) {
                ctx.body['FlexLevel'] = '优秀'
            }
            if (result['Bend_standing'] == 2) {
                ctx.body['FlexLevel'] = '很好'
            }
            if (result['Bend_standing'] == 3) {
                ctx.body['FlexLevel'] = '好'
            }
            if (result['Bend_standing'] == 4) {
                ctx.body['FlexLevel'] = '一般'
            }
            if (result['Bend_standing'] == 5) {
                ctx.body['FlexLevel'] = '需改进'
            }
        }
        else {
            if (result['Bend_standing'] == 0) {
                ctx.body['FlexLevel'] = '优秀'
            }
            if (result['Bend_standing'] == 1) {
                ctx.body['FlexLevel'] = '很好'
            }
            if (result['Bend_standing'] == 2) {
                ctx.body['FlexLevel'] = '好'
            }
            if (result['Bend_standing'] == 3) {
                ctx.body['FlexLevel'] = '一般'
            }
            if (result['Bend_standing'] == 4 || result['Bend_standing'] == 5) {
                ctx.body['FlexLevel'] = '需改进'
            }
        }
}
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