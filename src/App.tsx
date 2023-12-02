import Button from './components/Button/button'

function App() {
  return (
    <>
      <Button>hello</Button>
      <Button btnType="primary" size="lg">
        hello
      </Button>
      <Button disabled btnType="danger" size="lg">
        hello
      </Button>

      <Button btnType="link" size="lg" href="1.94.45.254:9002">
        跳转
      </Button>
    </>
  )
}

export default App
