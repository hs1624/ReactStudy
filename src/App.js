import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

import Inp1 from './comp/inp/input01'
import Outp1 from './comp/inp/output01'
import Signup from './comp/reg/Signup'
import Mypage from './comp/reg/MyPage'

import Ax1 from './comp/ax/ax01'


function App() {
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

          <Route path={"/ax1"} element={<Ax1 />} />
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
      <Link to="/signup">회원가입</Link><br/>
    </div>
  )
}

export default App;
