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

export const login = (obj) => {
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