import api from "../ax/axiosSetting";

/**
 * 게시글 목록 조회
 * @returns {Promise} - 게시글 목록을 반환하는 프로미스
 */
export const fetchPosts = async () => {
    try {
        const response = await api.get('/board/list');
        return response.data.data; // 서버에서 받은 게시글 목록 반환
    } catch (error) {
        console.error('게시글 목록을 불러오는 데 실패했습니다.', error);
        throw error;
    }
};


/**
 * 게시글 작성
 * @param {Object} obj - 게시글 정보 (예: 제목, 내용)
 * @returns {Promise} - 작성된 게시글 데이터를 반환하는 프로미스
 */
export const createPost = async (obj) => {
    try {
        const response = await api.post('/board/regist', obj);
        return response.data; // 작성된 게시글 데이터 반환
    } catch (error) {
        console.error('게시글 작성에 실패했습니다.', error);
        throw error;
    }
};

/**
 * 특정 게시글 조회
 * @param {number} boardId - 게시글 ID
 * @returns {Promise} - 게시글 데이터를 반환하는 프로미스
 */
export const fetchPostById = async (boardIdx) => {
    try {
        const response = await api.get(`/board/find/boardIdx=${boardIdx}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('게시글을 불러오는 데 실패했습니다.', error);
        throw error;
    }
};

/**
 * 게시글 수정
 * @param {number} id - 게시글 ID
 * @param {Object} obj - 수정된 게시글 정보 (예: 제목, 내용)
 * @returns {Promise} - 수정된 게시글 데이터를 반환하는 프로미스
 */
export const updatePost = async (id, obj) => {
    try {
        const response = await api.put(`/board/modify/${id}`, obj);
        return response.data;
    } catch (error) {
        console.error('게시글 수정에 실패했습니다.', error);
        throw error;
    }
};

/**
 * 게시글 삭제
 * @param {number} boardId - 게시글 ID
 * @returns {Promise} - 삭제된 게시글 데이터를 반환하는 프로미스
 */
export const deletePost = async (boardId) => {
    try {
        const response = await api.delete(`/board/remove/${boardId}`);
        return response.data;
    } catch (error) {
        console.error('게시글 삭제에 실패했습니다.', error);
        throw error;
    }
};
