const meta = { auth: false }
const demo = {
  path: '/demo',
  component: () => import('@/layout'),
  meta,
  children: (pre => [
    {
      path: '/',
      name: `${pre}`,
      component: () => import('@/page/demo/index.vue'),
      meta: { title: 'demo' }
    }
  ])('demo')
}
export default demo
