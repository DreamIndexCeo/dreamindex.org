import styles from "../styles/services/paymentForm.css";
import CalendarCSS from '../styles/services/calendar.css';
import ColorPickerCSS from '../styles/services/colorPicker.css';
import React, { useState } from 'react';
import { Link } from "@remix-run/react";
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


export default function ContactForm() {

  const { data : data } = useLoaderData();

  const [hex, setHex] = useState("#fff");

  return (
    <body>
      <div className="bodyCentered">
        <div className="paymentFormContainer">
          <div className="rowContainer">
            <img src="../imgs/color_logo.png" />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Access Code:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Full Name:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Phone #:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Email:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
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
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              <span style={{ color: "red" }}>*</span> Describe your business in
              as much detail as possible:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="biggerInput"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Have you had a website in the past?
            </label>
            <ul>
              <li>
                <input type="checkbox" />
                Yes
              </li>
              <li>
                <input type="checkbox" />
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
                <input type="checkbox" />
                Contact Wesbsite
              </li>
              <li>
                <input type="checkbox" />
                Appointment Booking Website
              </li>
              <li>
                <input type="checkbox" />
                E-commerence Website
              </li>
              <li>
                <input type="checkbox" />
                Custom
              </li>
            </ul>
          </div>
          <div class="inputGroup">
            <label class="inputLabel">Do you have a logo</label>
            <ul>
              <li>
                <input type="checkbox" />
                Yes
              </li>
              <li>
                <input type="checkbox" />
                No
              </li>
              <li>
                <input type="checkbox" />
                Would like one made
              </li>
            </ul>
          </div>
          <div class="inputGroup">
            <label class="inputLabel">Needed Features for you website:</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="biggerInput"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Any specific pages you want included (Extra pages you would like
              that haven't been previously mentioned):
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="biggerInput"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Desired Primary / Main Color of your website: ( Use color name or Hex Code or ColorPicker Box )
            </label>

            <ColorPicker id='one'/>

          </div>

          <div class="inputGroup">
            <label class="inputLabel">
              Desired Secndary Color of your website: ( Use color name or Hex Code or ColorPicker Box )
            </label>

            <ColorPicker id='two'/>

          </div>
          <div class="inputGroup">
            <label class="inputLabel">What is your target audience:</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">List any goals for your website:</label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="biggerInput"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Do you have any specific design elements you would like
              incorporated into your website:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="biggerInput"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Please link any websites by URL that you would like to take
              inspiration from:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="input"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Do you have images you can provide that will be used on our
              website:
            </label>
            <ul>
              <li>
                <input type="checkbox" />
                Yes
              </li>
              <li>
                <input type="checkbox" />
                No
              </li>
              <li>
                <input type="checkbox" />
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
                <input type="checkbox" />
                Yes
              </li>
              <li>
                <input type="checkbox" />
                No
              </li>
            </ul>
          </div>
          <div class="inputGroup">

            <label class="inputLabel">
              If you have a deadline and would like to pay for a priority fee
              please select your deadline date:
            </label>


            <Calendar Data={data} id="Calendar-1"/>
            

          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Is there any further information you would like to provide:
            </label>
            <input
              autocomplete="off"
              name="Email"
              id="Email"
              class="biggerInput"
              type="email"
            />
          </div>
          <div class="inputGroup">
            <label class="inputLabel">
              Book the next available date for your Consultation Meeting with
              out Design Team (Held on Zoom):
            </label>
            <Calendar Data={data} id="Calendar-2"/>
          </div>

          <div className="rowContainer">
            <button>
              <Link className="button" to="/commission/success">
                <img src="../imgs/airplane.png" style={{ width: "15px" }} />
                Send
              </Link>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }, {rel: 'stylesheet', href: CalendarCSS}, {rel: 'stylesheet', href: ColorPickerCSS}];
}
