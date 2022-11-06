import {useState} from "react"

function Ex01() {

    const [result, setResult] = useState("연습");

    let result2 = "연습2";

    function chResult() {
        result2 = "연습2 값 변경";
        console.log("result2: " + result2);

        setResult("useState사용 연습");
    }

    return (
        <>
            <h1>첫번째 {result}</h1>
            <h1>두번째 {result2}</h1>
            <button onClick={chResult}>값 바꾸기</button>
        </>
    )
}

export default Ex01;