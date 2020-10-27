import { useState, useRef } from 'react'

export function useStopWatch () {
  const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState)

    const countRef = useRef(null)

    const handleStart = () => {
      countRef.current = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)
    }

    return {
      timer,
      handleStart
    }
  }

  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  const { timer, handleStart } = useTimer(0)

  return [{ timer }, { handleStart, formatTime }]
}

//   useEffect(() => {
//     handleStart()
//   }, [])

//   return (
//     <>
//       <p>{formatTime(timer)}</p>

//     </>
//   )
// }
// export default Timer
