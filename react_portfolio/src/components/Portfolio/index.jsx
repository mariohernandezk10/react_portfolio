import React from 'react';
import Dog from '../../images/dog.png';
// import Myphoto from '../../images/Profile.jpg';
// import Myphoto from '../../images/Profile.jpg';


function Portfolio() {
  return (
      <>
    <section class="portfolio" id="portfolio">
        <div class="container">
            <div class="section-heading">
                <h1>Portfolio</h1>
                <h6>View Recent Work!</h6>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="300">
                    {/* <img src="./images/topTen.png" alt="image of top ten project"> */}
                </div>
                <div class="portfolio-description" data-aos="fade-left" data-aos-delay="600">
                    <h6>Web Development</h6>
                    <h1>Top Ten Best Songs</h1>
                    <p>
                        This website helps you find the best songs in 
                        a certain genres. 
                    </p>
                    <a href="https://ferdinadaguwa.github.io/musicTopTen/" class="cta" target="blank">Deploy</a>
                    <a href="https://github.com/FerdinadAguwa/musicTopTen" class="cta" target="blank">Github Repo</a>
                </div>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="900">
                    <h6>Web Development</h6>
                    <h1>Dog Blogs</h1>
                    <p>
                        Want to know the nearest dog park in any city? This site does that for you.
                    </p>
                    <a href="https://dog-blog-mvp.herokuapp.com/" class="cta" target="blank">Deploy</a>
                    <a href="https://github.com/maddycalvo1/project3" class="cta" target="blank">Github repo</a>
                </div>
                <div class="portfolio-img" data-aos="fade-left" data-aos-delay="1200">
                    <img src={Dog} alt="dog park website"/>
                </div>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="1500">
                    {/* <img src="./images/workDay.png" alt="tree"> */}
                </div>
                <div class="portfolio-description" data-aos="fade-left" data-aos-delay="1800">
                    <h6>Web Development</h6>
                    <h1>Work Day Scheduler</h1>
                    <p>
                        What's your schedule today? If you're still figuring that
                        out let me help you with this website.
                    </p>
                    <a href="https://mariohernandezk10.github.io/Homework_-5/" class="cta" target="blank">Deploy</a>
                    <a href="https://github.com/mariohernandezk10/Homework_-5" class="cta" target="blank">github repo</a>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Portfolio;