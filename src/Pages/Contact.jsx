import React, { useEffect, useState, useRef } from 'react'
import contact from "../Assets/contact.png";
import emailjs from '@emailjs/browser';


const Contact = () => {
    // Window Scroll To Top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [1])

    // useState
    const [userData, setUserData] = useState({
        email_id: "",
        name: "",
        subject: "",
        Enquiry: ""
    })


    const form = useRef();


    // Email Js 
    const sendEmail = (e) => {  
        e.preventDefault();

        emailjs.sendForm('service_3bp80cf', 'template_y3qyv2b', form.current, 'y7g3Qnf5_aiwwCiCj')
            .then((result) => {
                e.preventDefault()
                const { name, email_id, subject, Enquiry } = userData
                const option = fetch('https://omniuser-85aa5-default-rtdb.firebaseio.com/omniGridUser.json',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name,
                            email_id,
                            subject,
                            Enquiry
                        })
                    })
                if (option) {
                    alert("Email Send Successfully")
                }
                else {
                    alert("Error In Database")
                }
            }, (error) => {
                alert("Error Occured")
            }).finally(() => {
                window.location.reload()
            })
    };


    return (
        <div>
            <div className="contact-main">
                <form ref={form} className="contact-form" onSubmit={sendEmail} method='POST'>
                    <h3 className="contact-title" data-aos="zoom-in" data-aos-delay="100">Contact us</h3>
                    <div className="contact-div">
                        <h4 data-aos="fade-right" data-aos-delay="100" className="contact-sub-title">Email </h4>
                        <input
                            onChange={(e) => setUserData({ ...userData, email_id: e.target.value })}
                            data-aos="fade-left" data-aos-delay="100"
                            type="text"
                            placeholder="Input Email Here"
                            className="contact-input"
                            name='user_email'
                            value={userData.email_id}
                        ></input>
                    </div>
                    <div className="contact-div">
                        <h4 className="contact-sub-title" data-aos="fade-right" data-aos-delay="100">Name </h4>
                        <input
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            data-aos="fade-left" data-aos-delay="100"
                            type="text"
                            placeholder="Input Name Here"
                            className="contact-input"
                            name='user_name'
                            value={userData.name}
                        ></input>
                    </div>
                    <div className="contact-div">
                        <h4 data-aos="fade-right" data-aos-delay="100" className="contact-sub-title">Subject</h4>
                        <input
                            onChange={(e) => setUserData({ ...userData, subject: e.target.value })}
                            data-aos="fade-left" data-aos-delay="100"
                            type="text"
                            placeholder="Input Subject Here"
                            className="contact-input"
                            name='subject'
                            value={userData.subject}
                        ></input>
                    </div>
                    <div className="contact-div">
                        <h4 data-aos="fade-right" data-aos-delay="100" className="contact-sub-title">Enquiry</h4>
                        <input
                            onChange={(e) => setUserData({ ...userData, Enquiry: e.target.value })}
                            data-aos="fade-left" data-aos-delay="100"
                            type="text"
                            placeholder="Input Description Here"
                            className="description"
                            name='message'
                            value={userData.Enquiry}
                        ></input>
                    </div>
                    <button data-aos="zoom-in" data-aos-delay="100" className="contact-btn">Send enquiry</button>
                </form>
                <img data-aos="zoom-in" data-aos-delay="100" src={contact} className="card-img"></img>
            </div>
        </div>
    )
}

export default Contact