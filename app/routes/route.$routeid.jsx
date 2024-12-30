import { useNavigate, useParams, useLoaderData, useFetcher } from "@remix-run/react";
import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import styles from "../styles/services/loader.css";
import { FormLink } from "../utils/SendEmail";
import { NewClient } from "../utils/DINA";
import { useState, useEffect } from "react";
import { parse } from 'cookie';
import { createCustomer } from "../utils/Stripe/Customers";
import { depositInvoice } from "../utils/Stripe/Invoice";




export function links() {
    return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}

  
export async function loader({ params, request  }){
    const url = new URL(request.url)
    //accessing the current cookies
    const cookieHeader = request.headers.get('Cookie');
    const cookies = cookieHeader ? parse(cookieHeader) : {};
    const email = cookies.email;
    const business = cookies.business;

    //reading the params data to send a email
    if (params.routeid == "consultation-mail"){
        FormLink(email);
    }
    else if(params.routeid == "consultation-form"){
        NewClient(business);
    }
    else if(params.routeid == "deposit"){
        //get database id from url
        const id = url.searchParams.get('id');
        console.log(id)
        // fetch stripe customer id 
        const customerID = await createCustomer(id);
        console.log(customerID);
        // fetch stripe Invoice id (Deposit Fee)
        const invoiceID = await depositInvoice(customerID);
        console.log(invoiceID);

        return({item: invoiceID})
    }
    

    
    return ({item: true});
}

export default function route(){
    const navigate = useNavigate();
    const taskid  = useParams();
    const { item } = useLoaderData();
    const fetcher = useFetcher();


    useEffect(() => {
        setTimeout(async() => {
            if (taskid.routeid == "consultation-mail"){
                navigate("/consultation/success");
            } else if (taskid.routeid == "consultation-form"){
                localStorage.clear();
                navigate("/consultation/submitted");
            } else if (taskid.routeid == "deposit"){
                navigate(`/deposit/payment/${item}`);
            }
        }, 2500);
    }, []);

    return(
        <>

            <div className="container">
                <div className="loader">
                    <div data-glitch="Loading..." className="glitch">Loading...</div>
                </div>
            </div> 
        </>
    )
}