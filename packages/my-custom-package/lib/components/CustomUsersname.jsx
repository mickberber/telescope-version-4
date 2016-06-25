import React, { PropTypes, Component } from 'react';

const CustomUsersname = ({user}) => {

  const userName = user.telescope.displayName;
  const bio = user.shortBio;
  const isVerified = user.isVerified;


  return(
  <div>
    <a className="users-name" href={Users.getProfileUrl(user)}>
      {
          bio === undefined
            ? userName
            : userName + ', ' + bio
      }
    </a>
      {
            isVerified === true
          ? <a href="/verified"><img className="verifiedBadge" src ="http://i.imgur.com/TNdJjZb.png" alt="Verified User"/></a>
          : null
      }
    </div>
  );
}

CustomUsersname.propTypes = {
  user: React.PropTypes.object.isRequired,
}

CustomUsersname.displayName = "CustomUsersname";

export default CustomUsersname;
