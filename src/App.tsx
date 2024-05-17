import Button from './components/Button/Button'
import './App.css'
import { useRef } from 'react'

function App() {
  const ref = useRef(null)
  console.log(ref.current)
  return (
    <>
      <Button ref={ref} type="primary" plain>
        Test Button
      </Button>
    </>
  )
}

export default App
