const Ability=require('../models/ability');
class  UserCtl{
    async find(ctx){
         let a = "";
         let b = "";
         let c = "";
         let d = "";
         
        const {phone}=ctx.query;
        const result= await Ability.findOne({phone});
        console.log(result)
        // ctx.body['gender']=result['gender']
        if (result['gender']=='男') {
            if(result['age']<29){
                if (result['muscle'] >= 36) {
                    a = '优秀'
                }
                if (result['muscle'] >=29 && result['muscle'] <=35) {
                    a = '很好'
                }
                if (result['muscle'] >= 22 && result['muscle'] <= 28) {
                    a = '好'
                }
                if (result['muscle'] >= 17 && result['muscle'] <= 21) {
                    a = '一般'
                }
                if (result['muscle'] <= 16) {
                    a = '需改进'
                }
            }
            if (result['age'] <=39 && result['age']>=30) {
                if (result['muscle'] >= 30) {
                    a = '优秀'
                }
                if (result['muscle'] >= 22 && result['muscle'] <= 29) {
                    a = '很好'
                }
                if (result['muscle'] >= 17 && result['muscle'] <= 21) {
                    a = '好'
                }
                if (result['muscle'] >= 12&& result['muscle'] <= 16) {
                    a = '一般'
                }
                if (result['muscle'] <= 11) {
                    a = '需改进'
                }
            }
                if (result['age'] <= 49 && result['age'] >= 40) {
                    if (result['muscle'] >= 25) {
                        a = '优秀'
                    }
                    if (result['muscle'] >= 17 && result['muscle'] <= 24) {
                        a = '很好'
                    }
                    if (result['muscle'] >= 13 && result['muscle'] <= 16) {
                        a = '好'
                    }
                    if (result['muscle'] >= 10 && result['muscle'] <= 12) {
                        a = '一般'
                    }
                    if (result['muscle'] <= 9) {
                        a = '需改进'
                    }
                }
                if (result['age'] <= 59 && result['age'] >= 50) {
                    if (result['muscle'] >= 21) {
                        a = '优秀'
                    }
                    if (result['muscle'] >= 13 && result['muscle'] <= 20) {
                        a = '很好'
                    }
                    if (result['muscle'] >= 10 && result['muscle'] <= 12) {
                        a = '好'
                    }
                    if (result['muscle'] >= 7 && result['muscle'] <= 9) {
                        a = '一般'
                    }
                    if (result['muscle'] <= 6) {
                        a = '需改进'
                    }
                }
                if (result['age'] <= 69 && result['age'] >= 60) {
                    if (result['muscle'] >= 18) {
                        a = '优秀'
                    }
                    if (result['muscle'] >= 11 && result['muscle'] <= 17) {
                        a = '很好'
                    }
                    if (result['muscle'] >= 8 && result['muscle'] <= 10) {
                        a = '好'
                    }
                    if (result['muscle'] >= 5 && result['muscle'] <= 7) {
                        a = '一般'
                    }
                    if (result['muscle'] <=4) {
                        a = '需改进'
                    }
                }
        } else {
                if (result['age'] <=29) {
                    if (result['muscle'] >= 30) {
                        a = '优秀'
                    }
                    if (result['muscle'] >= 21 && result['muscle'] <= 29) {
                        a = '很好'
                    }
                    if (result['muscle'] >= 15 && result['muscle'] <= 20) {
                        a = '好'
                    }
                    if (result['muscle'] >= 10 && result['muscle'] <= 14) {
                        a = '一般'
                    }
                    if (result['muscle'] <= 9) {
                        a = '需改进'
                    }
                }
                if (result['age'] <= 39 && result['age'] >= 30) {
                    if (result['muscle'] >= 27) {
                        a = '优秀'
                    }
                    if (result['muscle'] >= 20 && result['muscle'] <= 26) {
                        a = '很好'
                    }
                    if (result['muscle'] >= 13 && result['muscle'] <= 19) {
                        a = '好'
                    }
                    if (result['muscle'] >= 8 && result['muscle'] <= 12) {
                        a = '一般'
                    }
                    if (result['muscle'] <= 7) {
                        a = '需改进'
                    }
                }
                    if (result['age'] <= 49 && result['age'] >= 40) {
                        if (result['muscle'] >= 24) {
                            a = '优秀'
                        }
                        if (result['muscle'] >= 15 && result['muscle'] <= 23) {
                            a = '很好'
                        }
                        if (result['muscle'] >= 11 && result['muscle'] <= 14) {
                            a = '好'
                        }
                        if (result['muscle'] >= 5 && result['muscle'] <= 10) {
                            a = '一般'
                        }
                        if (result['muscle'] <= 4) {
                            a = '需改进'
                        }
                    }
                    if (result['age'] <= 59 && result['age'] >= 50) {
                        if (result['muscle'] >= 21) {
                            a = '优秀'
                        }
                        if (result['muscle'] >= 11 && result['muscle'] <= 20) {
                            a = '很好'
                        }
                        if (result['muscle'] >= 7 && result['muscle'] <= 10) {
                            a = '好'
                        }
                        if (result['muscle'] >= 2 && result['muscle'] <= 6) {
                            a = '一般'
                        }
                        if (result['muscle'] <= 1) {
                            a = '需改进'
                        }
                    }
                    if (result['age'] <= 69 && result['age'] >= 60) {
                        if (result['muscle'] >= 17) {
                            a = '优秀'
                        }
                        if (result['muscle'] >= 12 && result['muscle'] <= 16) {
                             a = '很好'
                        }
                        if (result['muscle'] >= 5 && result['muscle'] <= 11) {
                             a = '好'
                        }
                        if (result['muscle'] >= 2 && result['muscle'] <= 4) {
                            a = '一般'
                        }
                        if (result['muscle'] <= 1) {
                            a = '需改进'
                        }
                    }
        
    }//肌肉



        if (result['gender'] =='男') {
          result['heart'] = 111.33 - ( 0.42 * result['heart'])
            if (result['age'] <=25) {
                if (result['heart'] >= 65) {
                    b = '出色'
                }
                if (result['heart'] >= 53 && result['heart'] < 65) {
                    b = '良好'
                }
                if (result['heart'] >= 48 && result['heart'] < 53) {
                    b = '高于平均'
                }
                if (result['heart'] >= 43 && result['heart'] < 48) {
                    b = '平均水平'
                }
                if (result['heart'] >= 36 && result['heart'] < 43) {
                    b = '低于平均'
                }
                if (result['heart'] < 36) {
                    b = '弱'
                }
            }
            if (result['age'] <=35&& result['age'] >= 26) {
                if (result['heart'] >= 60) {
                    b = '出色'
                }
                if (result['heart'] >= 50 && result['heart'] < 60) {
                    b = '良好'
                }
                if (result['heart'] >=44 && result['heart'] < 50) {
                    b = '高于平均'
                }
                if (result['heart'] >= 39 && result['heart'] < 44) {
                    b = '平均水平'
                }
                if (result['heart'] >= 33 && result['heart'] <39) {
                    b = '低于平均'
                }
                if (result['heart'] < 33) {
                    b = '弱'
                }
            }
            if (result['age'] <= 45 && result['age'] >= 36) {
                if (result['heart'] >= 55) {
                    b = '出色'
                }
                if (result['heart'] >= 45 && result['heart'] < 55) {
                    b = '良好'
                }
                if (result['heart'] >= 40 && result['heart'] < 45) {
                    b = '高于平均'
                }
                if (result['heart'] >= 36 && result['heart'] < 40) {
                    b = '平均水平'
                }
                if (result['heart'] >= 30 && result['heart'] < 36) {
                    b = '低于平均'
                }
                if (result['heart'] < 30) {
                    b = '弱'
                }
            }
            if (result['age'] <=55 && result['age'] >= 46) {
                if (result['heart'] >= 49) {
                    b = '出色'
                }
                if (result['heart'] >= 40 && result['heart'] < 49) {
                    b = '良好'
                }
                if (result['heart'] >= 36 && result['heart'] < 40) {
                    b = '高于平均'
                }
                if (result['heart'] >= 32 && result['heart'] < 36) {
                    b = '平均水平'
                }
                if (result['heart'] >= 27 && result['heart'] < 32) {
                    b = '低于平均'
                }
                if (result['heart'] < 27) {
                    b = '弱'
                }
            }
            if (result['age'] < 65 && result['age'] >= 56) {
                if (result['heart'] >= 43) {
                    b = '出色'
                }
                if (result['heart'] >= 37 && result['heart'] < 43) {
                    b = '良好'
                }
                if (result['heart'] >=33 && result['heart'] < 37) {
                    b = '高于平均'
                }
                if (result['heart'] >= 30 && result['heart'] < 33) {
                    b = '平均水平'
                }
                if (result['heart'] >= 25 && result['heart'] < 30) {
                    b = '低于平均'
                }
                if (result['heart'] < 25) {
                    b = '弱'
                }
            }
            if (result['age'] >= 66) {
                if (result['heart'] >= 38) {
                    b = '出色'
                }
                if (result['heart'] >= 32 && result['heart'] < 38) {
                    b = '良好'
                }
                if (result['heart'] >=29 && result['heart'] < 32) {
                    b = '高于平均'
                }
                if (result['heart'] >= 26 && result['heart'] < 29) {
                    b = '平均水平'
                }
                if (result['heart'] >= 22 && result['heart'] < 26) {
                    b = '低于平均'
                }
                if (result['heart'] < 22) {
                    b = '弱'
                }
            }
        } else {
            result['heart'] = 65.81-(0.1847 * result['heart'])
            if (result['age'] <= 25) {
                if (result['heart'] >= 59) {
                    b = '出色'
                }
                if (result['heart'] >= 50 && result['heart'] < 59) {
                    b = '良好'
                }
                if (result['heart'] >= 44 && result['heart'] < 50) {
                    b = '高于平均'
                }
                if (result['heart'] >= 39 && result['heart'] < 44) {
                    b = '平均水平'
                }
                if (result['heart'] >= 33 && result['heart'] < 39) {
                    b = '低于平均'
                }
                if (result['heart'] < 33) {
                    b = '弱'
                }
            }
            if (result['age'] <= 35 && result['age'] >= 26) {
                if (result['heart'] >= 58) {
                     b = '出色'
                }
                if (result['heart'] >= 48 && result['heart'] < 58) {
                    b = '良好'
                }
                if (result['heart'] >= 43&& result['heart'] < 48) {
                    b = '高于平均'
                }
                if (result['heart'] >= 37 && result['heart'] < 43) {
                    b = '平均水平'
                }
                if (result['heart'] >= 32 && result['heart'] < 37) {
                    b = '低于平均'
                }
                if (result['heart'] < 32) {
                    b = '弱'
                }
            }
            if (result['age'] <= 45 && result['age'] >= 36) {
                if (result['heart'] >= 50) {
                    b = '出色'
                }
                if (result['heart'] >= 42 && result['heart'] < 50) {
                    b = '良好'
                }
                if (result['heart'] >= 37 && result['heart'] < 42) {
                    b = '高于平均'
                }
                if (result['heart'] >= 33 && result['heart'] < 37) {
                    b = '平均水平'
                }
                if (result['heart'] >= 28 && result['heart'] < 33) {
                    b = '低于平均'
                }
                if (result['heart'] < 28) {
                    b = '弱'
                }
            }
            if (result['age'] <= 55 && result['age'] >= 46) {
                if (result['heart'] >= 45) {
                    b = '出色'
                }
                if (result['heart'] >= 36 && result['heart'] < 45) {
                    b = '良好'
                }
                if (result['heart'] >= 32 && result['heart'] < 36) {
                    b = '高于平均'
                }
                if (result['heart'] >= 29 && result['heart'] < 32) {
                    b = '平均水平'
                }
                if (result['heart'] >= 25 && result['heart'] < 29) {
                    b = '低于平均'
                }
                if (result['heart'] < 25) {
                    b = '弱'
                }
            }
            if (result['age'] < 65 && result['age'] >= 56) {
                if (result['heart'] >= 40) {
                    b = '出色'
                }
                if (result['heart'] >= 33 && result['heart'] < 40) {
                    b = '良好'
                }
                if (result['heart'] >= 30 && result['heart'] < 33) {
                    b = '高于平均'
                }
                if (result['heart'] >= 26 && result['heart'] < 30) {
                    b = '平均水平'
                }
                if (result['heart'] >= 22 && result['heart'] < 26) {
                    b = '低于平均'
                }
                if (result['heart'] < 22) {
                    b = '弱'
                }
            }
            if (result['age'] >= 66) {
                if (result['heart'] >= 34) {
                    b = '出色'
                }
                if (result['heart'] >= 29 && result['heart'] < 34) {
                    b = '良好'
                }
                if (result['heart'] >= 26 && result['heart'] < 29) {
                    b = '高于平均'
                }
                if (result['heart'] >= 23 && result['heart'] < 26) {
                    b = '平均水平'
                }
                if (result['heart'] >= 19 && result['heart'] < 23) {
                    b = '低于平均'
                }
                if (result['heart'] < 19) {
                    b = '弱'
                }
            }

        }
        if(result['gender']=='男'){
            if (result['Bend_sitting'] == 0 || result['Bend_sitting'] == 1){
                c='优秀'
            }
            if (result['Bend_sitting'] == 2) {
                c = '很好'
            }
            if (result['Bend_sitting'] == 3) {
                c = '好'
            }
            if (result['Bend_sitting'] == 4) {
                c = '一般'
            }
            if (result['Bend_sitting'] == 5) {
                c = '需改进'
            }
        }
        else{
            if (result['Bend_sitting'] == 0) {
                c = '优秀'
            }
            if (result['Bend_sitting'] == 1) {
                c = '很好'
            }
            if (result['Bend_sitting'] == 2) {
                c = '好'
            }
            if (result['Bend_sitting'] == 3) {
                c = '一般'
            }
            if (result['Bend_sitting'] == 4 || result['Bend_sitting'] == 5) {
                c = '需改进'
            }
        }


        if (result['gender'] == '男') {
            if (result['Bend_standing'] == 0 || result['Bend_standing'] == 1) {
                d = '优秀'
            }
            if (result['Bend_standing'] == 2) {
                d = '很好'
            }
            if (result['Bend_standing'] == 3) {
                d = '好'
            }
            if (result['Bend_standing'] == 4) {
                d = '一般'
            }
            if (result['Bend_standing'] == 5) {
                d = '需改进'
            }
        }
        else {
            if (result['Bend_standing'] == 0) {
                d = '优秀'
            }
            if (result['Bend_standing'] == 1) {
                d = '很好'
            }
            if (result['Bend_standing'] == 2) {
                d = '好'
            }
            if (result['Bend_standing'] == 3) {
                d = '一般'
            }
            if (result['Bend_standing'] == 4 || result['Bend_standing'] == 5) {
                d = '需改进'
            }
        }
      console.log(a)
      console.log(b)
      console.log(c)
      console.log(d)

           let  dic = new Array();
                dic.push(a)
                dic.push(b)
                dic.push(c)
                dic.push(d)
        ctx.body = dic
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