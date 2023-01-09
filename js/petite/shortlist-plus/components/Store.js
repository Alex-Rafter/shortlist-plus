import { reactive } from 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js'
export const slStore = reactive({
  carsMounted: [],
  cars: [],
  get count () {
    return this.cars.length
  },
  sessionCars: window.sessionStorage.getItem('shortlist'),
  reveal: false,
  checkIfSession () {
    if (this.sessionCars !== null) {
      JSON.parse(this.sessionCars).forEach((car) => {
        this.cars.push(car)
      })
    }
  },
  checkIfAdded: function (uniqueRef) {
    const carNamesArr = this.cars.map((car) => car.url)
    return carNamesArr.includes(uniqueRef)
  }
})
