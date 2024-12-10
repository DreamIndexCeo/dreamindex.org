import React, { useState } from 'react';

import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import style from "../styles/services/deposit.css";
import checkout from "../styles/Checkout/Deposit.css";

import { Link, Form } from "@remix-run/react";

import { useNavigate, useParams, useLoaderData, useActionData } from "@remix-run/react";


import { loadStripe } from '@stripe/stripe-js'
import { createDepositIntent } from '../utils/Stripe/Payments';
import { Payout } from '../components/deposit/Payout';
import { json } from "@remix-run/node";

export async function loader() {

  // Use the public key to load Stripe on the client
  const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

  return ({
    publicKey: STRIPE_PUBLIC_KEY,
  });
}

export async function action({ request }) {

  const formData = await request.formData();
  const stripeInvoice = formData.get("invoice");

  return json({ 
    invoiceKey: stripeInvoice
  });
}
    
export default function Deposit() {

     // Get paymentIntent and publicKey from loader
     const { publicKey } = useLoaderData();
     // Get invoiceKey from action
     const { invoiceKey } = useActionData();

     const navigate = useNavigate();

     // Load Stripe with the public key
     const stripePromise = loadStripe(publicKey);
  
  return (
    <body>

      <section className='col gap'>
        <h1>Deposit Fee</h1>

        <div className='row gap'>

          <div className='col gap'>
            <div className='container'>
              <div>
                <h3>Invoice form Dream Index</h3>
                <p className='price'>$150.00</p>
                <h3>Due November 30, 2024</h3>
              </div>

              <line></line>

              <div className='row'>
                <p>Download Invoice</p>
              </div>

              <div className='text-row1'>
                <div className='col'>
                  <p>To</p>
                  <p>From</p>
                </div>
                <div className='col'>
                  <p>Customer</p>
                  <p>Dream Index LLC</p>
                </div>
              </div>

            </div>
            <div className='container'>
              <h3>Invoice #EXAMPLE-0001</h3>

              <line className='full'></line>

              <div className='text-row2'>
                <p>Total due</p>
                <p>$150.00</p>
              </div>

              <line className='full'></line>
              <div>
                <div className='text-row2'>
                  <p>Amount Paid</p>
                  <p>$0.00</p>
                </div>
                <div className='text-row2'>
                  <p>Amount Remaining</p>
                  <p>$150.00</p>
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

              <Payout stripePromise={stripePromise} paymentIntent={invoiceKey}/>
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
