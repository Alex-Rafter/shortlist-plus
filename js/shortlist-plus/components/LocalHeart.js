import { store } from "./Store.js";

export function LocalHeart(props) {
  return {
    $template: /*html*/ `
          <span 
          v-cloak 
          ref="props.data.url" 
          style="cursor:pointer;" 
          @click.prevent="toggleShortlist" 
          class="local-heart"
          :class="props.class"
          :data-select-msg="carObj.addedToList === false ? 'select' : 'selected'" 
          @vue:mounted="addToMountedArrAndSet()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path :d="carObj.addedToList ? carObj.heartFullSVGPath : carObj.heartEmptySVGPath"/>
            </svg>
          </span>`,
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
      heartEmptySVGPath: 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z',
      heartFullSVGPath: 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z',
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
