import React, { useState } from 'react';
import { createPost } from '../api/board';  // 게시글 작성 API 호출 함수 임포트
import { useNavigate } from 'react-router-dom';

export default function BoardWrite() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');  // 작성자 상태 추가
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const boardData = { title, content, memberId: author };  // 작성자 값도 전달
        createPost(boardData).then(data => {
            alert('게시글이 작성되었습니다.');
            navigate('/boardList');
        }).catch(err => {
            console.error('게시글 작성 실패', err);
            alert('게시글 작성에 실패했습니다.');
        });
    };

    // 스타일 객체 정의
    const formStyle = {
        width: '60%',
        margin: '0 auto',
        padding: '20px',
        fontSize: '18px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxSizing: 'border-box',
    };

    const textareaStyle = {
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxSizing: 'border-box',
        height: '200px',  // 텍스트 영역 크기 키우기
    };

    const buttonStyle = {
        padding: '15px 30px',
        fontSize: '18px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    };

    return (
        <div>
            <h1>새 게시글 작성</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label>작성자:</label>
                    <input 
                        type="text" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        required 
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>제목:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>내용:</label>
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                        style={textareaStyle}
                    />
                </div>
                <button type="submit" style={buttonStyle}>작성</button>
            </form>
        </div>
    );
}
