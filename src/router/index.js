import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Search from '../views/search.vue';
import Certificate from '../views/certificate.vue';
import Login from '../views/login.vue';
import List from '../views/list.vue';
import AddTraining from '../views/addTraining.vue';
import EditTraining from '../views/editTraining.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: false }, // No authentication required for Home

    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false }, // No authentication required for Home

    },
    {
        path: '/list',
        name: 'list',
        component: List,
        meta: { requiresAuth: false }, 
    },
    {
        path: '/add',
        name: 'add',
        component: AddTraining,
        meta: { requiresAuth: false }, 
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditTraining,
        meta: { requiresAuth: false }, 
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        meta: { requiresAuth: false }, 
    },
    {
        path: '/certificate/:id',
        name: 'certificate',
        component: Certificate,
        meta: { requiresAuth: false }, 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
// Global before guard
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated (e.g., token exists)
    
    // Check if the route requires authentication
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'login' }); // Redirect to login page if not authenticated
    } else {
      next(); // Proceed to the route
    }
  });
export default router;
