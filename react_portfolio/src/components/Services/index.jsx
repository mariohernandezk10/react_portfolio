import React from 'react';


function Services() {
  return (
      <>
    <section class="services" id="services">
        <div class="container">
            <div class="section-heading">
                <h1>Services</h1>
                <h6>What I can do for you!</h6>
            </div>
            <div class="my-skills">
                <div class="skill" data-aos="fade-in" data-aos-delay="300">
                    <div class="icon-container">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h1>Web Design</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Libero, numquam nam beatae
                        dolorum sunt maiores praesentium doloribus.</p>
                </div>
                <div class="skill" data-aos="fade-in" data-aos-delay="600">
                    <div class="icon-container">
                        <i class="fas fa-code"></i>
                    </div>
                    <h1>Web Development</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Libero, numquam nam beatae
                        dolorum sunt maiores praesentium doloribus.</p>
                </div>
                <div class="skill" data-aos="fade-in" data-aos-delay="900">
                    <div class="icon-container">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                    <h1>Product Strategy</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Libero, numquam nam beatae
                        dolorum sunt maiores praesentium doloribus.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Services;