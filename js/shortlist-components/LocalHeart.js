import { store } from './Store.js'

export function LocalHeart(props) {
  return {
    $template: /*html*/ `
          <span v-cloak ref="props.data.url" style="cursor:pointer;" @click.prevent="toggleShortlist" :class="carObj.addedToList === false ? 'local-heart icon icon-heart1 ${props.class}' : 'local-heart icon icon-heart2 ${props.class}'" :data-select-msg="carObj.addedToList === false ? 'select' : 'selected'" @vue:mounted="checkIfAdded"></span>`,

    carObj: {
      url: props.data.url,
      manufacturer: props.data.manufacturer,
      model: props.data.model,
      reg: props.data.reg,
      year: props.data.year,
      price: props.data.price,
      addedToList: false
    },

    checkIfAdded() {
      if (store.checkIfAdded(this.carObj.reg)) {
        this.carObj.addedToList = true
      } 
    },

    toggleShortlist() {
      if (this.carObj.addedToList === false) {
        if (!store.checkIfAdded(this.carObj.reg)) {
          this.carObj.addedToList = true
          store.cars.push(this.carObj)
          sessionStorage.setItem('shortlist', JSON.stringify(store.cars))
        } else {
          this.carObj.addedToList = true
        }
      } else {
        this.carObj.addedToList = !this.carObj.addedToList
        store.cars.splice(store.cars.indexOf(this.carObj), 1)
        sessionStorage.setItem('shortlist', JSON.stringify(store.cars))
      }
    }
  }
}
