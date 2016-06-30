import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { ListContainer } from "meteor/utilities:react-list-container";

const CustomUsersProfile = ({user, currentUser}) => {

  const twitterName = Users.getTwitterName(user);

  const terms = {view:"userPosts", userId: user._id};
  const {selector, options} = Posts.parameters.get(terms);

  return (
  <div className="page users-profile">
      <Telescope.components.HeadTags url={Users.getProfileUrl(user, true)} title={Users.getDisplayName(user)} description={user.telescope.bio} />
    <div className="col-md-4">
      <Telescope.components.UsersAvatar user={user} size="xlarge"/>
    </div>
    <div className="col-md-4">
      <h2>{Users.getDisplayName(user)}</h2>
      <p><i className="fa fa-arrow-circle-o-up fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{user.telescope.karma}</p>
      <p><strong>Submitted Posts:</strong>&nbsp;&nbsp;&nbsp;{user.telescope.postCount}</p>
      <p><strong>Submitted Comments:</strong>&nbsp;&nbsp;&nbsp;{user.telescope.commentCount}</p>
    </div>
    <div className="col-md-4">
    {user.shortBio ? <p><strong>About Me:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.shortBio}</p> : null }
      {user.location ? <p><strong>Lives In:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.location}</p> : null }
      {user.expertise ? <p><strong>Is An Expert On:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.expertise}</p> : null }
      {user.previousExperience ? <p><strong>Previous:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.previousExperience}</p> : null }
      {user.education ? <p><strong>Education:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.education}</p> : null }
      {user.telescope.website ? <a href={user.telescope.website}>{user.telescope.website}</a> : null }
    </div>
    <h3><FormattedMessage id="users.posts"/></h3>
    <ListContainer
      collection={Posts}
      publication="posts.list"
      terms={terms}
      selector={selector}
      options={options}
      joins={Posts.getJoins()}
      cacheSubscription={false}
      component={Telescope.components.PostsList}
      componentProps={{showHeader: false}}
      listId="posts.list.user"
    />
  </div>
  )
}

CustomUsersProfile.propTypes = {
  user: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object
}

CustomUsersProfile.displayName = "CustomUsersProfile";

module.exports = CustomUsersProfile;
