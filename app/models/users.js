const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Users=new Schema({
    __v:{type:Number,select:false},
    name:{type:String,required:false},
    password:{type:String,required:false,select:true},
    age:{type:String,required:false},
    phone:{type:Number,required:false},
    height:{type:Number,required:false},
    weight:{type:Number,required:false},
    BMI:{type:Number,required:false}
});
module.exports=model('Users',Users)