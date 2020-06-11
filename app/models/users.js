const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Users=new Schema({
    __v:{type:Number,select:false},
    name:{type:String,required:false},
    password:{type:String,required:false,select:true},
    age:{type:Number,required:false},
    phone:{type:Number,required:false},
    height:{type:Number,required:false},
    weight:{type:Number,required:false},
    BMI:{type:Number,required:false},
    gender:{type:String,required:false}
});
module.exports=model('Users',Users)