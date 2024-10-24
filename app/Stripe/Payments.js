import Stripe from 'stripe'

import 'dotenv/config'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function retrievePaymentIntent( id ) {
    return await stripe.paymentIntents.retrieve(id)
}




export async function createDepositIntent() {
    return await stripe.paymentIntents.create({
        amount: 15000,
        currency: 'usd',
        metadata: {
            product_name: "Website Deposit Payment",
        },
        automatic_payment_methods: {
            enabled: true
        }
    })
}

export async function createconsultationIntent() {
    return await stripe.paymentIntents.create({
        amount: 5000,
        currency: 'usd',
        metadata: {
            product_name: "Website Consultation Payment",
        },
        automatic_payment_methods: {
            enabled: true
        },
    })
}
