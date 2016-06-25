import React from 'react';

const About = () => {
  return (
    <div className="about">
    <section className="aboutPadding bg-light-gray">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h2 className="aboutWhatHead">What are we building?</h2>
                  <h3 className="aboutWhatSubhead">Huttle is a community where anyone can seek guidance and provide it. That means anyone can seek someone to help them find a job or how to live a more fulfilling life, and there will be a mentor ready to help.</h3>
              </div>
          </div>
      </div>
  </section>
        <section className="aboutPadding">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <h2 className="aboutWhatHead">Our Mission</h2>
                  </div>
              </div>
              <div className="row text-center">
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="missionSubheadCopy">Discuss</h4>
                      <p className="missionCopy">
                      Answer, discuss, and vote up conversations you find helpful
                      </p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-tree fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="missionSubheadCopy">Grow</h4>
                      <p className="missionCopy">
                        The best conversations rise to the top giving you an easy way to find advice that will help you grow.
                      </p>
                  </div>
                  <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                          <i className="fa fa-circle fa-stack-2x text-primary"></i>
                          <i className="fa fa-thumbs-up  fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="missionSubheadCopy">Succeed</h4>
                      <p className="missionCopy">
                        Go forth and find success and be sure to come back to help others in need.
                      </p>
                  </div>
              </div>
          </div>
      </section>
      <section className="bg-light-gray aboutPadding">
       <div className="container">
           <div className="row">
               <div className="col-lg-12 text-center">
                   <h2 className="aboutWhatHead">Who We Are</h2>
               </div>
           </div>
           <div className="row">
               <div className="col-sm-6">
                   <div className="team-member">
                       <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/07d/050/0ce39d1.jpg" className="img-responsive img-circle" alt="" />
                       <h4 className="missionSubheadCopy">Chris Tung</h4>
                       <p className="text-muted">Founder</p>
                       <p className="large text-muted">Chris has worked as a digital marketer at Quidsi (acquired by Amazon), Bonobos, ComiXology (acquired by Amazon), and Imgur.</p>
                       <p className="large text-muted">Proudest Mentoring Moment: Helping a complete stranger on Reddit negotiate a compensation package that was 30% more than the initial offer. </p>
                       <ul className="list-inline social-buttons">
                           <li><a href="https://twitter.com/chptung"><i className="fa fa-twitter"></i></a>
                           </li>
                           <li><a href="https://www.facebook.com/chptung"><i className="fa fa-facebook"></i></a>
                           </li>
                           <li><a href="https://www.linkedin.com/in/christopher-tung-762a2514
"><i className="fa fa-linkedin"></i></a>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <section className="aboutPadding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                  <h2 className="aboutWhatHead">We've Helped Unlock Opportunities At...</h2>
              </div>
          </div>
          <div className="row">
              <div className="col-md-4 col-md-offset-2">
                      <img src="http://i.imgur.com/r5CcaK4.png" className="img-responsive img-centered fade companyLogo" alt="" />
              </div>
              <div className="col-md-4">
                      <img src="http://i.imgur.com/sSAuQaB.png" className="img-responsive img-centered fade companyLogo" alt="" />
              </div>
          </div>
          <div className="row">
              <div className="col-md-4">
                      <img src="http://i.imgur.com/L32deDB.png" className="img-responsive img-centered fade companyLogo" alt="" />
              </div>
               <div className="col-md-4">
                      <img src="http://i.imgur.com/nNBqtOT.png" className="img-responsive img-centered fade companyLogo" alt="" />
              </div>
              <div className="col-md-4">
                      <img src="http://i.imgur.com/fhYg1va.png" className="img-responsive img-centered fade companyLogo" alt="" />
              </div>
          </div>
      </div>
   </section>
    </div>
  )
}

export default About;
