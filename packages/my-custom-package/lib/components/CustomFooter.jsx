import React from 'react';

const CustomFooter = props => {
  return (
    <div className="footer">
      <div className="col-md-4">
          <div>
          <br />
            Connect With Us:
          </div>
          <div>
          <a href="http://www.facebook.com/huttledotco"><i className="social-icons fa fa-facebook"></i></a>
          <a href="http://www.twitter.com/huttledotco"><i className="social-icons fa fa-twitter"></i></a>
          </div>
      </div>
      <div className="col-md-4">
        Made with ❤︎ in SF & Oakland <br />
          <a href="http://telescopeapp.org" target="_blank">Powered By Telescope</a> <br />
        <a href="/terms">Terms and Conditions & Privacy Policy</a>
      </div>
      <div className="col-md-4">
            <a href="/about">About</a> <br />
            <a href="#">Blog</a> <br />
            <a href="mailto:hello@huttle.co">Contact</a><br />
      </div>
    </div>

  )
}

export default CustomFooter;
