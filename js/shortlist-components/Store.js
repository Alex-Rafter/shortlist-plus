import { reactive } from 'https://unpkg.com/petite-vue?module'

export const store = reactive({
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
  checkIfAdded: function (reg) {
    // console.log(reg)
    const carNamesArr = this.cars.map((car) => car.reg)
    // carNamesArr.forEach((car) => console.log(car))
    return carNamesArr.includes(reg)
  }
})
