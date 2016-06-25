/*
Let's assign a color to each post (why? cause we want to, that's why).
We'll do that by adding a custom field to the Posts collection.
Note that this requires our custom package to depend on nova:posts and nova:users.
*/

/* Posts.addField(
  {
    fieldName: 'color',
    fieldSchema: {
      type: String,
      control: "select", // use a select form control
      optional: true, // this field is not required
      insertableIf: Users.is.memberOrAdmin, // insertable by regular logged in users and admins
      editableIf: Users.is.ownerOrAdmin, // editable by the post's owner or admins
      autoform: {
        options: function () { // options for the select form control
          return [
            {value: "white", label: "White"},
            {value: "yellow", label: "Yellow"},
            {value: "blue", label: "Blue"},
            {value: "red", label: "Red"},
            {value: "green", label: "Green"}
          ];
        }
      },
      publish: true // make that field public and send it to the client
    }
  }
); */

// adding a field to users table

Users.addField(
  {
    fieldName: 'shortBio',
    fieldSchema: {
      type: String,
      publish: true,
      profile: true,
      optional: true,
      control: "text",
      //label: "Tell us in 50 characters or less what you do (this will appear next to your name):",
      max: 50,
      insertableIf: Users.is.ownerOrAdmin,
      editableIf: Users.is.ownerOrAdmin,
      // autoform: {
      //   rows: 5
      // }
    }
  }
);

Users.addField(
  {
    fieldName: 'isVerified',
    fieldSchema: {
      type: Boolean,
      //label: "Verified",
      control: "checkbox",
      optional: true,
      publish: true,
      profile: true,
      insertableIf: Users.is.admin,
      editableIf: Users.is.admin,
    }
  }
);

/*
The main post list view uses a special object to determine which fields to publish,
so we also add our new field to that object:
*/

import PublicationUtils from 'meteor/utilities:smart-publications';

PublicationUtils.addToFields(Posts.publishedFields.list, ["color"]);
PublicationUtils.addToFields(Users.publishedFields.list, ["shortBio", "isVerified"]);
