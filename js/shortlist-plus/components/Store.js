import { reactive } from 'https://unpkg.com/petite-vue?module'

export const store = reactive({
  carsMounted : [],
  cars: [],
  get count() {
    return this.cars.length
  },
  sessionCars: sessionStorage.getItem('shortlist'),
  reveal: false,
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
})
