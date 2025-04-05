const express=require("express")
const router=express.Router()
const Categories=require("../models/Categories.js")

// Yeni bir kategori oluşturma

router.post("/",async(req,res)=>{
    try {
        const {name,img}=req.body;

      const newCategories = new Categories({name,img})
      await newCategories.save()

        res.status(201).json(newCategories)

    } catch (error) {
        console.log(error)
        
    }
})

// Tüm kategorileri getirme (Read- All)
router.get("/",async(req,res)=>{
  try {
    const categories=await Categories.find()
    res.status(200).json(categories)
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"Server error."})
    
  }
})

//Belirli bir kategoriyi getirme (Read -Single)
router.get("/:categoriesId",async(req,res)=>{
    try {
        const categoriesId =req.params.categoriesId
        // console.log(await Categories.findById(categoriesId))
       

        try {
            const categories = await Categories.findById(categoriesId);
            res.status(200).json(categories)
        } catch (error) {
            console.log(error);
             res.status(404).json({msg:"Kategori bulunamadı"})
        }

       
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server error."})
    }
    
    // res.status(200).json(req.params.categories)

})
// Kategori Güncelleme(update)
router.put("/:categoriesId",async(req,res)=>{
    try {
        const categoriesId =req.params.categoriesId
        const updates=req.body;

        const existingCategories = await Categories.findById(categoriesId)

        if (!existingCategories){
           return res.status(404).json({msg:"Kategori bulunamadı"})

        }

       const updatedCategories= await Categories.findByIdAndUpdate(
        categoriesId,
        updates,
        {new:true}
    )
       res.status(200).json(updatedCategories)
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Server error."})
        
    }
})
//Kategori Silme (Delete)
router.delete("/:categoriesId",async()=>{
    try {
        
    } catch (error) {
        
    }

})

module.exports=router;