export default {
  path: "/productpage/:id", component: () => import('@/views/detail/Detail.vue'),
  meta: {
    keepAlive: false
  }
}