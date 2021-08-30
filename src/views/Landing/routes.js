export default [
  {
    name: "index",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "./pages/index.vue"),
  },
];
