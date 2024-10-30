import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";

import React, { useState } from 'react';

import { Form } from "@remix-run/react";




export const Payout = ({
    Discount,
    stripePromise,
    paymentIntent,
    ...attrs 
}) => {
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
    const [Email, setEmail] = useState('');


      return (
        <>
            {Discount ? (
                <>

                    <section>
                        <div className="consultationContainer">
                        <div className="columnContainer">
                            <img src="../imgs/pay_bill.gif" />
                            <div>
                            <p className='subtitle'>Consultation Fee</p>
                            <p className='price'>Free <s>$50</s> </p>
                            </div>
                            
                            <span className="smallDivider"></span>
                            <p className="consultationFeeP">
                            To kickstart your website journey, we just need to secure a consultation fee. This sets the stage for our exciting collaboration and the beginning of our creative process. <br></br> (This price can not be refunded).
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

                    <section>
                      <Form method="post">
                        <input
                          name='email'
                          id="email"
                          type="email"
                          value={Email}
                          style={{color: "black"}}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email address"
                          required
                        />

                        <button type="submit"> Book now </button>
                      </Form>
                    </section>
                
                </>
            ):(
                <>
                    <section>
                        <div className="consultationContainer">
                        <div className="columnContainer">
                            <img src="../imgs/pay_bill.gif" />
                            <div>
                            <p className='subtitle'>Consultation Fee</p>
                            <p className='price'>$50</p>
                            </div>
                            
                            <span className="smallDivider"></span>
                            <p className="consultationFeeP">
                            To kickstart your website journey, we just need to secure a consultation fee. This sets the stage for our exciting collaboration and the beginning of our creative process. <br></br> (This price can not be refunded).
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
                </>
            )}
        </>
      );
};