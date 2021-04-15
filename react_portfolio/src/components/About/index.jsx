import React from 'react';
import Myphoto from '../../images/Profile.jpg';


function About() {
  return (
      <>
    <section className="about" id="about">
        <div className="container">
            <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
                <img src={Myphoto} alt="Mario"/>
            </div>
            <div className="about-details" data-aos="fade-left" data-aos-delay="600">
                <div className="about-heading">
                    <h1>About</h1>
                    <h6>Myself</h6>
                </div>
                <p>Futute Full Stack Developr and a graduate of the University of Texas at Austin
                    Coding Bootcamp.
                    Bachelor's in Kinesiology and graduated summa cum laude. I am a life long learner and dedicating my
                    time to becoming
                    the best full stack developor I can be. My expertise is in JavaScript, React.js, React-Native, HTML5,
                    CSS, Bootstrap, and JQuery.
                    I am known for my dedication and discipline in my work. I love working with others,
                    but I also think it's important to work alone. I been known as
                    both a team player and a leader! I am committed to making the user experience simple and easy.</p>
                <div className="social-media">
                    <ul className="nav-list">
                        <li>
                            <a href="https://www.facebook.com/mario.hernandez.79" className="icon-link" target="blank"><i className="fab fa-facebook-square"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/mariohernandezk10" className="icon-link" target="blank"><i className="fab fa-github-square"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mario-hernandez-b46329116/" className="icon-link" target="blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    </>
  );
}

export default About;