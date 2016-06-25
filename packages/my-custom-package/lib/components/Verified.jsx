import React from 'react';

const Verified = () => {
  return (
  <div className="verified">
  <section className="aboutPadding bg-light-gray">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="aboutWhatHead">What is a Verified User? </h2>
                <h3 className="aboutWhatSubhead">
                Verified users have been confirmed with Huttle to be who they are. Verified users can range from Huttle staff to thought leaders in their fields. <br />
                Note: Verification has no impact on someone's post score. It is simply a way for you to know that someone is truly who they claim to be.
                </h3>
            </div>
        </div>
    </div>
</section>
      <section className="aboutPadding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="aboutHeaderCopy">How Do I Know Someone Is Verified?</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-12">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                    </span>
                    <h3 className="aboutWhatSubhead iconSpace">
                    All verified users will have a green verified badge next to their name and bio.
                    </h3>
                </div>
            </div>
        </div>
    </section>
    <section className="aboutPadding bg-light-gray">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h2 className="aboutHeaderCopy">How Do I Get Verified?</h2>
              </div>
          </div>
          <div className="row text-center">
              <div className="col-lg-12">
                  <h3 className="aboutWhatSubhead">
                  If you would want to be a verified user, email us at <a href="mailto:hello@huttle.co">hello@huttle.co</a>. If you match our critieria to be verified, we'll add your badge ASAP.
                  </h3>
              </div>
          </div>
      </div>
  </section>


  </div>
  )
}

export default Verified;
