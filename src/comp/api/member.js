import api from '../ax/axiosSetting'

/**
 * 
 * @param {id: 검사 아이디} obj 
 * @returns 
 */

export const memberIdCheck = (obj) => {
    return api.post('/member/findId1', JSON.stringify(obj)
    , {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const Login = (obj) => {
    return api.post('/member/login', JSON.stringify(obj)
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}


export const areaList = () => {
    return api.get('/area/list');
}

/**
 * 회원가입 기능
 * @param {
      'userId': 아이디,
      'userPw': 비밀번호,
      'userName': name,  
      'email': email,
      'birth': birth,
      'gender': gender,
      'areaIdx': area} obj 
 * @returns 
 */

export const memberRegist = (obj) => {
    return api.post('/member/regist', JSON.stringify(obj))
}