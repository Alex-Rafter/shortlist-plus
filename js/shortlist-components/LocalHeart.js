import { store } from "./Store.js";

export function LocalHeart(props) {
  return {
    $template: /*html*/ `
          <span v-cloak ref="props.data.url" style="cursor:pointer;" @click.prevent="toggleShortlist" :class="carObj.addedToList === false ? 'local-heart icon icon-heart1 ${props.class}' : 'local-heart icon icon-heart2 ${props.class}'" :data-select-msg="carObj.addedToList === false ? 'select' : 'selected'" @vue:mounted="addToMountedArrAndSet()"></span>`,
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
    // Next Job : Add All Below to Store and Tweak Code 
    //
    addToMountedArrAndSet() {
      store.carsMounted.push(this.carObj);
      if (store.checkIfAdded(this.carObj.url))
        this.setAddedToList(this.carObj, true);
    },
    //
    toggleShortlist() {
      if (this.carObj.addedToList === false) {
        !store.checkIfAdded(this.carObj.url)
          ? this.addToStoreAndSession()
          : this.setAddedToList(this.carObj, true);
      } else {
        this.rmFromStoreAndSession();
      }
    },
    //
    addToStoreAndSession() {
      this.setAddedToList(this.carObj, true);
      store.cars.push(this.carObj);
      this.sessionSetItem();
    },
    //
    rmFromStoreAndSession() {
      this.setAddedToList(this.carObj, false);
      store.cars.splice(store.cars.indexOf(this.carObj), 1);
      this.sessionSetItem();
    },
    //
    setAddedToList(carObj, bool) {
      store.carsMounted.forEach((car) => {
        if (car.url === carObj.url) car.addedToList = bool;
      });
    },
    //
    sessionSetItem() {
      sessionStorage.setItem("shortlist", JSON.stringify(store.cars));
    },
  };
}
