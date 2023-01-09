import { slStore } from './Store.js'

export function ShortListReveal (props) {
  return {
    childClass : props.childClass,
    text : props.text,
    $template: /* html */ `
        <button
        v-cloak
        class="btn"
        :class="childClass === undefined ? 'btn-primary' : childClass"
        @click.prevent="show">{{text === undefined ? 'reveal' : text}}</button> `,
    show () {
      slStore.reveal = !slStore.reveal
    }
  }
}
