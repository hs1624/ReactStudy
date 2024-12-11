import React, { useState, useEffect } from 'react';
import { fetchPostById } from '../api/board'; // API 호출 함수
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BoardDetail() {
<<<<<<< HEAD
    const { boardIdx } = useParams();  // URL에서 boardIdx 추출
    const [post, setPost] = useState(null);  // 게시글 상세 상태
    const [isLoading, setIsLoading] = useState(true);  // 로딩 상태
    const [error, setError] = useState(null);  // 에러 상태
    const navigate = useNavigate();

    // 게시글 상세 데이터를 API에서 불러옴
    useEffect(() => {
        if (!boardIdx) {
            setError('잘못된 게시글 ID입니다.');
            setIsLoading(false);
            return;
        }

        // API 요청 URL 설정 (URL 파라미터로 boardIdx 전달)
        const url = `http://localhost:8080/api/board/find?boardId=${boardIdx}`;

        // 게시글 데이터를 API로부터 불러옴
        axios.get(url)
            .then(response => {
                setPost(response.data);  // 게시글 데이터 설정
                setIsLoading(false);  // 로딩 완료
            })
            .catch(err => {
                console.error('게시글을 불러오는 데 실패했습니다.', err);
                setError('게시글을 불러오는 데 실패했습니다.');
                setIsLoading(false);  // 로딩 완료
            });
    }, [boardIdx]);  // boardIdx가 변경될 때마다 게시글 데이터를 다시 불러옴

    // 게시글 목록으로 돌아가기
    const handleBackClick = () => {
        navigate('/boardList');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>게시글 상세 보기</h1>
            {isLoading ? (
                <p>게시글을 불러오는 중입니다...</p>  // 로딩 중
            ) : error ? (
                <p>{error}</p>  // 에러가 발생한 경우
            ) : post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p><strong>작성자:</strong> {post.memberId}</p>
                    <p><strong>작성일:</strong> {new Date(post.createdAt).toLocaleString()}</p>
                    <p><strong>내용:</strong> {post.content}</p>
                </div>
            ) : (
                <p>게시글을 찾을 수 없습니다.</p>  // 게시글을 찾을 수 없는 경우
            )}
            <button
                onClick={handleBackClick}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#24a0ed',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}>
                목록으로 돌아가기
            </button>
=======
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
>>>>>>> 0d15ed9fc61ef653d5ec33f8199fc85f7121db0b
        </div>
    );
}
