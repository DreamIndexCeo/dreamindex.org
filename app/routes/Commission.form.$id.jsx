import styles from "../styles/services/paymentForm.css";
import CalendarCSS from '../styles/services/calendar.css';
import ColorPickerCSS from '../styles/services/colorPicker.css';
import React, { useState, useEffect  } from 'react';
import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from "@remix-run/react";
import { Calendar, ColorPicker } from '../components/index.js';

import { useParams, useNavigate} from "@remix-run/react";

export const meta = () => {
  return [{ title: "DreamIndex || Commission Form" }];
};

//---------------------------------------------------------------------------------------
import { useLoaderData } from '@remix-run/react';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function loader(){
  const list = await prisma.admissions.findMany({});
  const offDays = await prisma.days_Off.findMany({
    where: {
        weekDays: null
    }
  });
  const offweekDays = await prisma.days_Off.findMany({
    take: 1,
    where: {
        Date: null
    }
  });

  return {
    data: list,
    offDays: offDays,
    offweekDays: offweekDays
  }
}
//----------------------------------------------------------------------------------------


export async function action({request, params}){
  const formData = await request.formData(); //Getting form data
  const id = params.id;
  
  if(id == "section1"){

    const Data = Object.fromEntries(formData);
    const id_Key = formData.get("id_Key");

    const auth = await prisma.codes.findMany({ // Pulling the code query that matches the clients to see if its ablible 
      where: {
        AccessCode: id_Key,
        Status: true
      }
    });

    if (auth.length){ //if auth pulled a vaild query using the id_Key
      return {Data};
    }else {
      return { error: 'Code Is Invaild!' }
    }

  } else if(id == "section2"){

    const Data = Object.fromEntries(formData);
    return {Data};

  } else if(id == "section3"){

    const Data = Object.fromEntries(formData);
    return {Data};

  } else if(id == "section4"){
    const Info = JSON.parse(formData.get("InfoData"));

    const id_Key = String(Info.Data.id_Key);

    const fname = String(Info.Data.fname);
    const lname = String(Info.Data.lname);
    const fullName = fname+" "+lname;

    const phone = String(Info.Data.phone);
    const email = String(Info.Data.email);
    const business = String(Info.Data.business);
    

    const Vision = JSON.parse(formData.get("VisionData"));
    const Style = JSON.parse(formData.get("StyleData"));
    const Meeting = Object.fromEntries(formData);
    delete Meeting.InfoData;
    delete Meeting.VisionData;
    delete Meeting.StyleData;

    const questionObject = { ...Vision.Data, ...Style.Data, ...Meeting}
    console.log("Questions:"+JSON.stringify(questionObject, null, 2));

    const time = String(formData.get("Desired time for your Meeting"));

    const meetingDate = new Date(String(formData.get("Meeting"))); // seperating the meeting date str into seperate date components
    let meetingMonth = meetingDate.getMonth()+1;
    let meetingDay = meetingDate.getDate();
    let meetingYear = meetingDate.getFullYear();
    const Date2 = new Date();
    let currentMonth = Date2.getMonth()+1;
    let currentDay = Date2.getDate();
    let currentYear = Date2.getFullYear();

    const updateUser = await prisma.codes.updateMany({ // updating the code query to not be used again
      where: {
        AccessCode: id_Key
      },
      data: {
        Status: false
      }
    });

    console.log("Access Code:", id_Key);
    console.log("Full Name:", fullName);
    console.log("Phone #:", phone);
    console.log("Email:", email);
    console.log("Business Name:", business);
    console.log("questions:", JSON.stringify(questionObject, null, 2));

    const createForm = await prisma.forms.create({ // creating a new query for the uploaded form data 
      data: {
        "accessCode": id_Key,
        "Name": fullName,
        "Phone": phone,
        "Email": email,
        "Business": business,
        "Questions": {
          ...questionObject
        },
        "status": true
      },
    })

    const client = await prisma.admissions.create({
      data: {
        "business": business,
        "email": email,
        "name": fullName,
        "phone": phone,
        "BookedDate": {
          "Month": meetingMonth,
          "Day": meetingDay,
          "Year": meetingYear
        },
        "MadeDate": {
          "Month": currentMonth,
          "Day": currentDay,
          "Year": currentYear
        },
        "status": "Pending",
        "BookedTime": time,
        "FormCode": id_Key
      }
    });

    return redirect("/route/commission-form")
  }

}


//----------------------------------------------------------------------------------------

