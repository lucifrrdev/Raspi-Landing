/**
 * Base OOP API Client using native fetch.
 * Handles generic configurations, headers, and error parsing.
 */
export class ApiClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  async request(endpoint, options = {}) {
    // Gunakan window.location.origin sebagai fallback jika baseURL bersifat relatif (seperti /api-proxy)
    const base = this.baseURL.startsWith('http') ? undefined : window.location.origin
    const url = new URL(`${this.baseURL}${endpoint}`, base)
    
    if (options.params) {
      Object.keys(options.params).forEach(key => 
        url.searchParams.append(key, options.params[key])
      )
    }

    const headers = {
      ...this.defaultHeaders,
      ...options.headers,
    }

    const response = await fetch(url.toString(), {
      ...options,
      headers,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  get(endpoint, params = {}, headers = {}) {
    return this.request(endpoint, { method: 'GET', params, headers })
  }
}
