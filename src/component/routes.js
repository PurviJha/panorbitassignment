import Profile from './profile'
import Posts from './post'
import Gallary from './gallary'
import Todo from './todo'


 var routes=[
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        layout: "/lay"
      },
      {
        path: "/posts",
        name: "Posts",
        component: Posts,
        layout: "/lay"
      },
      {
        path: "/gallary",
        name: "Gallary",
        component: Gallary,
        layout: "/lay"
      },
      {
        path: "/todo",
        name: "Todo",
        component: Todo,
        layout: "/lay"
      },
     
 ]
 export default routes