import React, { useState } from 'react';

import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import style from "../styles/services/commission.css";
import checkout from "../styles/Checkout/Checkout.css";

import { Link, Form } from "@remix-run/react";

import { useLoaderData } from '@remix-run/react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from "../components/commission/CheckoutForm";
import { createCommissionIntent } from '../Stripe/Payments'



const stripePromise = loadStripe("pk_test_51MXaWBCKNPKPb8n38xxkaoAPVYcyIfOYd3ptoKvH8LEIdVZnEDraz0mNIY00r73pRmMOcQMxokgYUTGxtHphc6iI00qh7aRKxE");

export async function loader(){
    return await createCommissionIntent()
}


    
export default function Commission() {
  const paymentIntent = useLoaderData();

  const appearance = {
    theme: 'flat',
    variables: {
      fontFamily: 'Verdana',
      fontLineHeight: '1.5',
      borderRadius: '0',
      colorBackground: '#fff',
      focusBoxShadow: 'none',
      focusOutline: '-webkit-focus-ring-color auto 1px',
      tabIconSelectedColor: 'var(--colorText)'
    },
    rules: {
      '.Input, .CheckboxInput, .CodeInput': {
        transition: 'none',
        boxShadow: 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080'
      },
      '.Input': {
        padding: '12px'
      },
      '.Input--invalid': {
        color: '#DF1B41'
      },
      '.Tab, .Block, .PickerItem--selected': {
        backgroundColor: '#dfdfdf',
        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf'
      },
      '.Tab': {
        transition: 'none'
      },
      '.Tab:hover': {
        backgroundColor: '#eee'
      },
      '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
        color: 'var(--colorText)',
        backgroundColor: '#ccc'
      },
      '.Tab:focus, .Tab--selected:focus': {
        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        outline: 'none'
      },
      '.Tab:focus-visible': {
        outline: 'var(--focusOutline)'
      },
      '.PickerItem': {
        backgroundColor: '#dfdfdf',
        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        transition: 'none'
      },
      '.PickerItem:hover': {
        backgroundColor: '#eee'
      },
      '.PickerItem--highlight': {
        outline: '1px solid blue'
      },
      '.PickerItem--selected:hover': {
        backgroundColor: '#dfdfdf'
      }
    }
  };
  
  const options = {
      clientSecret: paymentIntent.client_secret,
      appearance,
  };


  const [Display, setDisplay] = useState("hidden");
  return (
    <body>
      <NavBar />
      <div className="columnContainer">
        <section>
          <h1 className="gradientTitle">Let's begin our process for your Dream Site</h1>
        </section>

          <section>
            <div className="commissionContainer">
              <div className="columnContainer">
                <img src="../imgs/pay_bill.gif" />
                <p style={{ fontSize: "31px" }}>Commission Fee</p>
                <p>$50</p>
                <span className="smallDivider"></span>
                <p className="commissionFeeP">
                To kickstart your website journey, we just need to secure a commission fee. This sets the stage for our exciting collaboration and the beginning of our creative process. <br></br> (This price can not be refunded).
                </p>
              </div>
            </div>
          </section>

          <section>
            <button className="button" onClick={() => { setDisplay("visible") }}>
              Continue
              <img src="../imgs/card.png" />
            </button>
          </section>

          <section style={{visibility: Display}}> 
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          </section>

      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: style }, { rel: "stylesheet", href: checkout }];
}
