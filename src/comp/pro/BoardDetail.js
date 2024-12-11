import React, { useState, useEffect } from 'react';
import { fetchPostById } from '../api/board'; // API 호출 함수
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BoardDetail() {
    const { postId } = useParams(); // URL에서 postId 가져오기
    const [post, setPost] = useState(null); // 초기 상태를 null로 설정
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태
    const navigate = useNavigate();

    useEffect(() => {
      console.log('ggg');
      console.log(post.boardIdx);
        fetchPostById(post)
            .then(data => {
                setPost(data); // 데이터 설정
                setIsLoading(false);
            })
            .catch(err => {
                console.error('게시글 로드 실패:', err);
                alert('게시글을 불러오는 데 실패했습니다.');
                navigate('/boardList'); // 실패 시 리스트로 이동
            });
    }, [postId, navigate]);

    if (isLoading) {
        return <p>로딩 중...</p>;
    }

    if (!post) {
        return <p>게시글이 없습니다.</p>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>{post.title}</h1>
            <p>작성자: {post}</p>
            <p>작성일: {new Date(post.createdAt).toLocaleString()}</p>
            <div>
                <h3>내용</h3>
                <p>{post.content}</p>
            </div>
            <button onClick={() => navigate('/boardList')}>목록으로 돌아가기</button>
        </div>
    );
}
