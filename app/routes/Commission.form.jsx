import styles from "../styles/services/paymentForm.css";
import CalendarCSS from '../styles/services/calendar.css';
import ColorPickerCSS from '../styles/services/colorPicker.css';
import React, { useState } from 'react';
import { Form, Link } from "@remix-run/react";
import { Calendar, ColorPicker } from '../components/index.js';

export const meta = () => {
  return [{ title: "DreamIndex || Commission Form" }];
};

//---------------------------------------------------------------------------------------
import { useLoaderData } from '@remix-run/react';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function loader(){
  const list = await prisma.admissions.findMany({});
  return {
    data: list,
  }
}
//----------------------------------------------------------------------------------------

function Auth(){

}

function uploadForm(){

}

export async function action(){
  return null;
}


//----------------------------------------------------------------------------------------

export default function ContactForm() {

  const { data : data } = useLoaderData();


  function phoneFill(event) {
    let input = event.target.value.replace(/\D/g, '');
    let formattedInput = '';
  
    if (input.length > 0) {
        formattedInput += '(' + input.substring(0, 3);
    }
    if (input.length >= 4) {
        formattedInput += ') ' + input.substring(3, 6);
    }
    if (input.length >= 7) {
        formattedInput += '-' + input.substring(6, 10);
    }
    event.target.value = formattedInput;
  };


  return (
    <body>
      <div className="bodyCentered">
        <Form className="paymentFormContainer" method="post">
          <div className="rowContainer">
            <img src="../imgs/color_logo.png" />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Access Code:
            </label>
            <input
              autocomplete="off"
              name="id_Key"
              id="id_Key"
              class="input"
              type="text"
            />
          </div>
          
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Full Name:
            </label>
            <input
              autocomplete="off"
              name="name"
              id="name"
              class="input"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Phone #:
            </label>
            <input
              autocomplete="off"
              name="phone"
              id="phone"
              class="input"
              placeholder="(###) ###-####"
              maxlength="14"
              type="tel"
              onChange={phoneFill}
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Email:
            </label>
            <input
              autocomplete="off"
              name="email"
              id="email"
              class="input"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Business Name:
            </label>
            <input
              autocomplete="off"
              name="business"
              id="business"
              class="input"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Describe your business in
              as much detail as possible:
            </label>
            <input
              autocomplete="off"
              name="Describe your business in as much detail as possible"
              id="Question1"
              class="biggerInput"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Have you had a website in the past?
            </label>
            <ul>
              <li>
                <input type="radio" name="Have you had a website in the past?" value="Yes" />
                Yes
              </li>
              <li>
                <input type="radio" name="Have you had a website in the past?" value="No" />
                No
              </li>
            </ul>
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              What Category describes your wesbite?
            </label>
            <ul>
              <li>
                <input type="radio" name="What Category describes your wesbite?" value="Contact Wesbsite"/>
                Contact Wesbsite
              </li>
              <li>
                <input type="radio" name="What Category describes your wesbite?" value="Appointment Booking Website"/>
                Appointment Booking Website
              </li>
              <li>
                <input type="radio" name="What Category describes your wesbite?" value="E-commerence Website" />
                E-commerence Website
              </li>
              <li>
                <input type="radio" name="What Category describes your wesbite?" value="Custom"/>
                Custom
              </li>
            </ul>
          </div>
          <div class="inputGroup">
            <label class="inputLabel">Do you have a logo</label>
            <ul>
              <li>
                <input type="radio" name="Do you have a logo" value="Yes"/>
                Yes
              </li>
              <li>
                <input type="radio" name="Do you have a logo" value="No"/>
                No
              </li>
              <li>
                <input type="radio" name="Do you have a logo" value="Would like one made" />
                Would like one made
              </li>
            </ul>
          </div>
          <div class="inputGroup">
            <label class="inputLabel">Needed Features for you website:</label>
            <input
              autocomplete="off"
              name="Needed Features for you website"
              id="Question5"
              class="biggerInput"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Any specific pages you want included (Extra pages you would like
              that haven't been previously mentioned):
            </label>
            <input
              autocomplete="off"
              name="Any specific pages you want included"
              id="Question6"
              class="biggerInput"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Desired Primary / Main Color of your website: ( Use color name or Hex Code or ColorPicker Box )
            </label>

            <ColorPicker id='Main-Color' />

          </div>

          <div class="inputGroup">
            <label class="inputLabel">
              Desired Secndary Color of your website: ( Use color name or Hex Code or ColorPicker Box )
            </label>

            <ColorPicker id='Secondary-Color'/>

          </div>
          <div class="inputGroup">
            <label class="inputLabel">What is your target audience:</label>
            <input
              autocomplete="off"
              name="What is your target audience"
              id="Question7"
              class="input"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">List any goals for your website:</label>
            <input
              autocomplete="off"
              name="List any goals for your website"
              id="Question8"
              class="biggerInput"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Do you have any specific design elements you would like
              incorporated into your website:
            </label>
            <input
              autocomplete="off"
              name="Do you have any specific design elements you would like incorporated into your website"
              id="Question9"
              class="biggerInput"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Please link any websites by URL that you would like to take
              inspiration from:
            </label>
            <input
              autocomplete="off"
              name="Please link any websites by URL that you would like to take inspiration from"
              id="Question10"
              class="input"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Do you have images you can provide that will be used on our
              website:
            </label>
            <ul>
              <li>
                <input type="radio" name="Do you have images you can provide that will be used on our website"  value="Yes"/>
                Yes
              </li>
              <li>
                <input type="radio" name="Do you have images you can provide that will be used on our website" value="No"/>
                No
              </li>
              <li>
                <input type="radio" name="Do you have images you can provide that will be used on our website" value="Yes but need time to collect"/>
                Yes but need time to collect
              </li>
            </ul>
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Were you intrested in an account system (Additional $400):
            </label>
            <ul>
              <li>
                <input type="radio" name="Were you intrested in an account system" value="Yes"/>
                Yes
              </li>
              <li>
                <input type="radio" name="Were you intrested in an account system" value="No"/>
                No
              </li>
            </ul>
          </div>
          <div class="inputGroup">

            <label class="inputLabel">
              If you have a deadline and would like to pay for a priority fee
              please select your deadline date:
            </label>

            <Calendar Data={data} id="Deadline"/>
            

          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Is there any further information you would like to provide:
            </label>
            <input
              autocomplete="off"
              name="Is there any further information you would like to provide"
              id="Question13"
              class="biggerInput"
              type="text"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Book the next available date for your Consultation Meeting with
              out Design Team (Held on Zoom):
            </label>
            <Calendar Data={data} id="Meeting"/>
          </div>

          <div className="rowContainer">
            <button className="button"type="submit">
                <img src="../imgs/airplane.png" style={{ width: "15px" }} />
                Send
            </button>
          </div>
        </Form>
      </div>
    </body>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }, {rel: 'stylesheet', href: CalendarCSS}, {rel: 'stylesheet', href: ColorPickerCSS}];
}
