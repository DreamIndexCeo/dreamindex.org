import 'dotenv/config';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function depositInvoice(id){
  let priceID;

  if (process.env.STRIPE_SECRET_KEY.startsWith('sk_test_')) {
    console.log('Using test API key');
    priceID = 'price_1QUDCcCKNPKPb8n3RoQ6WV69';
  } else if (process.env.STRIPE_SECRET_KEY.startsWith('sk_live_')) {
    console.log('Using live API key');
    priceID != 'price_1QFePDCKNPKPb8n37KA96dZa';
  }

  try{
    // Create an invoice item
    await stripe.invoiceItems.create({
      customer: id,
      price: priceID,
    });

    // Create an invoice
    const invoice = await stripe.invoices.create({
      customer: id,
      description: 'Deposit fee for website Development.',
    });

    return invoice
  }catch(err){
    console.log(err);
  }

  
}