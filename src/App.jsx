import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })
  const [status, setStatus] = useState()

  function clock() {

    var milliseconds = 0
    var hours = 0
    var minutes = 0
    var seconds = 0

    const inti = setInterval(() => {
      milliseconds++
      if (milliseconds === 100) {
        seconds++
        milliseconds = 0
      }

      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      
      if (minutes === 60) {
        hours++
        minutes = 0
      }

      setTime({ hours, minutes, seconds, milliseconds })

      setStatus(inti)
    }, 100);

  }

  function start() {
    clock()
  }

  function stop() {
    console.log('stopped');
    setStatus(clearInterval(status))
  }

  function clear() {
    console.log('cleared');
    setStatus(clearInterval(status))
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    })
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='bg-gray-500 h-[250px] w-[500px] rounded-md flex flex-col justify-evenly text-white'>
          <p className='text-3xl'>{time.hours}:{time.minutes}:{time.seconds}:{time.milliseconds}</p>

          <div>

            <button  onClick={start}>start</button>
            <button className='bg-red-300' onClick={stop}>stop</button>
            <button className='bg-teal-500' onClick={clear}>clear</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
