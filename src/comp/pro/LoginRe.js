import { useLocation } from 'react-router-dom';

export default function LoginSuccess() {
  const location = useLocation();

  // 전달된 user 데이터를 가져옴
  const user = location.state?.user;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 성공</h1>
      
      
    </div>
  );
}
