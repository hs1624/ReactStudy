import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import

export default function InputStudy() {
  const [inp, setInp] = useState('');
  const navigate = useNavigate(); // useNavigate 사용

  function send() {
    alert(inp);

    // 입력값을 localStorage에 저장
    localStorage.setItem('study', inp);

    // '/outp1' 경로로 이동
    navigate('/outp1');
  }

  return (
    <div>
      <h1>InputStudy</h1>
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <input
        type="button"
        value="전송"
        onClick={send}
      />
    </div>
  );
}
