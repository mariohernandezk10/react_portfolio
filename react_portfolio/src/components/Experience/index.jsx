import React from 'react';


function Experience() {
  return (
      <>
    <section className="experience" id="experience">
        <div className="container">
            <div className="section-heading">
                <h1>Experience</h1>
                <h6>Past and Current Jobs!</h6>
            </div>
            <div className="timeline" data-aos="fade-down" data-aos-delay="300">
                <ul>
                    <li className="date" data-date="2011 - Present">
                        <h1>Google</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Libero, numquam nam beatae
                            dolorum sunt maiores praesentium doloribus.</p>
                    </li>
                    <li className="date" data-date="2013 - Present">
                        <h1>Team Enterprise</h1>
                        <p>Promote beer brands at local bars
                            Engage consumers through sampling products during on and off premise events
                            Complete detailed recap of event and upload pictures of event
                            Facilitate effective communication between client, event manager, and promotional specialists</p>
                    </li>
                    <li className="date" data-date="2015 - Present">
                        <h1>Google</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Libero, numquam nam beatae
                            dolorum sunt maiores praesentium doloribus.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  );
}

export default Experience;