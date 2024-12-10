import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

import Inp1 from './comp/inp/input01'
import Outp1 from './comp/inp/output01'
import Signup from './comp/reg/Signup'
import Mypage from './comp/reg/MyPage'
import Ref from './comp/inp/Ref01'

import Projoin from './comp/pro/Join'
import Login from './comp/pro/Login'
import LoginRe from './comp/pro/LoginRe'

import ItemLi from './comp/pro/ItemList'

import BoardWrite from './comp/pro/BoardWrite'
import BoardList from './comp/pro/BoardList'
import BoardDetail from './comp/pro/BoardDetail';
import BoardModify from './comp/pro/BoardModify';

import Ax1 from './comp/ax/ax01'
import { useState } from 'react';



function App() {

  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <About />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cal1"} element={<Calc1 />} />

          <Route path={"/inp1"} element={<Inp1 />} />
          <Route path={"/outp1"} element={<Outp1 />} />
          
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/mypage"} element={<Mypage />} />
          <Route path={"/join"} element={<Projoin />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/loginResult"} element={<LoginRe />} />

          <Route path={"/ax1"} element={<Ax1 />} />
          <Route path={"/ref"} element={<Ref />} />

          <Route path={"/itemList"} element={<ItemLi />} />

          <Route path={"/boardWrite"} element={<BoardWrite posts = {posts} setPosts={setPosts}/>} />
          <Route path={"/boardList"} element={<BoardList />} />
          <Route path={"/boardDetail/:boardId"} element={<BoardDetail />} />
          <Route path={"/BoardModify/:boardId"} element={<BoardModify />} />
         
         

        </Routes>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return (
    <div style={{border: '2px blue solid'}}>
      <Link to="/">Home으로 이동</Link>
    </div>
  )
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link><br/>
      <Link to="/cal1">Cal1로 이동하기</Link><br/>

      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link><br/>
      <Link to="/outp1">데이터 출력</Link><br/>

      <h4>Axios</h4>
      <Link to="/ax1">AXIOS 사용</Link><br/>

      <h2>회원</h2>
      {/* <Link to="/signup">회원가입</Link><br/> */}
      <Link to="/join">회원가입</Link><br/>
      <Link to="/login">로그인</Link><br/>
      <Link to="/itemList">아이템 리스트</Link>
      <hr></hr>
      <Link to="/boardList" className='bold-text'>게시판</Link>
    </div>
  )
}

export default App;
