// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null, // Retrieve token from localStorage
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('token', token); // Save token to localStorage
    },
    clearToken() {
      this.token = null;
      localStorage.removeItem('token'); // Remove token from localStorage
    },
  },
});
