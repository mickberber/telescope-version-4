/*
This file centralizes all our custom component overrides.
*/

// Step 1: this is where you import your components
import ImprovedCustomLogo from "./components/ImprovedCustomLogo.jsx";
import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomFooter from "./components/CustomFooter.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import CustomUsersname from "./components/CustomUsersname.jsx";
import CustomUsersProfile from "./components/CustomUsersProfile.jsx";
import CustomUsersAvatar from "./components/CustomUsersAvatar.jsx";



// Step 2: this is where you bind the components to an existing component
Telescope.components.Logo = ImprovedCustomLogo;
Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.Footer = CustomFooter;
Telescope.components.Header = CustomHeader;
Telescope.components.UsersName = CustomUsersname;
Telescope.components.UsersProfile = CustomUsersProfile;
Telescope.components.UsersAvatar = CustomUsersAvatar;
