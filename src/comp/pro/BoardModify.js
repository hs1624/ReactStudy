import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostById, updatePost } from '../api/board'; // 게시글 수정 API

export default function BoardModify() {
    const { id } = useParams(); // URL에서 게시글 ID를 가져옴
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    // 게시글 상세 정보 가져오기
    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await fetchPostById(id);
                setTitle(response.data.title); // 제목 초기화
                setContent(response.data.content); // 내용 초기화
            } catch (error) {
                console.error('게시글을 가져오는 데 실패했습니다:', error);
            }
        };
        getPost();
    }, [id]);

    // 게시글 수정 함수
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPost = { title, content };

        try {
            await updatePost(id, updatedPost); // 게시글 수정 API 호출
            navigate(`/boardDetail/${id}`); // 수정된 게시글의 상세 페이지로 이동
        } catch (error) {
            console.error('게시글 수정에 실패했습니다:', error);
        }
    };

    return (
        <div>
            <h1>게시글 수정</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </td>
                    </tr>
                </table>
                <button type="submit">수정</button>
            </form>
        </div>
    );
}
