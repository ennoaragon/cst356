import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Instructor from '@/components/Instructor';
import Student from '@/components/Student';
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/instructors',
      component: Instructor
    },
    {
      path: '/students',
      component: Student
    },
    {
      path: '/login',
      component: Login
    }
  ]
})