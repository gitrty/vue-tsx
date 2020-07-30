const meta = { auth: false }
const about = {
  path: '/about',
  component: () => import('@/layout'),
  meta,
  children: (pre => [
    {
      path: '/',
      name: `${pre}`,
      component: () => import('@/page/about/index.tsx'),
      meta: { title: 'about' },
    },
  ])('about'),
}
export default about
