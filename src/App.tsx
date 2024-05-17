import Button from './components/Button/Button'
import { useRef } from 'react'

function App() {
  const ref = useRef(null)
  console.log(ref.current)
  return (
    <>
      <Button ref={ref}>Test Button</Button>
      <Button plain>Test Button</Button>
      <Button round>Test Button</Button>
      <Button circle>Test Button</Button>
      <Button disabled>Test Button</Button>
      <br></br>
      <br></br>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
      <br></br>
      <br></br>
      <Button type="primary" plain>
        Primary
      </Button>
      <Button type="success" plain>
        Success
      </Button>
      <Button type="danger" plain>
        Danger
      </Button>
      <Button type="info" plain>
        Info
      </Button>
    </>
  )
}

export default App
