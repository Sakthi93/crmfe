
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import SignUp from '../view/SignUp.vue';
import LogIn from '../view/LogIn.vue';
import Leads from '../dashboard/ShowLeads.vue';
import User from '../dashboard/UserDashboard.vue';



// import LogIn from '../views/LogIn.vue';

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard/user',
    name: 'Profile',
    component: User,
    // meta: {
    //   requireLogin:true
    // }
  },
  {
    path: '/dashboard/leads',
    name: 'Leads',
    component: Leads,
    // meta: {
    //   requireLogin:true
    // }
  },
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
