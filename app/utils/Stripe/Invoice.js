import 'dotenv/config';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const product = await stripe.products.create({
    name: 'Deposit Fee',
  });