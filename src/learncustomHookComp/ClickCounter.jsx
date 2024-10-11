import useCounter from '../customHook/useCounter'

const ClickCounter = () => {
//     const [counter, setCounter] = useState(0);

//    let incrementCounter = () => {
//         setCounter(prev => prev + 1)
//     }

let [counter, incrementCounter] = useCounter();

  return (
    <div>
        <button onClick={incrementCounter}> {counter} times </button>
    </div>
  )
}

export default ClickCounter