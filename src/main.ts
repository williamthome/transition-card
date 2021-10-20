import App from './App.svelte'
// import App from './_backup/01/_v1-App.svelte'
// import App from './_backup/02/App.svelte'

const app = new App({
  target: document.body,
  hydrate: true,
})

export default app
