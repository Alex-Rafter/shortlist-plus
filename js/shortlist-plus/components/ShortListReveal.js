import { store } from './Store.js'

export function ShortListReveal(props) {
  return {
    $template: /*html*/ `
        <button 
        v-cloak
        class="btn"  
        :class="props.class === undefined ? 'btn-primary' : props.class"
        @click.prevent="show">${props.text === undefined ? 'reveal' : props.text}</button> `,
    show () {
      store.reveal = !store.reveal
      // if (store.count === 0) store.reveal = false
      // if (store.count !== 0) store.reveal = !store.reveal
    }
  }
}
