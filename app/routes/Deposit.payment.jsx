import React, { useState } from 'react';

import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import style from "../styles/services/deposit.css";
import checkout from "../styles/Checkout/Checkout.css";

import { Link, Form } from "@remix-run/react";

import { useLoaderData } from '@remix-run/react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import CheckoutForm from "../components/deposit/CheckoutForm";
import { createDepositIntent } from '../utils/Stripe/Payments'



const stripePromise = loadStripe("pk_test_51MXaWBCKNPKPb8n38xxkaoAPVYcyIfOYd3ptoKvH8LEIdVZnEDraz0mNIY00r73pRmMOcQMxokgYUTGxtHphc6iI00qh7aRKxE");

export async function loader(){
    return await createDepositIntent()
}


    
export default function Deposit() {
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
          <h1 className="gradientTitle">Start Your Dream Website Creation</h1>
        </section>

          <section>
            <div className="depositContainer">
              <div className="columnContainer">
                <img src="../imgs/pay_bill.gif" />
                <p style={{ fontSize: "31px" }}>Deposit Fee</p>
                <p>$150</p>
                <span className="smallDivider"></span>
                <p className="depositFeeP">
                  To begin the website creation we need to take a Deposit, that
                  will be subtracted from the final price.
                </p>
              </div>
              <div className="howdYouFindUS">
                <p style={{ textAlign: "left" }}>How did you find us ?</p>
                <div className="depositList">
                  <ul>
                    <li>
                      <input name="marketing" value="Instagram" type="radio" />
                      Instagram
                    </li>
                    <li>
                      <input name="marketing" value="Youtube" type="radio" />
                      Youtube
                    </li>
                    <li>
                      <input name="marketing" value="Facebook" type="radio" />
                      Facebook
                    </li>
                    <li>
                      <input name="marketing" value="TikTok" type="radio" />
                      TikTok
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <input name="marketing" value="Marketing Team" type="radio" />
                      Marketing Team
                    </li>
                    <li>
                      <input name="marketing" value="Google Ads" type="radio" />
                      Google Ads
                    </li>
                    <li>
                      <input name="marketing" value="A friend" type="radio" />
                      A friend
                    </li>
                    <li>
                      <input name="marketing" value="Other" type="radio" />
                      Other
                    </li>
                  </ul>
                </div>
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
