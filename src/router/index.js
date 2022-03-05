import VueRouter from "vue-router";

import HomePage from "@/views/HomePage.vue";
import MoviesPage from "@/views/MoviesPage.vue";
import MoviePage from "@/views/MoviePage.vue";
import ScreeningsPage from "@/views/ScreeningsPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";
import AuthPage from "@/views/AuthPage.vue";
import LogInFormPage from "@/views/LogInFormPage.vue";
import RegisterFormPage from "@/views/RegisterFormPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/movies",
    name: "Movies",
    component: MoviesPage,
  },
  {
    path: "/movies/:movieId",
    name: "Movie",
    component: MoviePage,
    props: true,
  },
  {
    path: "/screenings",
    name: "Screenings",
    component: ScreeningsPage,
  },
  {
    path: "/auth",
    component: AuthPage,
    children: [
      {
        path: "/register",
        name: "Register",
        component: RegisterFormPage,
      },
      {
        path: "/login",
        name: "Login",
        component: LogInFormPage,
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUsPage,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
