import layout from "../Layout";

export default [
  {
    name: "Dashboard",
    path: "/dashboard",
    meta: { layout: layout },
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "./pages/index.vue"),
  },
];
