interface Id {
  id: string
}
interface CommonPagination<T> {
  current_page: number
  total: number
  data: T[]
}
interface LoginData {
  name: string
  token: string
}
interface MenuList {
  iClass: string
  spanText: string
  url: string
  children?: Array<any>
}