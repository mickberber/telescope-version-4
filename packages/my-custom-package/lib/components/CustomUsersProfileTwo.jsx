import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { ListContainer } from "meteor/utilities:react-list-container";
import TabContent from "./TabContent";
import TabPanel from "./TabPanel";

const CustomUsersProfile = ({user, currentUser}) => {

  const twitterName = Users.getTwitterName(user);

  const terms = {view:"userPosts", userId: user._id};
  const {selector, options} = Posts.parameters.get(terms);

  console.log(user.telescope.upvotedComments);
  console.log(user.telescope.upvotedPosts);

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
    <TabContent context="invite-tabs" tabs={ this.tabs }>
       <TabPanel active={ true } id="open-invitations">
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
         </TabPanel>
       <TabPanel active={ false } id="closed-invitations">
         <Table context="closed-invitations" columns={ this.data.closedInvitations.columns }>
           { this.data.closedInvitations.data.map( ( invite ) => {
             return <ClosedInvitation key={ invite._id } invite={ invite } />;
           })}
         </Table>
       </TabPanel>
     </TabContent>
  </div>
  )
}

CustomUsersProfile.propTypes = {
  user: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object
}

CustomUsersProfile.displayName = "CustomUsersProfile";

module.exports = CustomUsersProfile;
