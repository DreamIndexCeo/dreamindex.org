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
    

    // Create an invoice
    const invoice = await stripe.invoices.create({
      customer: id,
      description: "This deposit fee will be used to begin your website development process and will be deducted from your final price when the final payment is needed.",
      collection_method: 'send_invoice', // Requires the customer to pay manually
      days_until_due: 30,
    });

    // Create an invoice item
    const invoiceItem = await stripe.invoiceItems.create({
      customer: id,
      price: priceID,
      invoice: invoice.id
    });

    // finalize invoice 
    const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id);

    console.log(`Customer created: ${id}`);
    console.log(`Invoice item created: ${invoiceItem.id}`);
    console.log(`Invoice created: ${invoice.id}`);
    console.log(`Invoice finalized: ${finalizedInvoice.id}`);
    console.log(`Invoice URL: ${finalizedInvoice.hosted_invoice_url}`);

    return finalizedInvoice.id
  }catch(err){
    console.log(err);
  }
}

export async function getInvoice(id){
  try{
    // Retrieve the invoice to get the amount due
    const invoice = await stripe.invoices.retrieve(id);

    return invoice;

  }catch(err){
    console.log(err);
  }
  
}

export async function invoice_PI(invoice, id){

  try{
    //Create the payment intent for the amount due
    const paymentIntent = await stripe.paymentIntents.create({
      amount: invoice.amount_due,
      currency: invoice.currency,
      customer: invoice.customer,
      metadata: { id },
    });

    return paymentIntent;
  } catch (err){
    console.log(err)
  }
  
}