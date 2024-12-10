import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

export async function createCustomer(id){
    let customer

    // Fetches the the data from that client 
    const userData = await prisma.admissions.findUnique({
        where : {
            id: id
        },
    });

    // verifying customer isnt already created 
    const verify = await stripe.customers.search({
        query: `metadata['database_id']: '${id}'`
    })

    // show query response
    console.log(verify.data)

    if (!verify.data.length){
        // create a new customer
        customer = await stripe.customers.create({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            description: `Business Owner of ${userData.business}`,
            metadata: {
                database_id: id,
                business: userData.business,
                website_generated: true
            }
        })

    } else {
        // returning the already mad customer
        customer = verify.data[0]; 
    }

    

    return customer.id;
}