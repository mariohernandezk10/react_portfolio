import React from 'react';


function Contact() {
  return (
      <>
    <section className="contact" id="contact">
        <div className="container">
            <div className="section-heading">
                <h1>Contact</h1>
                <h6>Lets Work Together</h6>
            </div>
            <form action="" data-aos="fade-up" data-aos-delay="300">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name..." required/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email..." required/>
                <label for="service">Services</label>
                <select name="services" id="service">
                    <option value="">Web Design</option>
                    <option value="">Web Development</option>
                    <option value="">Web Design/Development</option>
                </select>
                <label for="subject">Subject:</label>
                <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                <input type="submit" value="Submit"/>

            </form>
        </div>
    </section>
    </>
  );
}

export default Contact;