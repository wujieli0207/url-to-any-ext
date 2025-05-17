import { Message } from './popup/App'

export default defineContentScript({
  matches: ['https://*/*'],
  cssInjectionMode: 'ui',
  main(ctx) {
    browser.runtime.onMessage.addListener(async function (message: Message) {
      const { type } = message

      const urltoany = `https://www.urltoany.com/${type}?url=${window.location.href}`
      window.open(urltoany, '_blank')
    })
  },
})
