import React from "react"

const toQueryString = (params: { [k: string]: any }): string =>
  Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&")

export const ShareNengoButton: React.SFC<{
  text?: string
  url?: string
}> = params => (
  <a
    className="twitter-share-button"
    href={`https://twitter.com/intent/tweet?${toQueryString(params)}`}
    data-size="large"
  >
    Tweet
  </a>
)
