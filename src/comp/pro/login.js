import { useRef } from "react";
import { useNavigate } from "react-router-dom"; // 올바른 navigate 사용
import {login} from '../api/member' 

export default function Login() {

    const navigate = useNavigate();

    const idRef = useRef('');
    const pwRef = useRef('');

    const loginAction = () => {

        const idValue = idRef.current.value;
        const pwValue = pwRef.current.value;
        console.log(pwValue);

        let obj = new Object();
        obj.userId = idValue;
        obj.userPw = pwValue;

        login(obj)
        .then(res => {
            const data = res.data;
            if(data.code == '200' && data.data == 'Y') {

                console.log('로그인 성공');

            }
            else {
                idRef.current.value = '';
                pwRef.current.value = '';
                idRef.current.focus();
                alert('아이디를 다시 입력해주세요.');
            }

            console.log(res);
        })
    }

    return (
        <div>
            <h1>로그인</h1>
            <input
                type="text"
                placeholder="아이디 입력"
                ref={idRef} /><br/>
            <input
                type="password"
                placeholder="패스워드 입력"
                ref={pwRef} /><br/>

            <input type="button" value="회원가입" onClick={
                () => {
                    navigate('/pro1');
                }
            }/>
            <input type="button" value="로그인" onClick={loginAction} />

        </div>
    )
}