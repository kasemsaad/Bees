import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Search from '../views/search.vue';
import Certificate from '../views/certificate.vue';
import Login from '../views/login.vue';
import List from '../views/list.vue';
import AddTraining from '../views/addTraining.vue';
import EditTraining from '../views/editTraining.vue';
import { useAuthStore } from '../store/auth'; // Adjust the path based on your folder structure

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/list',
        name: 'list',
        component: List,
        meta: { requiresAuth: true }    },
    {
        path: '/add',
        name: 'add',
        component: AddTraining,
        meta: { requiresAuth: true }    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditTraining,
        meta: { requiresAuth: true }    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        meta: { requiresAuth: false }    },
    {
        path: '/certificate/:id',
        name: 'certificate',
        component: Certificate,
        meta: { requiresAuth: false }    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore(); // Access your authentication store
    const isAuthenticated = authStore.isAuthenticated; // Replace with your auth logic
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      // Redirect to login if not authenticated
      next({ name: 'Login', query: { redirect: to.fullPath } });
    } else {
      // Proceed to the route
      next();
    }
  });
export default router;
