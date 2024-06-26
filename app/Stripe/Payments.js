import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function retrievePaymentIntent( id ) {
    return await stripe.paymentIntents.retrieve(id)
}

export async function createPaymentIntent() {
    return await stripe.paymentIntents.create({
        amount: 15000,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    })
} 




export async function createDepositIntent() {
    return await stripe.paymentIntents.create({
        amount: 15000,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    })
}

export async function createCommissionIntent() {
    return await stripe.paymentIntents.create({
        amount: 5000,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    })
}
