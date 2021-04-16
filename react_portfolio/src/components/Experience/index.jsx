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
                    <li className="date" data-date="2021 - Present">
                        <h1>Shepperd Construction</h1>
                        <p>Supervise groups of construction workers <br/>
                            Create a log of everything that was done and needs to be done <br/>
                            Pick up material and supplies</p>
                    </li>
                    <li className="date" data-date="2016 - Present">
                        <h1>Team Enterprise</h1>
                        <p>Promote beer brands at local bars<br/>
                            Engage consumers through sampling products during on and off premise events<br/>
                            Complete detailed recap of event and upload pictures of event<br/>
                            Facilitate effective communication between client, event manager, and promotional specialists</p>
                    </li>
                    <li className="date" data-date="2020 - 2021">
                        <h1>Electrical Apprentice</h1>
                        <p>Support electrician in the maintenance, operation, and repair of electrical systems<br/>
                            Bend conduit and mount electrical boxes<br/>
                            Install light fixtures and outlets</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  );
}

export default Experience;