export default function ContactForm() {
  const [infoData, setInfoData] = useState("");
  const [visionData, setVisionData] = useState("");
  const [styleData, setStyleData] = useState("");

  const { data, offDays, offweekDays } = useLoaderData();

  const section = useParams(); // Get the section from the URL params
  console.log(section.id)

  const navigate = useNavigate();

  const actionData = useActionData(); // Get the data returned from the action function

  useEffect(() => {
    const savedInfoData = localStorage.getItem("Info");
    if (savedInfoData) {
      setInfoData(savedInfoData);
    }
    const savedVisionData = localStorage.getItem("Vision");
    if (savedVisionData) {
      setVisionData(savedVisionData);
    }
    const savedStyleData = localStorage.getItem("Style");
    if (savedStyleData) {
      setStyleData(savedStyleData);
    }
  }, []);

  useEffect(() => {
    if (actionData?.error) {
      alert(actionData.error);
    }else if (actionData) {
      if(section.id == "section1"){
        console.log(JSON.stringify(actionData))
        // Save the returned action data to localStorage as a JSON string
        localStorage.setItem("Info", JSON.stringify(actionData));
        navigate("/commission/form/section2");
      }
      else if(section.id == "section2"){
        console.log(JSON.stringify(actionData))
        // Save the returned action data to localStorage as a JSON string
        localStorage.setItem("Vision", JSON.stringify(actionData));
        navigate("/commission/form/section3");
      }
      if(section.id == "section3"){
        console.log(JSON.stringify(actionData))
        // Save the returned action data to localStorage as a JSON string
        localStorage.setItem("Style", JSON.stringify(actionData));
        navigate("/commission/form/section4");
      }
    }
  }, [actionData]);


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
          
          {section.id === "section1" && (
            <Form className="paymentFormContainer" method="post">
            
              <div class="stepper-wrapper">
                <div class="stepper-item active">
                  <div class="step-counter"></div>
                  <div class="step-name">Personal Info</div>
                </div>
                <div class="stepper-item ">
                  <div class="step-counter"></div>
                  <div class="step-name">Your Vision</div>
                </div>
                <div class="stepper-item">
                  <div class="step-counter"></div>
                  <div class="step-name">Style</div>
                </div>
                <div class="stepper-item">
                  <div class="step-counter"></div>
                  <div class="step-name">Meeting</div>
                </div>
              </div>
              
              <div className="inputwrap">
                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> Access Code:
                  </label>
                  <input
                    autocomplete="off"
                    name="id_Key"
                    id="id_Key"
                    maxlength="6"
                    placeholder="######"
                    class="input"
                    type="text"
                    required
                  />
                </div>
                

                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> Business Name:
                  </label>
                  <input
                    name="business"
                    id="business"
                    class="input"
                    type="text"
                    required
                  />
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> First Name:
                  </label>
                  <input
                    name="fname"
                    id="fname"
                    class="input"
                    type="text"
                    required
                  />
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> Last Name:
                  </label>
                  <input
                    name="lname"
                    id="lname"
                    class="input"
                    type="text"
                    required
                  />
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> Phone #:
                  </label>
                  <input

                    name="phone"
                    id="phone"
                    class="input"
                    placeholder="(###) ###-####"
                    maxlength="14"
                    type="tel"
                    onChange={phoneFill}
                    required
                  />
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> Email:
                  </label>
                  <input

                    name="email"
                    id="email"
                    class="input"
                    type="email"
                    required
                  />
                </div>
              </div>
              <button class="cta" type="submit">
                <span class="span">NEXT</span>
                <span class="second">
                  <svg
                    width="50px"
                    height="20px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        class="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Form>

          )}
          {section.id === "section2" && (
            <Form className="paymentFormContainer" method="post">
            
              <div class="stepper-wrapper">
                <div class="stepper-item completed">
                  <div class="step-counter"></div>
                  <div class="step-name">Personal Info</div>
                </div>
                <div class="stepper-item active">
                  <div class="step-counter"></div>
                  <div class="step-name">Your Vision</div>
                </div>
                <div class="stepper-item">
                  <div class="step-counter"></div>
                  <div class="step-name">Style</div>
                </div>
                <div class="stepper-item">
                  <div class="step-counter"></div>
                  <div class="step-name">Meeting</div>
                </div>
              </div>
              
              <div className="inputwrap">
                <div class="inputGroup">
                  <label class="inputLabel">
                    <span style={{ color: "red" }}>*</span> Describe your business in
                    as much detail as possible:
                  </label>
                  <textarea
                    autocomplete="off"
                    name="Describe your business in as much detail as possible"
                    id="Question1"
                    class="biggerInput input"
                    type="text"
                    required
                  />
                </div>
                <div className="radiogroup">
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
                    <label class="inputLabel">Do you have a logo?</label>
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
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">Needed Features for you website:</label>
                  <textarea
                    autocomplete="off"
                    name="Needed Features for you website"
                    id="Question5"
                    class="biggerInput input"
                    type="text"
                  />
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">Who is your target audience:</label>
                  <input
                    autocomplete="off"
                    name="What is your target audience"
                    id="Question7"
                    class="input"
                    type="text"
                    style={{width: "100%"}}
                  />
                </div>
                <div class="inputGroup">
                  <label class="inputLabel">List any goals for your website:</label>
                  <textarea
                    autocomplete="off"
                    name="List any goals for your website"
                    id="Question8"
                    class="biggerInput input"
                    type="text"
                  />
                </div>
              </div>
              <button class="cta" type="submit">
                <span class="span">NEXT</span>
                <span class="second">
                  <svg
                    width="50px"
                    height="20px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        class="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Form>
          )}
          {section.id === "section3" && (
            <Form className="paymentFormContainer" method="post">
            
              <div class="stepper-wrapper">
                <div class="stepper-item completed">
                  <div class="step-counter"></div>
                  <div class="step-name">Personal Info</div>
                </div>
                <div class="stepper-item completed">
                  <div class="step-counter"></div>
                  <div class="step-name">Your Vision</div>
                </div>
                <div class="stepper-item active">
                  <div class="step-counter"></div>
                  <div class="step-name">Style</div>
                </div>
                <div class="stepper-item">
                  <div class="step-counter"></div>
                  <div class="step-name">Meeting</div>
                </div>
              </div>
              
              <div className="inputwrap">
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
                  <label class="inputLabel">
                    Any specific pages you want included (Extra pages you would like
                    that haven't been previously mentioned):
                  </label>
                  <textarea
                    autocomplete="off"
                    name="Any specific pages you want included"
                    id="Question6"
                    class="biggerInput input"
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
              </div>
              
              <button class="cta" type="submit">
                <span class="span">NEXT</span>
                <span class="second">
                  <svg
                    width="50px"
                    height="20px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        class="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Form>
          )}
          {section.id === "section4" && (
            <Form className="paymentFormContainer" method="post">
            
              <div class="stepper-wrapper">
                <div class="stepper-item completed">
                  <div class="step-counter"></div>
                  <div class="step-name">Personal Info</div>
                </div>
                <div class="stepper-item completed">
                  <div class="step-counter"></div>
                  <div class="step-name">Your Vision</div>
                </div>
                <div class="stepper-item completed">
                  <div class="step-counter"></div>
                  <div class="step-name">Style</div>
                </div>
                <div class="stepper-item active">
                  <div class="step-counter"></div>
                  <div class="step-name">Meeting</div>
                </div>
              </div>
              
              <div className="inputwrap">
                <div class="inputGroup">
                  <label class="inputLabel">
                    Book the next available date for your Consultation Meeting with
                    out Design Team (Held on Zoom):
                  </label>
                  <div className="meetingContainer">
                    <Calendar Data={data} Offdays={offDays} Offweekdays={offweekDays} id="Meeting"/>



                      <div class="radio-tile-group">
                        <div class="input-container">
                          <input class="radio-button" type="radio" name="Desired time for your Meeting"  value="9:00am"/>
                          <div class="radio-tile">
                            <label for="walk" class="radio-tile-label">9:00 am</label>
                          </div>
                        </div>

                        <div class="input-container">
                          <input class="radio-button" type="radio" name="Desired time for your Meeting" value="12:00pm"/>
                          <div class="radio-tile">
                            <label for="bike" class="radio-tile-label">12:00 pm</label>
                          </div>
                        </div>

                        <div class="input-container">
                          <input class="radio-button" type="radio" name="Desired time for your Meeting" value="3:00pm"/>
                          <div class="radio-tile">
                            <label for="drive" class="radio-tile-label">3:00 pm</label>
                          </div>
                        </div>
                      </div>


                  </div>
                </div>

                <div class="inputGroup">
                  <label class="inputLabel">
                    Is there any further information you would like to provide:
                  </label>
                  <textarea
                    autocomplete="off"
                    name="Is there any further information you would like to provide"
                    id="Question13"
                    class="biggerInput input"
                    type="text"
                  />
                </div>

                <div class="inputGroup">

                  <label class="inputLabel">
                    If you have a deadline and would like to pay for a priority fee
                    please select your deadline date:
                  </label>

                  <Calendar Data={data} Offdays={offDays} Offweekdays={offweekDays} id="Deadline"/>
                </div>
              </div>

              {/* Hidden input to send localStorage data */}
              <input type="hidden" name="InfoData" value={infoData} />
              <input type="hidden" name="VisionData" value={visionData} />
              <input type="hidden" name="StyleData" value={styleData} />

              <button class="cta" type="submit">
                <span class="span">FINISH</span>
                <span class="second">
                  <svg
                    width="50px"
                    height="20px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        class="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        class="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Form>
          )}


    </body>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }, {rel: 'stylesheet', href: CalendarCSS}, {rel: 'stylesheet', href: ColorPickerCSS}];
}
