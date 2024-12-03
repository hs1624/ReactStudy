import { useLocation } from "react-router-dom";

export default function Mypage() {
  const location = useLocation();
  const userData = location.state; // Signup에서 전달된 state 데이터

  return (
    <div>
      <h1>회원 정보</h1>
      {userData ? (
        <div>
          <p><strong>아이디:</strong> {userData.아이디}</p>
          <p><strong>비밀번호:</strong> {userData.비밀번호}</p>
          <p><strong>이메일 주소:</strong> {userData.이메일주소}</p>
          <p><strong>성별:</strong> {userData.성별}</p>
          <p><strong>학년:</strong> {userData.학년}</p>
          <p><strong>취미</strong></p>
          {userData.취미 && userData.취미.length > 0 ? (
            <ul>
              {userData.취미.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          ) : (
            <p>선택된 취미 없음</p>
          )}
        </div>
      ) : (
        <p>입력된 회원 정보가 없습니다.</p>
      )}
    </div>
  );
}
