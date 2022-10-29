<script type="module">

import { createApp, reactive } from "https://unpkg.com/petite-vue?module";
import { store } from "/src/js/shortlist-plus/components/Store.js";
import { GlobalHeart } from "/src/js/shortlist-plus/components/GlobalHeart.js";
import { LocalHeart } from "/src/js/shortlist-plus/components/LocalHeart.js";
import { LocalText } from "/src/js/shortlist-plus/components/LocalText.js";
import { ShortListData } from "/src/js/shortlist-plus/components/ShortListData.js";
import { ShortListReveal } from "/src/js/shortlist-plus/components/ShortListReveal.js";

store.checkIfSession();

createApp({
  store,
  GlobalHeart,
  LocalHeart,
  LocalText,
  ShortListData,
  ShortListReveal,
}).mount();


</script>