import api from "../ax/axiosSetting";

/**
 * 게시글 목록 조회
 * @returns 
 */
export const fetchPosts = () => {
    return api.get('/board/list'); // 서버에서 게시글 목록을 GET 요청으로 가져옵니다.
}

/**
 * 게시글 작성
 * @param {Object} obj - 게시글 정보 (예: 제목, 내용)
 * @returns 
 */
export const createPost = (obj) => {
    return api.post('/board/regist', JSON.stringify(obj), {
        headers: {
            'Content-Type': 'application/json',
        }
    }); // POST 요청으로 게시글을 서버에 등록합니다.
}

/**
 * 특정 게시글 조회
 * @param {number} id - 게시글 ID
 * @returns 
 */
export const fetchPostById = (id) => {
    return api.get(`/board/find/${id}`); // GET 요청으로 특정 게시글을 서버에서 가져옵니다.
}

/**
 * 게시글 수정
 * @param {number} id - 게시글 ID
 * @param {Object} obj - 수정된 게시글 정보 (예: 제목, 내용)
 * @returns 
 */
export const updatePost = (id, obj) => {
    return api.post(`/board/modify/${id}`, JSON.stringify(obj), {
        headers: {
            'Content-Type': 'application/json',
        }
    }); // PUT 요청으로 게시글을 수정합니다.
}

/**
 * 게시글 삭제
 * @param {number} id - 게시글 ID
 * @returns 
 */
export const deletePost = (id) => {
    return api.delete(`/board/remove/${id}`); // DELETE 요청으로 게시글을 삭제합니다.
}
