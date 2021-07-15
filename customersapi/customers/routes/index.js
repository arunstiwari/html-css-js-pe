const express = require('express');
const {fetchCustomerById,fetchAllCustomers,addNewCustomer} = require('../controller')

const router = express.Router();

// router.get("/", (req, res) =>{
//     // res.status(200).send("Welcome to Customer API page");
//     res.render('index', {name: 'Shobhit'});
// });
//
// router.get("/about", (req,res)=> {
//     res.sendFile(path.join(__dirname,'/views/about.html'), () => {
//         console.log('About html was rendered');
//     })
// })


router.get("/customers",fetchAllCustomers );
router.get("/customers/:id", fetchCustomerById);

router.post("/customers", addNewCustomer);

module.exports = router;