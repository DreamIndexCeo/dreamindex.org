import React, { useState, useEffect } from 'react';

import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import style from "../styles/services/deposit.css";
import checkout from "../styles/Checkout/Deposit.css";

import { Link, Form } from "@remix-run/react";

import { useNavigate, useParams, useLoaderData, useActionData } from "@remix-run/react";


import { loadStripe } from '@stripe/stripe-js'
import { createDepositIntent } from '../utils/Stripe/Payments';
import { Payout } from '../components/deposit/Payout';
import { json } from "@remix-run/node";
import { getInvoice, invoice_PI } from '../utils/Stripe/Invoice';

export async function loader({ params }) {


  const invoiceID = params.id;
  const invoice = await getInvoice(invoiceID);
  const paymentIntent =  await invoice_PI(invoice, invoiceID);

  console.log(invoice)
  //console.log(paymentIntent)

  // Use the public key to load Stripe on the client
  const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

  return ({
    publicKey: STRIPE_PUBLIC_KEY,
    invoice: invoice,
    paymentIntent: paymentIntent,

  });
}


    
export default function Deposit() {
  // Get paymentIntent and publicKey from loader
  const { publicKey, invoice, paymentIntent } = useLoaderData();

  const navigate = useNavigate();
  // Load Stripe with the public key
  const stripePromise = loadStripe(publicKey);

  // Convert timestamp to milliseconds
  const date = new Date(invoice.due_date * 1000);

  // Format the date to 'Jan 10, 2025'
  const due_date = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(due_date)

  
  return (
    <body>

      <section className='col gap'>
        <h1>Deposit Fee</h1>

        <div className='row gap'>

          <div className='col gap'>
            <div className='container'>
              <div>
                <h3>Invoice form {invoice.account_name}</h3>
                <p className='price'>${(invoice.amount_due / 100).toFixed(2)}</p>
                <h3>Due {due_date}</h3>
              </div>

              <line></line>

              <div className='row'>
                <a href={invoice.invoice_pdf}><p>Download Invoice</p></a>
              </div>

              <div className='text-row1'>
                <div className='col'>
                  <p>To</p>
                  <p>From</p>
                </div>
                <div className='col'>
                  <p>{invoice.customer_name}</p>
                  <p>{invoice.account_name}</p>
                </div>
              </div>

            </div>
            <div className='container'>
              <h3>Invoice #{invoice.number}</h3>

              <line className='full'></line>

              <div className='text-row2'>
                <p>Total due</p>
                <p>${(invoice.total / 100).toFixed(2)}</p>
              </div>

              <line className='full'></line>
              <div>
                <div className='text-row2'>
                  <p>Amount Paid</p>
                  <p>${(invoice.amount_paid / 100).toFixed(2)}</p>
                </div>
                <div className='text-row2'>
                  <p>Amount Remaining</p>
                  <p>${(invoice.amount_remaining / 100).toFixed(2)}</p>
                </div>
              </div>
              
              <line className='full'></line>

              <p className='bottom'>Questions? Contact us at <b>Contact@dreamindex.org</b> or call us at <b>+1 475-422-544</b></p>
            </div>
          </div>

          <div className='col gap'>
            <div className='container'>
              <div>
                <h3>Description:</h3>
                <p style={{color: '#000'}}>This deposit fee will be used to begin your website development process and will be deducted from your final price when the final payment is needed.</p>
              </div>

              <line className='full'></line>

              <Payout stripePromise={stripePromise} paymentIntent={paymentIntent}/>
            </div>
          </div>

        </div>
      </section>

    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: style }, { rel: "stylesheet", href: checkout }];
}
