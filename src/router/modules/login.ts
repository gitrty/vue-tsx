const meta = { auth: false }
const login = {
  path: '/login',
  name: 'login',
  component: () => import('@/page/login/index.tsx'),
  meta
}
export default login
