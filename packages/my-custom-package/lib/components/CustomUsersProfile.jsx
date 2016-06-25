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
    <div className="profileSideBySide">
      <Telescope.components.UsersAvatar user={user} size="xlarge"/>
    </div>
    <div className="profileSideBySide">
      <h2>{Users.getDisplayName(user)}</h2>
      <p>{user.shortBio}</p>
      <p>{user.telescope.bio}</p>
      {twitterName ? <a href={"http://twitter.com/" + twitterName}>@{twitterName}</a> : null }
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
