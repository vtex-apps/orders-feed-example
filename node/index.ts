import { LRUCache, Service } from '@vtex/api'

import { allStates } from './middlewares/allStates'
import { someStates } from './middlewares/someStates'

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, unknown>({ max: 5000 })
metrics.trackCache('status', memoryCache)

declare global {
  interface StatusChangeContext {
    body: {
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  events: {
    allStates,
    someStates,
  },
})
