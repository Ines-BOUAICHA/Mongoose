const mongoose = require ('mongoose');

const {Schema}= mongoose;

const PersonSchema = new Schema ({
   name:{type:String,required:true},
    age:{type: Number},
    favoritfood:{type:String,required:true}

})

const PersonDB = mongoose.model("Person", PersonSchema)

module.exports= PersonDB