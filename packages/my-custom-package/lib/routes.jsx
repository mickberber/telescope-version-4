/*
A new custom route for our custom page.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import MyCustomPage from './components/MyCustomPage.jsx';
import About from './components/About.jsx';
import Terms from './components/Terms.jsx';
import Verified from './components/Verified.jsx';


Telescope.routes.add(
  {
    name:"custom-page",
    path:"/my-custom-route",
    component:MyCustomPage
  }
);

Telescope.routes.add(
  {
    name:"About",
    path:"/about",
    component:About
  }
);

Telescope.routes.add(
  {
    name:"Terms",
    path:"/terms",
    component:Terms
  }
);

Telescope.routes.add(
  {
    name:"Verified",
    path:"/verified",
    component:Verified
  }
);
