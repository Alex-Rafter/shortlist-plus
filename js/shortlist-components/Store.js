import { reactive } from 'https://unpkg.com/petite-vue?module'

export const store = reactive({
  carsMounted: [],
  cars: [],
  get count() {
    return this.cars.length
  },
  sessionCars: sessionStorage.getItem('shortlist'),
  reveal: false,
  // Methods
  checkIfSession() {
    if (this.sessionCars !== null)
      JSON.parse(this.sessionCars).forEach((car) => {
        this.cars.push(car)
      })
  },
  checkIfAdded: function (uniqueRef) {
    const carNamesArr = this.cars.map((car) => car.url)
    return carNamesArr.includes(uniqueRef)
  },
  //
  addToMountedArrAndSet(carObj) {
    this.carsMounted.push(carObj)
    if (this.checkIfAdded(carObj.url)) this.setAddedToList(carObj, true)
  },
  //
  addToStoreAndSession(carObj) {
    this.setAddedToList(carObj, true)
    store.cars.push(carObj)
    this.sessionSetItem()
  },
  //
  rmFromStoreAndSession(carObj) {
    this.setAddedToList(carObj, false)
    this.cars.splice(store.cars.indexOf(carObj), 1)
    this.sessionSetItem()
  },
  //
  setAddedToList(carObj, bool) {
    this.carsMounted.forEach((car) => {
      if (car.url === carObj.url) car.addedToList = bool
    })
  },
  //
  sessionSetItem() {
    sessionStorage.setItem('shortlist', JSON.stringify(store.cars))
  }
})
