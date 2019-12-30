import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";

Vue.use(Router); //Esta funcion permite instalar plugins de la libreria

export default new Router({
  mode: "history",

  roues: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/error",
      name: "error",
      component: Error
    }
  ]
});
