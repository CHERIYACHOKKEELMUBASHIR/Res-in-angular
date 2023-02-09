import express from 'express';
import ProductModel from '../../models/products';

const router = express.Router();

//creating controler
router.get('/list',(req: any, res: any, next:any)=>{
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.get('/search/:productName',(req: any, res: any, next:any)=>{
    try {
        const { productName } = req.params;
        ProductModel.find({name:productName})
         .then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.post('/',(req: any, res: any, next:any)=>{
    try {
        const foodItem = req.body;
        console.log("fooditems",foodItem);
        
        ProductModel.insertMany([foodItem]).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:productid',(req: any, res: any, next:any)=>{
    try {
        const { productid } = req.params;
        const foodItem = req.body;
        ProductModel.update(
            { id: productid },
            {
                name: foodItem.name,
                description: foodItem.description,
                price: foodItem.price,
                rating: foodItem.rating
            }
        ).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})

// router.post('/:delete',(req: any, res: any, next:any)=>{
//     try {
//         const foodItem = req.body;
//         ProductModel.deleteOne({id:foodItem.id})
//         .then((document) => {
//             res.json(document);
//         });
//     } catch (err) {
//         next(err);
//     }
// })

router.delete('/:productName',(req:any,res:any,next:any)=>{
    try{
        const {productName}=req.params
        ProductModel.deleteOne({name:productName})
        .then((result)=>{
            res.json(result);
        })
    }catch (err){
        next (err)
    }
})

export default router;

//find greater than less than 

// router.get('/aggre/:productName',(req: any, res: any, next:any)=>{
//     try {
//         const { productName } = req.params;
//         ProductModel.aggregate([
//             {
//                 $match:{price:{$gte:10,$lte:200}}
//             }
//         ]).then((document) => {
//             res.json(document);
//         });
//     } catch (err) {
//         next(err);
//     }
// });



//find one items


// / router.get('/aggre/:productName',(req: any, res: any, next:any)=>{
//     try {
//         const { productName } = req.params;
//         ProductModel.aggregate([
//             {
//                 $match:{name:productName}
//             }
//         ]).then((document) => {
//             res.json(document);
//         });
//     } catch (err) {
//         next(err);
//     }
// });


//making assending and dessending orders

// / router.get('/aggre/:productName',(req: any, res: any, next:any)=>{
//     try {
//         const { productName } = req.params;
//         ProductModel.aggregate([
//             {
//                 $sort:{price:1} assending ,,(-1) dessending
//             }
//         ]).then((document) => {
//             res.json(document);
//         });
//     } catch (err) {
//         next(err);
//     }
// });


// router.get('/aggregate/:productName',(req: any, res: any, next:any)=>{
//     try {
//         const { productName } = req.params;
//         ProductModel.aggregate([
//             {
//                 $match:{price:{ $gt:150 ,$lt: 500}}
//             },
//             // {
//             //     $group:{_id:"$rating",fooditems:{ $push: "$name" }}
//             // },

//             {
//                 $sort:{price:1}
//             },
//             {
//                 $project:{
//                     _id:0,
//                     FoodItem:"$name",
//                     Cost:"$price",
//                     Rating:"$rating"
//                 }
//             }
//         ])
//         .then((document) => {
//             res.json(document);
//         });
//     } catch (err) {
//         next(err);
//     }
// });


// router.get('/aggregate/:productName', (req: any, res: any, next: any) => {
//     try {
//         const { productName } = req.params;
//         ProductModel.aggregate([
//             {
//                 $match: { name: { $in: ["sharath", "shaji"] } }
//             },
//             {
//                 $unwind:"$id"
//             },
//             {
//                 $project: {
//                     _id: 0
//                 }
//             }
//         ])
//             .then((document) => {
//                 res.json(document);
//             });
//     } catch (err) {
//         next(err);
//     }
// });
