import {
    createApp,
    reactive
  } from 'https://unpkg.com/petite-vue?module'
  import {store} from './shortlist-components/Store.js'    
  import {GlobalHeart} from './shortlist-components/GlobalHeart.js'
  import {LocalHeart} from './shortlist-components/LocalHeart.js'
  import {LocalText} from './shortlist-components/LocalText.js'
  import {ShortListData} from './shortlist-components/ShortListData.js'
import { ShortListReveal } from './shortlist-components/ShortListReveal.js'
  

store.checkIfSession()
  
  createApp({
    store,
GlobalHeart,
LocalHeart,
LocalText,
ShortListData,
ShortListReveal,
  }).mount("#shortlist")