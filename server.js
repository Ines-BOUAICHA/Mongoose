const express = require('express');
const connectDB= require('./connectDB');
const PersonDB=require('./model');
// new Person
/*const Person = new PersonDB( {name:"yassine", age:30, favoritfood:"couscous"})
Person.save ((err)=>{
    if (err) return handleError(err)
    //save
})*/
/*const Person = new PersonDB( {name:"hiba", age:20, favoritfood:"pizza"})
Person.save ((err)=>{
    if (err) return handleError(err)
    //save
})*/
/*const Person = new PersonDB( {name:"manel", age:12, favoritfood:"spaghetti"})
Person.save ((err)=>{
    if (err) return handleError(err)
    //save
})*/

//Find All
/*const search = async()=>{
    try{
const data = await PersonDB.find({});
console.log(data)
    }catch(err){
        console.log(err)
    }
}
search()*/
//Find one
/*const search = async()=>{
    try{
const data = await PersonDB.find({name:"hiba"});
console.log(data)
    }catch(err){
        console.log(err)
    }
}
search()*/
//Find by id
/*const search = async()=>{
    try{
const data = await PersonDB.findById({_id:"6124fc9537f9833e909826c8"});
console.log(data)
    }catch(err){
        console.log(err)
    }
}
search()*/
//Find One Person which has a certain food in the person's favorites
// const search = async() => {
//     try {
//        const data = await PersonDB.findOne({favoritfood: ["pizza"]})
//        console.log(data)
//     } catch (err) {
//         console.error(err)
//     }
//}
//search()

/*const query ={name:"manel"}
const UpdatePerson= async()=>
{
     await PersonDB.findOneAndUpdate(query,{name:"asma"},(err,data)=>{
        try{
console.log("update")
        } catch (err){
           console.log(err) 
        }
    })
}
UpdatePerson()*/


//Fin one delet
/*const Delete = async()=>{
    await PersonDB.findOneAndDelete({_id:"6124fe29f7c10208ec1a0872"}, (err,data)=>{
        try{
console.log("removed Data",data)
        }catch(error){
            console.log(err)
        }
    })
}
Delete()*/
//Delete Many Documents with model.remove()

/* const DeletePerson = async() => {
     const res = await PersonDB.remove({name: "hiba"}, (err, data) => {
         try {
            console.log("Persons removed ")
         } catch (err) {
            console.error(err) 
         }
     })
 }
  DeletePerson()*/
  //_Find people who like burrito

/*const chainSearch = async() => {
    try {
      const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "burrito"}}}).sort({name: 'hiba'}).limit(2).select({age: 0, __v: 0}).exec()
          console.log(data)
    } catch (err) {
        console.error(err)
    }
}
chainSearch()*/


connectDB()
const app = express()
const port = 3000


app.listen(port, (err) => {
    err?
    console.log(err) :
    console.log(`Server running on the port ${port}!`)  
} )