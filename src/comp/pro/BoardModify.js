import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function BoardModify() {
    const { boardId } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/board/modify/${boardId}`);
                setTitle(response.data.title);
                setContent(response.data.content);
            } catch (error) {
                console.error('게시글을 불러오는 데 실패했습니다.', error);
            }
        };

        fetchPost();
    }, [boardId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!title || !content) {
            alert("제목과 내용은 필수입니다.");
            return;
        }
    
        try {
            await axios.put(`http://localhost:8080/api/board/${boardId}`, { title, content });
            navigate(`/boardDetail/${boardId}`);
        } catch (error) {
            console.error('게시글 수정에 실패했습니다.', error);
            alert(`게시글 수정에 실패했습니다: ${error.message}`);
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
