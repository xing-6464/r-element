import Button from './components/Button/Button'
import { useRef, useState } from 'react'
import Collapse from './components/Collapse/Collapse'
import CollapseItem from './components/Collapse/CollapseItem'
import { NameType } from './components/Collapse/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './components/Icon/Icon'

function App() {
  const ref = useRef(null)
  const [openedValue, setOpenedValue] = useState<NameType[]>(['a'])
  const [size, setSize] = useState('3x')

  setTimeout(() => {
    setSize('1x')
  }, 2000)

  return (
    <>
      <FontAwesomeIcon type="solid" icon="user-secret" />
      <Icon icon="arrow-up" size="2xl" spin />
      <Icon icon="arrow-up" size="2xl" type="primary" />
      <Icon icon="arrow-up" size={size} type="primary" color="red" />
      <br />
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

      <Collapse accordion modeValue={openedValue} onChange={(value) => setOpenedValue(value)}>
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
      {openedValue}
    </>
  )
}

export default App
