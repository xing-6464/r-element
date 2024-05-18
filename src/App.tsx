import Button from './components/Button/Button'
import { useRef } from 'react'
import Collapse from './components/Collapse/Collapse'
import CollapseItem from './components/Collapse/CollapseItem'

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

      <Collapse>
        <CollapseItem name="a" title={<h1>nice title</h1>}>
          <h1>headline title</h1>
          <div>this is content aaa</div>
        </CollapseItem>
        <CollapseItem name="b" title="nice title b item b">
          <div>this is bbbbb test</div>
        </CollapseItem>
        <CollapseItem name="c" title="nice title c item c" disabled>
          <div>this is ccccc test</div>
        </CollapseItem>
      </Collapse>
    </>
  )
}

export default App
