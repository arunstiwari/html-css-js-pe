const Customer = require('../models');

// const customers = [
//     {id: 1, name: 'customer-1',age: 45},
//     {id: 2, name: 'customer-2',age: 25},
//     {id: 3, name: 'customer-3',age: 35},
//     {id: 4, name: 'customer-4',age: 55}
// ];

const fetchAllCustomers = async (req, res) =>{
    try{
        const customers = await Customer.find();
        res.status(200).send(customers);
    }catch (err){
        console.log('Error fetching customers');
        res.status(500).send("Error fetching customers");
    }

};

const fetchCustomerById = async (req, res) =>{
    const {id} = req.params;
    console.log(' id: ',id);
    try {
        const customer = Customer.findOne({_id: id});
        console.log('customer: ', customer);
        res.status(200).send(customer);
        // let customer = customers.find(c => c.id === parseInt(id));

    }catch (err){
        res.status(500).send("Error fetching the specific customer information");
    }
    // if (customer){
    //     res.status(200).send(customer);
    // }else{
    //     throw new Error(`Customer with id : ${id} is not found`);
    // }

}

const addNewCustomer = async (req,res) => {
    const {id, name, age} = req.body;
    console.log(" id : ",id, ' name: ', name, ' age: ',age);
    try {
            const newCustomer = new Customer({name, age});
            const savedCustomer = await newCustomer.save();
            console.log('savedCustomer: ',savedCustomer);
            res.status(201).send("New customer added successfully");
    }catch (err){
        res.status(500).send("Error adding new customer");
    }
    // customers.push({id, name, age});
    // res.status(201).send("New customer added successfully");
};

module.exports = {
    fetchAllCustomers,
    fetchCustomerById,
    addNewCustomer
}