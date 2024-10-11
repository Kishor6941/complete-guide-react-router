import useCounter from '../customHook/useCounter'

const HoverCounter = () => {

    // const [counter, setCounter] = useState(0);

    // let incrementCounter = () => {
    //      setCounter(prev => prev + 1)
    //  }
    let [counter, incrementCounter] = useCounter()

  return (
    <h3 onMouseOver={incrementCounter}> {counter} times </h3>
  )
}

export default HoverCounter