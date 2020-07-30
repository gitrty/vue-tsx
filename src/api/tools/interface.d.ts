export interface ToolSearchParams {
  request_url: string
}
export interface ToolSearchResult {
  data: SearchResultData
  error_code: 0 | -1 | 1
}
export interface SearchResultData {
  recommand_price: string
  title: string
  list: Array<SearchResultList>
}
interface SearchResultList {
  digital_price: string
  publish_time: string
  channel_value: string
}
