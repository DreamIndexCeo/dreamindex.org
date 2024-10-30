import NavBar, { links as navBarLinks } from "../components/index/NavBar";

import { useEffect, useRef } from "react";

import Footer, { links as footerLinks } from "../components/index/Footer";
import style from "../styles/index/home.css";
import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    {
      title: "DreamIndex - Web Development for Small Businesses", // Descriptive and targeted title
      description: "DreamIndex provides tailored web development, hosting, and SEO solutions for small businesses, empowering them to thrive online.", // Summary of what you offer
      keywords: "DreamIndex, Dream, Index, SEO, Web3, Web Development, Web Design, Development, Web Hosting, Small Business, Small Businesses, Business Development, Small Business Web Development, Small Business SEO, Small Business Hosting, Website Development, Web Development for Small Businesses, Web Solutions for Small Businesses, SEO for Small Business, Web Hosting for Small Business, Custom Web Development, Affordable Web Development, Web Development Services, Web Development Solutions, Web Design for Small Business, Digital Development, Online Business Solutions, Professional Web Development, Small Business Digital Presence, Business Web Development", // Your relevant keywords
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization", // Since this is a web development company
        name: "DreamIndex",
        description: "We specialize in web development, hosting, and SEO for small businesses, helping them grow and succeed online.",
        url: "https://www.dreamindex.org", // Add your website URL
        logo: "https://www.dreamindex.org/public/favicon.png", // Add your logo URL
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-475=422=5444", // Replace with your contact information
          contactType: "Customer Service",
        },
      }),
    },
  ];
};




