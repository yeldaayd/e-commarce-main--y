const mongoose = require("mongoose")

const CategoriesSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        img:{type:String,required:true},
    },
    {timestamps:true}
)

const Categories=mongoose.model("Categories",CategoriesSchema)

module.exports=Categories;