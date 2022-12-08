import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mzlhgcr', 'template_fahdkqm', form.current, 'T5MvsJ7_r93ynf_yk')
            .then((result) => {
                console.log("Email sent successfully!");
            }, (error) => {
                console.log("Email NOT sent succesfully!");
            });

    }

    return (
        <div>
            <section>
                <div className='card-container'>
                    <h2 className='greeting' style={{ color: 'antiquewhite' }}>Contact Me!</h2>
                    <form ref={form} onSubmit={sendEmail} className='form-container custom-card flex-center dir-column'>
                        <input type="text" placeholder='Full Name' name='user_name' required />
                        <input type="email" placeholder='Email' name='user_email' required />
                        <input type="text" placeholder='Subject' name='subject' required />
                        <textarea name="message" cols="30" rows="10" placeholder='Enter your message here...'></textarea>
                        <button className='btn btn-primary' type='submit'>Send Message</button>
                    </form>
                </div>

            </section>
        </div>
    )
}