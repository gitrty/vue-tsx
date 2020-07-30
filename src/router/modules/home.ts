const meta = { auth: false }
const home = {
  path: '/home',
  component: () => import('@/layout'),
  meta,
  children: (pre => [
    {
      path: '/',
      name: `${pre}`,
      component: () => import('@/page/home/index.tsx'),
      meta: { title: 'home' },
    },
  ])('home'),
}
export default home
