export default {
  path: "/allclass", component: () => import('@/views/allclass/Allclass.vue'), children: [
    { path: "man", component: () => import('@/views/allclass/Allclass.vue') }
  ]
}