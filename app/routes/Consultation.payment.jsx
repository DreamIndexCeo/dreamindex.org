import React, { useState } from 'react';

import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import style from "../styles/services/consultation.css";
import checkout from "../styles/Checkout/Consultation.css";

import { Link, Form } from "@remix-run/react";
import { useLoaderData } from '@remix-run/react'

import { loadStripe } from '@stripe/stripe-js'
import { createConsultationIntent } from '../utils/Stripe/Payments';
import { Payout } from '../components/consultation/Payout';

import { json } from "@remix-run/node";

import { redirect } from "@remix-run/node";


export async function loader() {
  // Only use the secret key on the server to create the payment intent
  const consultation_int = await createConsultationIntent();

  // Use the public key to load Stripe on the client
  const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

  return json({
    paymentIntent: consultation_int,
    publicKey: STRIPE_PUBLIC_KEY
  });
}

export async function action({request}){
  const formData = await request.formData();
  const email = String(formData.get("email"));
  console.log(email);



  return redirect("/route/consultation-mail", 
    {headers: {
      "Set-Cookie": `email=${email}; Path=/; HttpOnly; SameSite=Lax;`,
    }}
  );
}

    
export default function consultation() {
   // Get paymentIntent and publicKey from loader
   const { paymentIntent, publicKey } = useLoaderData();

   // Load Stripe with the public key
   const stripePromise = loadStripe(publicKey);

  
  return (
    <body>
      <NavBar />
      <div className="columnContainer">
        <section>
          <h1 className="gradientTitle Title">Let's begin the process for your Dream Site</h1>
        </section>

        <Payout Discount={true} stripePromise={stripePromise} paymentIntent={paymentIntent}/>

      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: style }, { rel: "stylesheet", href: checkout }];
}
