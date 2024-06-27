import Button from './components/Button/Button'
import { useRef, useState } from 'react'
import Collapse from './components/Collapse/Collapse'
import CollapseItem from './components/Collapse/CollapseItem'
import { NameType } from './components/Collapse/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from './components/Icon/Icon'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { Placement, useFloating } from '@floating-ui/react'
import Tooltip from './components/Tooltip/Tooltip'
import { TooltipInstance } from './components/Tooltip/types'

function App() {
  const ref = useRef(null)
  const [openedValue, setOpenedValue] = useState<NameType[]>(['a'])
  const size: SizeProp = '10x'
  const [placement, setPlacement] = useState<Placement>('right')
  const { refs, floatingStyles } = useFloating({
    placement,
  })
  const [trigger, setTrigger] = useState<'hover' | 'click'>('click')
  const tooltipRef = useRef<TooltipInstance>(null)

  setTimeout(() => {
    setPlacement('bottom')
    // setTrigger('hover')
  }, 2000)

  function open() {
    tooltipRef.current?.show()
  }

  function close() {
    tooltipRef.current?.hide()
  }

  return (
    <>
      <Tooltip
        content={<h1>hello</h1>}
        placement="right"
        trigger={trigger}
        manual
        ref={tooltipRef}
        popperOptions={{ placement: 'right-end', strategy: 'fixed' }}
      >
        <img src="./assets/react.svg" width={120} height={120} />
      </Tooltip>
      <br />
      <>
        <img ref={refs.setReference} src="./assets/react.svg" width={120} height={120} />
        <div ref={refs.setFloating} style={floatingStyles}>
          Tooltip
        </div>
      </>
      <br />
      <FontAwesomeIcon type="solid" icon="user-secret" />
      <Icon icon="arrow-up" size="2xl" spin />
      <Icon icon="arrow-up" size="2xl" type="primary" />
      <Icon icon="arrow-up" size={size} type="primary" color="red" />
      <br />
      <Button ref={ref}>Test Button</Button>
      <Button plain onClick={open}>
        Test Button
      </Button>
      <Button round onClick={close}>
        Test Button
      </Button>
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
      <br />

      <Button type="info" loading icon="arrow-up">
        Info
      </Button>
      <Button type="info" icon="arrow-up">
        Info
      </Button>
      <br />

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
