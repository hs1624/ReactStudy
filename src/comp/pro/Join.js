import { useEffect, useState } from 'react';
import { memberIdCheck, areaList } from '../api/member'

function Study() {

  const [아이디, 변경아이디] = useState('');
  const [areas, setAreas] = useState([]);

  //화면이 처음 출력 되었을 때, list에 어떻게 표현 시킬 것인가?
  

  useEffect(() => {
    startList();
  }, []); // 페이지가 처음으로 불러오는 현상 ( 마운트 ) 이 때만 동작 되게 해달라!


  //랜더링이 더 이상 ( 개발자가 생각한 외에 발생 될 시 )
  // useEffect, useMemo, useCallBack 이 부분을 추가!!!! 없으면 그냥 건들지 마세요.!
  // 위의 기능들은 랜더를 억제하는 것을 목적!!! 많으면 많을수록 사이트가 느려집니다.
  function startList() {
    console.log('=== startList');
    areaList()
    .then(res => {
      console.log(res);
      setAreas(res.data.data);
    })
  }
 
  return (
    <div className="App">
      <input 
        type='text'
        placeholder='아이디 입력'
        value={아이디}
        onChange={e=> {
          변경아이디(e.target.value);
        }}
      />
      <input type='button' value='중복 체크' onClick={
        () => {
          let obj = new  Object();
          obj.id = 아이디;

          const check = memberIdCheck(obj);

          //성공!
          check.then(res => {
            console.log('===== 성공!!!');
            console.log(res);
          })

          //실패
          check.catch(err => {
            console.log(err);
          })
        }
      }/>

      <select>
        {areas.map((item, index) => (
          <option key={index} value={item.idx}>
            {item.areaName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Study;