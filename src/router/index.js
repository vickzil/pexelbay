import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Photos from "../views/Photos";
import Illustration from "../views/Illustration";
import Explore from "../views/Explore";
import Vector from "../views/Vector";
import Single from "../views/Single";
import About from "../views/About";
import Legal from "../views/Legal";
import Privacy from "../views/Privacy";
import FourZeroFour from "../views/FourZeroFour";
import Category from "../views/Category";
import Search from "../views/Search";


Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  routes: [{
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Free stock photos & videos",
      },
    },
    {
      path: "/photos",
      name: "Photos",
      component: Photos,
      meta: {
        title: "Pexelbay  - Photos",
      },
    },
    {
      path: "/illustration",
      name: "Illustration",
      component: Illustration,
      meta: {
        title: "Pexelbay - Illustration",
      },
    },
    {
      path: "/explore",
      name: "Explore",
      component: Explore,
      meta: {
        title: "Pexelbay - Explore",
      },
    },
    {
      path: "/vector",
      name: "Vector",
      component: Vector,
      meta: {
        title: "Pexelbay - Vector",
      },
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        title: "Pexelbay - About Us",
      },
    },
    {
      path: "/legal",
      name: "Legal",
      component: Legal,
      meta: {
        title: "Pexelbay - Legal",
      },
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: Privacy,
      meta: {
        title: "Pexelbay - Privacy",
      },
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: {
        title: "Pexelbay - Search",
      },
    },
    {
      path: "/photos/:id",
      name: "Single",
      component: Single,
      props: true,
      meta: {
        title: "Pexelbay - Photo",
      },
    },
    {
      path: "/category/:id",
      name: "Category",
      component: Category,
      props: true,
      meta: {
        title: "Pexelbay - Photo",
      },
    },

    {
      path: "*",
      name: "FourZeroFour",
      component: FourZeroFour,
      meta: {
        title: "Pexelbay - 404 Page",
      },
    },
  ],
});