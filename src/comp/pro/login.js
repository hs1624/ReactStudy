import { useState } from "react";
import { login } from "../api/member";
import { useNavigate } from "react-router-dom"; // 올바른 navigate 사용


export default function Login() {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();
    return (
        <div>
            <input type="text"
                placeholder="아이디 입력"
                value={id}
                onChange={
                    e => {
                        setId(e.target.value);
                    }
                } />

            <input type="password"
                placeholder="비밀번호 입력"
                value={pw}
                onChange={
                    e => {
                        setPw(e.target.value);
                    }
                } />

            <input type="button"
                value='로그인'
                onClick={
                    () => {
                        let obj = new Object();
                        obj.userId = id;
                        obj.userPw = pw;

                        const startLogin = login(obj);

                        startLogin.then(res => {

                            //로그인 성공일때
                            if (res.data.data === 'Y') {
                                localStorage.setItem('userId', obj.userId);
                                localStorage.setItem('userPw', obj.userPw);
                                navigate('/loginResult');
                            } else if(res.data.data === 'N'){
                                alert('로그인 실패! 입력을 다시해주세요');
                            }
                        });

                        startLogin.catch(err => {
                            console.log('로그인 에러');
                            console.log(err)
                        });

                    }
                } />
        </div>
    )
}