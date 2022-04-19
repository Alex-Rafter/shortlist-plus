import { store } from './Store.js'

export function LocalHeart(props) {
  return {
    $template: /*html*/ `
          <span v-cloak ref="props.data.url" style="cursor:pointer;" @click.prevent="toggleShortlist" :class="addedToList === false ? 'local-heart icon icon-heart1 ${props.class}' : 'local-heart icon icon-heart2 ${props.class}'" :data-select-msg="addedToList === false ? 'select' : 'selected'"></span>`,
    
    carObj: {
      url: props.data.url,
      manufacturer: props.data.manufacturer,
      model: props.data.model,
      reg: props.data.reg,
      year: props.data.year,
      price: props.data.price
    },
    
    addedToList: false,

    toggleShortlist() {
      this.addedToList = !this.addedToList
      if (this.addedToList === true) {
        store.cars.push(this.carObj)
        // store.count++
        sessionStorage.setItem('shortlist', JSON.stringify(store.cars))
      }
      if (this.addedToList === false) {
        store.cars.splice(store.cars.indexOf(this.carObj), 1)
        // store.count--
        sessionStorage.setItem('shortlist', JSON.stringify(store.cars))
      }
      // this.addedToList !== false
      //   ? store.cars.push(this.carObj)
      //   : store.cars.splice(store.cars.indexOf(this.carObj), 1)
      // this.addedToList !== false
      //   ? store.count++
      //   : store.count--
    }
  }
}
