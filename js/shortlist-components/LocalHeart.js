import {
  store
} from "./Store.js";

export function LocalHeart(props) {
  return {
    $template: /*html*/ `
          <span v-cloak ref="props.data.url" style="cursor:pointer;" @click.prevent="toggleShortlist" :class="carObj.addedToList === false ? 'local-heart icon icon-heart1 ${props.class}' : 'local-heart icon icon-heart2 ${props.class}'" :data-select-msg="carObj.addedToList === false ? 'select' : 'selected'" @vue:mounted="store.addToMountedArrAndSet(carObj)"></span>`,
    //
    carObj: {
      url: props.data.url,
      manufacturer: props.data.manufacturer,
      model: props.data.model,
      reg: props.data.reg,
      year: props.data.year,
      price: props.data.price,
      image: props.data.image,
      addedToList: false,
    },
    // 
    toggleShortlist() {
      if (this.carObj.addedToList === false) {
        !store.checkIfAdded(this.carObj.url) ?
          store.addToStoreAndSession(this.carObj) :
          store.setAddedToList(this.carObj, true);
      } else {
        store.rmFromStoreAndSession(this.carObj);
      }
    },
    // 
  };
}