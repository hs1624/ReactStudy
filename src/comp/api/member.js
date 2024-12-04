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

export const areaList = () => {
    console.log('aa'); // 위치 발각될수 있어 지워야됨 
    return api.get('/area/list');
}