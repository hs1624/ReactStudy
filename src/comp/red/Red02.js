import { useReducer, useRef, useState } from "react"



export default function Red02() {

    const [result, setResult] = useState(0);
    const [result2, setResult2] = useReducer(reducerResult, 0);

    const num1 = useRef(0);
    const num2 = useRef(0);
    const op = useRef();


    function reducerResult(status, action) {
        return status;
    }

    function resultCalc() {
        const cal1 = Number(num1.current.value);
        const cal2 = Number(num2.current.value);

        switch(op.current.value) {
            case "+":
             setResult(cal1+cal2);
             break;
            case "+":
                setResult(cal1-cal2);
                break;
            case "*":
                setResult(cal1*cal2);
                break;
            case "/":
                setResult(cal1/cal2);
                break;
        }
    }

    return (
        <div>
            <h1>Reducer 02</h1>
            <h1>계산기</h1>
            <input type="text" ref={num1}/>
            <input type="text" ref={num2} />
            <select ref={op}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="button" value="결과" onClick={() => {
                resultCalc();
                setResult2();
            }} />
            state: {result} / reducer: {result2}
            <h3>계산 결과 History</h3>
        </div>
    )
}