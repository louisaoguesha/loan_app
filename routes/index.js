const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

/*
@post request to create a customer
"signup"
*/
router.post('/signup', async(req, res) => {
    try {
        const {name,email,gender} = req.body
        if (!name || !email || !gender) {
            res.status(400).json({error: 'all fields are equal'})
        }
        else{
            let customer = await Customer.find({email})
            if (customer) {
                res.status(400).json({error: 'customer exists already'})
            }else{
                customer = await Customer.create({
                    name,
                    email,
                    gender
                })
                res.status(201).json(customer)
            }

        }
        
    } catch (error) {
        console.log(error)
    }
})





module.exports = router