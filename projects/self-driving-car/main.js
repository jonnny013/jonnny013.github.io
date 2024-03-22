const regenerateButton = document.getElementById('regenerateButton')
const verticalButtons = document.getElementById('verticalButtons')
regenerateButton.addEventListener('click', () => window.location.reload())

const carCanvas = document.getElementById('carCanvas')
carCanvas.width = 200

const networkCanvas = document.getElementById('networkCanvas')
networkCanvas.width = 300

const carCtx = carCanvas.getContext('2d')
const networkCtx = networkCanvas.getContext('2d')

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9)

let myCars = checkStorage('myCars', 100);
let mutationPercentage = checkStorage('mutationPercentage', 0.1)
let dummyCars = checkStorage('dummyCars', 100)


function checkStorage(name, defaultValue) {
  const storedValue = localStorage.getItem(name)
  if (storedValue) {
    console.log(name, ': ', storedValue, 'localStorage: ', storedValue)
    return parseFloat(storedValue)
  } else {
    console.log(name, ': ', defaultValue, 'localStorage: ', 'not found')
    return defaultValue
  }
}

console.log('cars', myCars, 'dummy cars', dummyCars, 'perc', mutationPercentage)

// Create myCarsInput
const myCarsLabel = document.createElement('label')
myCarsLabel.textContent = 'Number of AI Cars:'
const myCarsInput = document.createElement('input')
myCarsInput.type = 'number'
myCarsInput.id = 'myCarsInput'
myCarsInput.value = myCars
myCarsInput.min = 1
myCarsInput.max = 1000
verticalButtons.appendChild(myCarsLabel)
verticalButtons.appendChild(myCarsInput)
verticalButtons.appendChild(document.createElement('br'))

// Create dummyCarsInput
const dummyCarsLabel = document.createElement('label')
dummyCarsLabel.textContent = 'Number of Dummy Cars:'
const dummyCarsInput = document.createElement('input')
dummyCarsInput.type = 'number'
dummyCarsInput.id = 'dummyCarsInput'
dummyCarsInput.value = dummyCars
dummyCarsInput.min = 1
dummyCarsInput.max = 1000
verticalButtons.appendChild(dummyCarsLabel)
verticalButtons.appendChild(dummyCarsInput)
verticalButtons.appendChild(document.createElement('br'))

// Create mutationPercentageInput
const mutationPercentageLabel = document.createElement('label')
mutationPercentageLabel.textContent = 'Mutation %:'
const mutationPercentageInput = document.createElement('input')
mutationPercentageInput.type = 'number'
mutationPercentageInput.id = 'mutationPercentageInput'
mutationPercentageInput.value = mutationPercentage * 100
mutationPercentageInput.min = 0
mutationPercentageInput.max = 100
verticalButtons.appendChild(mutationPercentageLabel)
verticalButtons.appendChild(mutationPercentageInput)

myCarsInput.addEventListener('input', () =>
  saveTolocalStorage('myCars', myCarsInput.value)
)
dummyCarsInput.addEventListener('input', () =>
  saveTolocalStorage('dummyCars', dummyCarsInput.value)
)
mutationPercentageInput.addEventListener('input', () =>
  saveTolocalStorage('mutationPercentage', mutationPercentageInput.value / 100)
)

function saveTolocalStorage(name, item) {
  console.log('input saved')
  localStorage.setItem(name, item)
  console.log(localStorage)
}

const cars = generateCars(myCars)

let bestCar = cars[0]

if (localStorage.getItem('bestBrain')) {
  for (let i = 0; i < cars.length; i++) {
    cars[i].brain = JSON.parse(localStorage.getItem('bestBrain'))
    if (i != 0) {
      NeuralNetwork.mutate(cars[i].brain, mutationPercentage)
    }
  }
}

const traffic = [
  new Car(
    road.getLaneCenter(1),
    -100,
    30,
    50,
    'DUMMY',
    Math.floor(Math.random() * 2) + 1
  ),
  new Car(
    road.getLaneCenter(0),
    -300,
    30,
    50,
    'DUMMY',
    Math.floor(Math.random() * 2) + 1
  ),
  new Car(
    road.getLaneCenter(0),
    -500,
    30,
    50,
    'DUMMY',
    Math.floor(Math.random() * 2) + 1
  ),
  new Car(
    road.getLaneCenter(0),
    -700,
    30,
    50,
    'DUMMY',
    Math.floor(Math.random() * 2) + 1
  ),
  new Car(
    road.getLaneCenter(1),
    -500,
    30,
    50,
    'DUMMY',
    Math.floor(Math.random() * 2) + 1
  ),
  new Car(
    road.getLaneCenter(2),
    -900,
    30,
    50,
    'DUMMY',
    Math.floor(Math.random() * 2) + 1
  ),
]

makeTraffic(dummyCars)

function makeTraffic(numOfCars) {
  for (let i = 0; i < numOfCars; i++) {
    const laneIndex = Math.floor(Math.random() * 3)
    const startY = -100 * (Math.floor(Math.random() * 200) + 1)
    traffic.push(
      new Car(
        road.getLaneCenter(laneIndex),
        startY,
        30,
        50,
        'DUMMY',
        Math.floor(Math.random() * 2) + 1
      )
    )
  }
}

animate()

function save(name, item) {
  console.log('saved')
  localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain))
}

function discard() {
  console.log('deleted')
  localStorage.removeItem('bestBrain')
}

function generateCars(N) {
  const cars = []
  for (let i = 0; i < N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, 'AI'))
  }
  return cars
}

function animate(time) {
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, [])
  }

  for (let i = 0; i < cars.length; i++) {
    cars[i].update(road.borders, traffic)
  }
  bestCar = cars.find(c => c.y == Math.min(...cars.map(c => c.y)))
  carCanvas.height = window.innerHeight
  networkCanvas.height = window.innerHeight

  carCtx.save()
  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7)

  road.draw(carCtx)

  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(carCtx, 'red')
  }

  carCtx.globalAlpha = 0.2
  for (let i = 0; i < cars.length; i++) {
    cars[i].draw(carCtx, 'blue')
  }
  carCtx.globalAlpha = 1
  bestCar.draw(carCtx, 'blue', true)

  carCtx.restore()

  networkCtx.lineDashOffset = -time / 50
  Visualizer.drawNetwork(networkCtx, bestCar.brain)
  requestAnimationFrame(animate)
}
