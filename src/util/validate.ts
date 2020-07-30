const validate = (regexp: RegExp) => (inner: string) =>
  inner ? regexp.test(inner) : false

// 验证是否为url
const urlReg = new RegExp(
  /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/
)
export const validateUrl = validate(urlReg)
