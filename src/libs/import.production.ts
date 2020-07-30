export default (file: string) => () => import('@/page/' + file)
