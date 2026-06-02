const startAt = Date.now()
let count = 0
// eslint-disable-next-line no-undef
export default defineEventHandler(() => ({
  pageview: count++,
  startAt
}))
