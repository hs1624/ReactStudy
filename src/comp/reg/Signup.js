import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [아이디, 확인아이디] = useState('');
  const [비밀번호, 확인비밀번호] = useState('');
  const [이메일주소, 확인이메일] = useState('');
  const [성별, 확인성별] = useState('');
  const [sel, setSel] = useState('1학년');
  const [hobby, setHobby] = useState([]); // 취미 선택 상태

  const navigate = useNavigate();

  // 취미 체크박스 상태 관리
  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobby((prevHobbies) => [...prevHobbies, value]); // 체크된 항목 추가
    } else {
      setHobby((prevHobbies) => prevHobbies.filter((h) => h !== value)); // 체크 해제된 항목 제거
    }
  };

  // 회원가입 데이터 전송
  const handleSignup = () => {
    const signupData = {
      아이디,
      비밀번호,
      이메일주소,
      성별,
      학년: sel,
      취미: hobby,
    };

    // localStorage에 저장 (선택적으로 사용)
    localStorage.setItem('signupData', JSON.stringify(signupData));

    // MyPage로 데이터 전달
    navigate('/mypage', { state: signupData });

    // 입력값 초기화
    확인아이디('');
    확인비밀번호('');
    확인이메일('');
    확인성별('');
    setSel('1학년');
    setHobby([]);
  };

  const hobbyList = [
    { name: '독서' },
    { name: '악기연주' },
    { name: '프라모델 조립' },
    { name: '자기' },
    { name: '여행' }
  ];

  return (
    <div className="App">
      <h1>회원가입</h1>
      <div>
        <input
          type="text"
          placeholder="아이디"
          value={아이디}
          onChange={(e) => 확인아이디(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호"
          value={비밀번호}
          onChange={(e) => 확인비밀번호(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="이메일 주소"
          value={이메일주소}
          onChange={(e) => 확인이메일(e.target.value)}
        />
      </div>
      <h4>성별</h4>
      <div>
        <label>
          <input
            type="radio"
            name="성별"
            value="남"
            checked={성별 === '남'}
            onChange={(e) => 확인성별(e.target.value)}
          />{' '}
          남
        </label>
        <label>
          <input
            type="radio"
            name="성별"
            value="여"
            checked={성별 === '여'}
            onChange={(e) => 확인성별(e.target.value)}
          />{' '}
          여
        </label>
      </div>
      <h4>학년</h4>
      <div>
        <select value={sel} onChange={(e) => setSel(e.target.value)}>
          <option value="1학년">1학년</option>
          <option value="2학년">2학년</option>
          <option value="3학년">3학년</option>
          <option value="4학년">4학년</option>
        </select>
      </div>
      <h4>취미 선택</h4>
      {hobbyList.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={item.name}
              checked={hobby.includes(item.name)}
              onChange={handleHobbyChange}
            />
            {item.name}
          </label>
        </div>
      ))}
      <div>
        <button onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
}
