import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/board';  // 게시글 목록 API 호출 함수 임포트
import { useNavigate, useParams } from 'react-router-dom';

export default function BoardList() {
    const [posts, setPosts] = useState([]);  // 게시글 목록 상태
    const { boardIdx } = useParams();  // URL에서 boardIdx 추출
    const [isLoading, setIsLoading] = useState(true);  // 로딩 상태
    const [error, setError] = useState(null);  // 에러 상태
    const navigate = useNavigate();

    // 컴포넌트가 마운트될 때 게시글 목록을 API에서 불러옴
    useEffect(() => {
        fetchPosts()
            .then(data => {
              console.log(data);
                setPosts(data);  // 데이터가 배열이면 posts 상태에 설정
                setIsLoading(false);  // 로딩 상태 false로 설정
            })
            .catch(err => {
                console.error('게시글 목록을 불러오는 데 실패했습니다.', err);
                setError('게시글 목록을 불러오는 데 실패했습니다.');  // 에러 메시지 설정
                setIsLoading(false);  // 로딩 상태 false로 설정
            });
    }, []);  // 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 호출

    // 게시글 클릭 시 상세 페이지로 이동
    const handlePostClick = (boardIdx) => {
        navigate(`/boardDetail/${boardIdx}`);
    };

    // 스타일 객체 정의
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        fontSize: '18px',
    };

    const thTdStyle = {
        padding: '20px 30px',
        textAlign: 'left',
        border: '1px solid #ddd',
        wordWrap: 'break-word',
    };

    const thStyle = {
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
    };

    const trHoverStyle = {
        backgroundColor: '#f1f1f1',
        cursor: 'pointer'
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '15px 30px',
        fontSize: '18px',
        backgroundColor: '#24a0ed',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div>
            <h1>게시글 목록</h1>
            {isLoading ? (
                <p>뜯어고치는 중...</p>  // 로딩 중일 때
            ) : error ? (
                <p>{error}</p>  // 에러가 발생한 경우
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={{ ...thTdStyle, ...thStyle }}>번호</th>
                            <th style={thTdStyle}>작성자</th>
                            <th style={thTdStyle}>제목</th>
                            <th style={thTdStyle}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.map((post, index) => (
                            <tr key={post.boardIdx} onClick={() =>handlePostClick(post.boardIdx)} style={trHoverStyle}>
                                <td style={thTdStyle}>{index + 1}</td>
                                <td style={thTdStyle}>{post.memberId}</td>
                                <td style={thTdStyle}>{post.title}</td>
                                <td style={thTdStyle}>{new Date(post.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button style={buttonStyle} onClick={() => navigate('/boardWrite')}>새 게시글 작성</button>
        </div>
    );
}
