import { createRouter, createWebHistory } from "vue-router";
import vMain from "./../components/v-main";
import vUser from "./../components/v-user"
import vUsers from "./../components/v-users"
import vCreateUser from "./../components/v-create-user"

import vProfession from "./../components/v-profession"

let router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: vMain,
    },
    {
      path: "/create",
      name: "create",
      component: vCreateUser,
    },
    {
      path: "/user/:id",
      name: "user",
      component: vUser,
    },
    {
      path: "/users",
      name: "users",
      component: vUsers,
    },
    {
      path: "/professions",
      name: "professions",
      component: vProfession,
    },
  ],
});
export default router;
