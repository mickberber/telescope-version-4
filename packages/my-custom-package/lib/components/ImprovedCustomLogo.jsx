/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way.
*/
import React from 'react';
import { IndexLink } from 'react-router';

const ImprovedCustomLogo = ({logoUrl, siteTitle}) => {
  if (logoUrl) {
    return (
      <h1 className="logo-image ">
        <IndexLink to={{pathname: "/"}}>
          <img src={logoUrl} alt={siteTitle} style={{maxWidth: "100px", maxHeight: "100px"}} />
        </IndexLink>
      </h1>
    )
  } else {
    return (
      <h1 className="logo-text">
        <IndexLink to={{pathname: "/"}}>{siteTitle}</IndexLink>
      </h1>
    )
  }
}

ImprovedCustomLogo.displayName = "ImprovedCustomLogo";

module.exports = ImprovedCustomLogo;
