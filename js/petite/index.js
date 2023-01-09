import { createApp } from 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js'
import { slStore } from './shortlist-plus/components/Store.js'
import { GlobalHeart } from './shortlist-plus/components/GlobalHeart.js'
import { LocalHeart } from './shortlist-plus/components/LocalHeart.js'
import { LocalText } from './shortlist-plus/components/LocalText.js'
import { ShortListData } from './shortlist-plus/components/ShortListData.js'
import { ShortListReveal } from './shortlist-plus/components/ShortListReveal.js'

slStore.checkIfSession()

createApp({
  slStore,
  GlobalHeart,
  LocalHeart,
  LocalText,
  ShortListData,
  ShortListReveal
}).mount()
