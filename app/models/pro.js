const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const pro=new Schema({
  __v:{type:Number,select:false},
  phone:{type: Number,required:false},
  heart_times:{type:Number,required:false},
  power_times:{type:Number,required:false},
  flex_times:{type:Number,required:false},
  func_times:{type:Number,required:false},
});
module.exports=model('pro',pro)