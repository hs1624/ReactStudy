import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 임포트
import { createPost } from '../api/board';

export default function BoardWrite() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // 페이지 이동 기능 구현

    // 게시글 작성 함수
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { title, content };

        try {
            await createPost(postData); // 게시글 등록 API 호출
            setIsSubmitted(true); // 글 작성 후 제출 상태로 변경
        } catch (error) {
            console.error('게시글 작성에 실패했습니다:', error);
        }
    };

    // 게시글 목록 페이지로 이동
    const goToBoardList = () => {
        navigate('/boardList'); // 게시글 목록 페이지로 이동
    };

    return (
        <div style={{ margin: '20px' }}>
            <h1>게시글 작성</h1>
            {isSubmitted ? (
                <div>
                    <p>게시글이 등록되었습니다.</p>
                    {/* 게시글 등록 후 메시지만 표시 */}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>제목</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                        style={{ width: '100%', padding: '8px' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>내용</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '8px' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: '20px',
                        }}
                    >
                        게시글 등록
                    </button>
                </form>
            )}
            {/* 항상 표시되는 목록 버튼 */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button
                    onClick={goToBoardList}
                    style={{
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    목록으로 돌아가기
                </button>
            </div>
        </div>
    );
}
