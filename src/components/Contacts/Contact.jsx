import { useContext } from "react"
import "./Contact.css"
import { globalContext } from "../../context/GlobalContext"

const Contact = () => {
    let {name} = useContext(globalContext)
    return (
        <>
        <h1>My name is {name}</h1>
        </>
    )
}

export default Contact