export default function Index() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <body style={{ backgroundColor: "var(--color-black" }}>
      <NavBar />

      <div className="hero">
        <div className="MP4_Background">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="./vids/landing_page.mp4" type="video/mp4" ></source>
          </video>
        </div>
        
        <div className="context">
          <div className="text-container">
            <h1>Bring Your Business Online, Seamlessly</h1>

            <h4>Personalized websites, apps, and design services to reflect your vision and grow your brand.</h4>
          </div>

          <Link to='/consultation/payment'><button><h4>Get Started</h4></button></Link>
        </div>
        
      </div>

      <section style={{ backgroundColor: "var(--Background-1)" }}>
        <div className="about-us">
          <div className="title">
            <p className="section-title">ABOUT US</p>
            <h1 className="heading">Who We Are</h1>
          </div>

          <p className="desc">Dream Index is your trusted partner in creating a strong online presence, no matter the size of your business. We specialize in custom websites, mobile apps, graphic design, and reliable hosting services. Our mission is to empower business owners by handling their web development needs, so they can focus on their passion.</p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--Background-2)" }}>
        <div className="services">

          <div className="info">
            <div className="title">
              <p className="section-title">SERVICES</p>
              <h1 className="heading">Our Services</h1>
            </div>

            <p className="desc">At Dream Index, we offer a full range of digital solutions tailored to help your business thrive online. Our services include custom website development, mobile app creation, professional graphic design, and reliable 24/7 hosting. With our service assistance, we ensure your digital presence is always supported, allowing you to focus on your business while we handle the technical details</p>
            <Link to='/services'><button><h4>Explore Our Services</h4></button></Link>
          </div>

          <div className="card-container">
            <div className="card">
              <img src="./imgs/index/website.svg"/>
              <div>
                <h4 className="subject">Custom Websites</h4>
                <p>We create tailored, user-friendly websites that align with your business goals, ensuring your online presence is both functional and visually stunning.</p>
              </div>
            </div>

            <div className="card">
              <img src="./imgs/index/server.svg"/>
              <div>
                <h4 className="subject">Hosting Services</h4>
                <p>Reliable and secure hosting solutions with 24/7 uptime, ensuring your website stays accessible to customers at all times.</p>
              </div>
            </div>

            <div className="card">
              <img src="./imgs/index/design.svg"/>
              <div>
                <h4 className="subject">Graphic Designing</h4>
                <p>Our professional graphic design services help you visually communicate your brand's identity, from logos to full-scale branding projects.</p>
              </div>
            </div>

            <div className="card">
              <img src="./imgs/index/support.svg"/>
              <div>
                <h4 className="subject">Support Assistance</h4>
                <p>Our dedicated support team is available Monday through Friday to assist with any questions or concerns, ensuring smooth day-to-day operations.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section style={{ backgroundColor: "var(--Background-3)" }}>
        <div className="process">

          <div className="title">
            <p className="section-title">PROCESS</p>
            <h1 className="heading">How It Works</h1>
          </div>

          <div className="steps-container">
            <div className="step">
              <div>
                <div className="parent">
                  <img className="image1" src="./imgs/index/circle.svg" />
                  <img className="image2" src="./imgs/index/form.svg" />
                </div>
                <p>Step 1</p>
              </div>
              
              <div>
                <h4>Consultation Form </h4>
                <p>After paying the consultation, fill out a consultation form to share your vision.</p>
              </div>
            </div>

            <img src="./imgs/index/arrow.svg" className="arrow"/>

            <div className="step">
              <div>
                <div className="parent">
                  <img className="image1" src="./imgs/index/circle.svg" />
                  <img className="image2" src="./imgs/index/meeting.svg" />
                </div>
                <p>Step 2</p>
              </div>
              
              <div>
                <h4>Virtual Meeting & Deposit</h4>
                <p>Book a virtual meeting to finalize details before we begin designing. After the meeting, a deposit fee will be deducted from the overall site cost to start the development process.</p>
              </div>
            </div>

            <img src="./imgs/index/arrow.svg" className="arrow"/>

            <div className="step">
              <div>
                <div className="parent">
                  <img className="image1" src="./imgs/index/circle.svg" />
                  <img className="image2" src="./imgs/index/development.svg" />
                </div>
                <p>Step 3</p>
              </div>
              
              <div>
                <h4>Development & Updates</h4>
                <p>Our development process takes 2-5 weeks, with regular updates and design concepts for your approval.</p>
              </div>
            </div>

            <img src="./imgs/index/arrow.svg" className="arrow"/>

            <div className="step">
              <div>
                <div className="parent">
                  <img className="image1" src="./imgs/index/circle.svg" />
                  <img className="image2" src="./imgs/index/launch.svg" />
                </div>
                <p>Step 4</p>
              </div>
              
              <div>
                <h4>Payment Options & Launch</h4>
                <p>Once your site is ready, you can choose to pay the remaining balance in full or through monthly payments via <b style={{color: "var(--accent-color)"}}>Klarna</b> or our <b style={{color: "var(--accent-color)"}}>personal financing option with a 10% interest fee</b>. After payment, you’ll receive login access to our Cloud Portal to manage your website.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--Background-1)"}}>
        <div className="features">
            <div className="title">
              <p className="section-title">FEATURES</p>
              <h1 className="heading">Cloud Portal</h1>
              <h4>Manage your website with ease using our Cloud Portal. It includes tools like Website Manager, Dashboard Analytics, Web Editor, and more, giving you full control of your online presence.</h4>
            </div>

            <div className="container">
              <div className="list">
                <div className="item">
                  <img src="./imgs/index/site.svg"/>
                  <div>
                    <h4>Manage Website</h4>
                    <p>Available</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./imgs/index/analytics.svg"/>
                  <div>
                    <h4 style={{color: "var(--secondary-color)",}}>Dashboard Analytics</h4>
                    <p>Available</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./imgs/index/layout.svg"/>
                  <div>
                    <h4>Web Editor</h4>
                    <p>Coming Soon...</p>
                  </div>
                </div>
              </div>

              <img src="./imgs/index/cloud-portal.png" className="middle"/>

              <div className="list">
                <div className="item">
                  <img src="./imgs/index/diversification.svg"/>
                  <div>
                    <h4 style={{color: "var(--secondary-color)",}}>Subscription Management</h4>
                    <p>Available</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./imgs/index/online-order.svg"/>
                  <div>
                    <h4>Ecommerce Order Logs</h4>
                    <p>Coming Soon...</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./imgs/index/schedule.svg"/>
                  <div>
                    <h4 style={{color: "var(--secondary-color)",}}>Appointment Management</h4>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--Background-2)"}}>
        <div className="hosting-prices">
          <div className="title">
            <p className="section-title">PRICING</p>
            <h1 className="heading">Hosting Pricing</h1>
            <h4>*All Greater Options Include Pervious Version Features*</h4>
          </div>

          <div className="prices">
            <div className="container">
              <div>
                <h5>Basic</h5>
                <h4>$35</h4>
                <h5 style={{color: "#3F3E3E",}}>Month</h5>
              </div>

              <div className="list">
                <h6>Standard Performance</h6>
                <h6>24/7 Website Hosting</h6>
                <h6>Custom Domain Name</h6>
                <h6>Website security</h6>
                <h6>9/5 Live Support</h6>
              </div>

              <Link to='/hosting'><button>Get Started</button></Link>
            </div>

            <div className="container">
              <div>
                <h5>Advanced</h5>
                <h4>$50</h4>
                <h5 style={{color: "#3F3E3E",}}>Month</h5>
              </div>

              <div className="list">
                <h6 className="new">+ Web Editor Access</h6>
                <h6 className="new">+ 1 Database Storage </h6>
                <h6 className="new">+ Appointment Manager</h6>
                <h6 className="new">+ Ecommerce Order Logs</h6>
                <h6>Custom Domain Name</h6>
                <h6 className="new">+ Search Engine Submissions</h6>
              </div>

              <Link to='/hosting'><button>Get Started</button></Link>
            </div>

            <div className="container">
              <div>
                <h5>Pro +</h5>
                <h4>$75</h4>
                <h5 style={{color: "#3F3E3E",}}>Month</h5>
              </div>

              <div className="list">
                <h6 className="new">+ Increased Performance</h6>
                <h6 className="new">+ Account System Database</h6>
                <h6 className="new">+ Limitless Database Storage</h6>
                <h6 className="new">+ 24/7 Live Support</h6>
                <h6>Custom Domain Name</h6>
                <h6 className="new">+ SEO Optimization </h6>
              </div>

              <Link to='/hosting'><button>Get Started</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--Background-3)"}}>
        <div className="website-prices">
          <div className="title">
            <p className="section-title">PRICES</p>
            <h1 className="heading">Our Pricing</h1>
            <h4>We offer competitive monthly fees for our services, including flexible payment options. After a $150 deposit, you can choose to pay the remaining balance either upfront or through monthly installments with Klarna or our personal financing option at a 10% interest rate.</h4>
          </div>

          <div className="list">
            <div className="container">
              <div className="desc">
                <img src="./imgs/index/contact-website.svg"/>
                <h5>Contact Website</h5>
                <div>
                  <h3>$500</h3>
                  <p>For businesses or individuals trying to build a online presence for themselves.</p>
                </div>
              </div>

              <div className="web-features">
                <h4>Landing Page</h4>
                <h4>Email Form Contactor</h4>
                <h4>Extra Page of Choice</h4>
              </div>
            </div>

            <div className="container">
              <div className="desc">
                <img src="./imgs/index/appointment-website.svg"/>
                <h5>Appointment Website</h5>
                <div>
                  <h3>$800</h3>
                  <p>For Businesses or individuals that need a easier way of scheduling  appointments and handling payments</p>
                </div>
              </div>

              <div className="web-features">
                <h4>Contacting Website</h4>
                <h4>Custom Booking Forms</h4>
                <h4>Direct Payments </h4>
              </div>
            </div>

            <div className="container">
              <div className="desc">
                <img src="./imgs/index/shopping-website.svg"/>
                <h5>E-Commerce Website</h5>
                <div>
                  <h3>$1000</h3>
                  <p>For Businesses or individuals that need a easier way of selling theirs products to people around the world</p>
                </div>
              </div>

              <div className="web-features">
                <h4>Contacting Website</h4>
                <h4>Custom Online Store</h4>
                <h4>Direct Payments</h4>
              </div>
            </div>

            <div className="container">
              <div className="desc">
                <img src="./imgs/index/custom-website.svg"/>
                <h5>Custom Website</h5>
                <div className="group">
                  <h3>$500 - 10K</h3>
                  <p>Need a custom request the is not listed? We’ll hear out your million dollar idea and determine a price with you.</p>
                </div>
              </div>

              <div className="web-features">
                <h4></h4>
                <h4></h4>
                <h4></h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="starryBackground">
        <div className="contact">
          <h4>If you have any questions about our services, feel free to contact us anytime. We're here to help and provide the information you need to get started!</h4>
          <a href="mailto:Contact@dreamindex.org"><button>Contact Us</button></a>
        </div>
      </section>

      <Footer/>
    </body>
    
  );
}

// maps out all the links the components contains
export function links() {
  return [...navBarLinks(), ...footerLinks(),{ rel: "stylesheet", href: style }];
}
