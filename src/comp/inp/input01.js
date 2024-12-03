import { useState } from "react"

export default function InputStudy() {

    const [inp, setInp] = useState('');

    function send() {
        alert(inp);

        localStorage.setItem('study', inp);
    }

    return (
        <div>
            <h1>InputStudy</h1>
            <input
                type='text'
                value={inp}
                onChange={ e=> setInp(e.target.value) } />
            
            <input type='button'
                value='전송'
                onClick={send} />
        </div>
    )
}