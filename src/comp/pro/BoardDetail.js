import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function BoardDetail() {
    const { boardIdx } = useParams(); // URL에서 게시글 ID를 가져옴
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    // 로컬스토리지에서 해당 게시글 데이터를 불러옴
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const selectedPost = savedPosts.find((p) => p.id === Number(boardIdx));
        setPost(selectedPost);
    }, [boardIdx]);

    // 게시글 목록 페이지로 이동
    const goToList = () => {
        navigate('/boardList');
    };

    return (
        <div style={{ margin: '20px' }}>
            {post ? (
                <>
                    제목:{post.title}
                    <p style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}> 
                        내용:{post.content}</p>
                    <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#888' }}>
                        작성일: {post.createdAt}
                    </p>
                    <button
                        onClick={goToList}
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        게시글 목록으로 이동
                    </button>
                </>
            ) : (
                <p>게시글을 찾을 수 없습니다.</p>
            )}
        </div>
    );
}
