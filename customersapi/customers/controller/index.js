const customers = [
    {id: 1, name: 'customer-1',age: 45},
    {id: 2, name: 'customer-2',age: 25},
    {id: 3, name: 'customer-3',age: 35},
    {id: 4, name: 'customer-4',age: 55}
];

const fetchAllCustomers = (req, res) =>{
    res.status(200).send(customers);
};

const fetchCustomerById = (req, res) =>{
    const {id} = req.params;
    console.log(' id: ',id);
    let customer = customers.find(c => c.id === parseInt(id));
    console.log('customer: ',customer)
    if (customer){
        res.status(200).send(customer);
    }else{
        throw new Error(`Customer with id : ${id} is not found`);
    }

}

const addNewCustomer = (req,res) => {
    const {id, name, age} = req.body;
    console.log(" id : ",id, ' name: ', name, ' age: ',age);
    customers.push({id, name, age});
    res.status(201).send("New customer added successfully");
};

module.exports = {
    fetchAllCustomers,
    fetchCustomerById,
    addNewCustomer
}