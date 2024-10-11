import useCounter from '../customHook/useCounter'
import HOC from '../HOC/WithCounter'

const ClickCounter = ({counter, incrementCounter}) => {
//     const [counter, setCounter] = useState(0);

//    let incrementCounter = () => {
//         setCounter(prev => prev + 1)
//     }

// let [counter, incrementCounter] = useCounter();

  return (
    <div>
        <button onClick={incrementCounter}> {counter} times </button>
    </div>
  )
}

export default HOC(ClickCounter)