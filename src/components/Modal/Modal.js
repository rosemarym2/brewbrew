import { useState } from "react"

const Modal = (props) => {
    const [show, setShow] = useState(false)
    const handler = () => {
        setShow(!show)
    }
    if(!props){
        return <p>loading...</p>
    }
    return (
        <div onClick={() => setShow(!show)}>
            {show ? 
            <div>
                {props.children}
                <p onClick={handler}>close</p>
                </div> : 
            <div>
               {props.tips ? <p>see tips</p> : <p>see pairing</p>}
            </div>
            }
        </div>
    )
}
export default Modal