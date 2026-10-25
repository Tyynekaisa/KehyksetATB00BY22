// app.js
// Course: ATB00BY22 - Kehykset
// Exercises I - V
// Author: Kaisa Juhola

// Exercise I - Callbacks
// Task 1 - Simple Callback
let getDate = (callback) => {
  let date = new Date()
  let d = date.getDate() // Vaihdettu getDay() funktioon getDate()
  let m = date.getMonth() + 1
  let y = date.getFullYear()

  let formattedDate = `${d}.${m}.${y}`
  callback(formattedDate)
}

getDate((date) => {
  console.log('Date is ' + date)
})

// Exercise II - Callbacks 2
// Task 2 - Loading Scripts
// on-click handler
function loadScriptA() {
  const script = document.createElement('script')
  script.src = 'src/delayedScriptA.js'

  script.onload = () => {
    delayedFunctionCallA()
  }

  document.body.appendChild(script)
}

// Exercise III - Callbacks 3
// Task 1 - Loading Scripts
// callback as a parameter
function loadScriptB(callback) {
  const script = document.createElement('script')
  script.src = 'src/delayedScriptA.js'

  script.onload = () => {
    callback()
  }

  document.body.appendChild(script)
}

// Exercise III - Callbacks 3
// Task 2 - More Script Loading
// load script B after calling function A
function loadScriptsInOrder() {
  loadScriptB(() => {
    delayedFunctionCallA()

    const script = document.createElement('script')
    script.src = 'src/delayedScriptB.js'

    script.onload = () => {
      delayedFunctionCallB()
    }

    document.body.appendChild(script)
  })
}

// Exercise IV - Promises
// Task - Loading Scripts with Promises (2., 5. & 6.)
function startPromiseButtonClick() {
  loadScriptPromise()
    .then((scriptName) => {
      console.log('Script loaded:', scriptName)
      delayedFunctionCallA()
    })
    .then(() => {
      alert('Promise completed!')
    })
    .catch((error) => {
      console.error(error)
    })
}

// Exercise IV - Promises
// Task - Loading Scripts with Promises (3. & 4.)
function loadScriptPromise() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'src/delayedScriptA.js'

    script.onload = () => {
      resolve(script.src)
    }

    script.onerror = () => {
      reject(new Error('Script loading failed'))
    }

    document.body.appendChild(script)
  })
}

// Exercise V - Promises, async/await
// Task - Loading Scripts with Promises and Using await to Wait for Completion
async function startAsyncButtonClick() {
  try {
    const scriptName = await loadScriptPromise()

    console.log('Script loaded:', scriptName)
    delayedFunctionCallA()
  } catch (error) {
    console.error(error)
  }
}
