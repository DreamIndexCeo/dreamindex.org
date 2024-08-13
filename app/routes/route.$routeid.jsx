import { useNavigate, useParams, useLoaderData } from "@remix-run/react";
import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import styles from "../styles/services/loader.css";
import { FormLink } from "../server/SendEmail";
import { useState, useEffect } from "react";
import { parse } from 'cookie';


export function links() {
    return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}

  
export async function loader({ params, request  }){
    //accessing the current cookies
    const cookieHeader = request.headers.get('Cookie');
    const cookies = cookieHeader ? parse(cookieHeader) : {};
    const email = cookies.email;

    //reading the params data to send a email
    if (params.routeid == "commission-mail"){
        FormLink(email);
    }
    

    
    return ({ok: true});
}

export default function route(){
    const navigate = useNavigate();
    const taskid  = useParams();

    useEffect(() => {
        setTimeout(() => {
            if (taskid.routeid == "commission-mail"){
                navigate("/commission/success")
            } else if (taskid.routeid == "commission-form"){
                navigate("/commission/submitted")
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