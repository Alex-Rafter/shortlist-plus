import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'
import { store } from './components/Store.js'
import { GlobalHeart } from './components/GlobalHeart.js'
import { LocalHeart } from './components/LocalHeart.js'
import { LocalText } from './components/LocalText.js'
import { ShortListData } from './components/ShortListData.js'
import { ShortListReveal } from './components/ShortListReveal.js'

store.checkIfSession()

createApp({
  store,
  GlobalHeart,
  LocalHeart,
  LocalText,
  ShortListData,
  ShortListReveal
}).mount()
