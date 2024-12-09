import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BoardList() {
    const [posts, setPosts] = useState([]); // 게시글 데이터
    const [filteredPosts, setFilteredPosts] = useState([]); // 검색 필터링된 데이터
    const [searchField, setSearchField] = useState(''); // 검색 기준 (memberId, title, keyword)
    const [searchQuery, setSearchQuery] = useState(''); // 검색어
    const navigate = useNavigate();

    // 로컬스토리지에서 게시글 목록 가져오기
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(savedPosts);
        setFilteredPosts(savedPosts); // 초기값 설정
    }, []);

    // 검색 필터 적용
    const handleSearch = () => {
        if (!searchField || !searchQuery.trim()) {
            setFilteredPosts(posts); // 검색 기준이 없으면 전체 게시글 보여줌
            return;
        }

        const filtered = posts.filter((post) =>
            post[searchField]?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    // 게시글 상세 페이지로 이동
    const viewPost = (boardIdx) => {
        navigate(`/boardDetail/${boardIdx}`);
    };

    return (
        <div style={{ margin: '20px' }}>
            <h1>게시판 목록</h1>

            {/* 검색 섹션 */}
            <div style={{ marginBottom: '20px' }}>
                <select
                    value={searchField}
                    onChange={(e) => setSearchField(e.target.value)}
                    style={{ padding: '8px', marginRight: '10px' }}
                >
                    <option value="">검색 기준 선택</option>
                    <option value="memberId">작성자</option>
                    <option value="title">제목</option>
                    <option value="keyword">키워드</option>
                </select>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="검색어 입력"
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button onClick={handleSearch} style={{ padding: '8px' }}>
                    검색
                </button>
            </div>

            {/* 게시글 목록 */}
            {filteredPosts.length === 0 ? (
                <p>게시글이 없습니다.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>번호</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>작성자</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>제목</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>작성일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPosts.map((post, index) => (
                            <tr
                                key={post.boardIdx}
                                onClick={() => viewPost(post.boardIdx)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{index + 1}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{post.memberId}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{post.title}</td>
                                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{post.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
