import React from 'react';


function Services() {
  return (
      <>
    <section className="services" id="services">
        <div className="container">
            <div className="section-heading">
                <h1>Services</h1>
                <h6>What I can do for you!</h6>
            </div>
            <div className="my-skills">
                <div className="skill" data-aos="fade-in" data-aos-delay="300">
                    <div className="icon-container">
                        <i className="fas fa-layer-group"></i>
                    </div>
                    <h1>Web Design</h1>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Libero, numquam nam beatae
                        dolorum sunt maiores praesentium doloribus.</p> */}
                </div>
                <div className="skill" data-aos="fade-in" data-aos-delay="600">
                    <div className="icon-container">
                        <i className="fas fa-code"></i>
                    </div>
                    <h1>Web Development</h1>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Libero, numquam nam beatae
                        dolorum sunt maiores praesentium doloribus.</p> */}
                </div>
                <div className="skill" data-aos="fade-in" data-aos-delay="900">
                    <div className="icon-container">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                    <h1>Product Strategy</h1>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Libero, numquam nam beatae
                        dolorum sunt maiores praesentium doloribus.</p> */}
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Services;