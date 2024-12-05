import { useEffect, useState } from 'react';
import { itemList,itemGood } from '../api/Item';
import ItemArea from './ItemArea'

export default function Study() {

    const [ items, setItems] = useState([]);
    const [ categoryId, setCategoryId] = useState(0);
    const [ keyword, setKeyword] = useState('');

    const categoryLists = [
        {id: '0', 'name': '전체'},
        {id: '1', 'name': '도서'},
        {id: '2', 'name': '전자'},
        {id: '3', 'name': '생활'}
    ]

    //JavaScript의 오버로딩
    //Java는 오버로딩이 필요한 갯수만큼 method를 만들면.
    //JavaScript는 필요 없으면 생략.
    function startItemList(seachItem) {
        itemList(seachItem)
        .then(res => {
            console.log(res);
            if(res.data.code == 200) {
                setItems(res.data.data);
                console.log(res.data.data);
            }
        })
    }

    useEffect(() => {
        startItemList();
    }, [])

    //useState가 변화를 감지할 경우, 해당 event가 동작 되도록 정의
    //이 부분 사용 할 때, [무한루프] 조심 하세요.
    useEffect(() => {
        searchBtn();
    }, [keyword]);

    //카테고리 검색
    function categoryNum(num) {
        console.log('num : ', num);

        let param = new Object();
        param.categoryIdx = num;
        
        startItemList(param);

    }

    /** 검색 버튼 */
    function searchBtn() {
        let param = new Object();
        param.keyword = keyword;
        console.log(param)
        startItemList(param)
    }

    //item 추천 값 올리기
    function changeItem(idx) {
        const copyItems = [...items];
        copyItems[idx-1] = { ...copyItems[idx-1], good: copyItems[idx-1].good+1 };
        setItems(copyItems);

        let obj = new Object();
        obj.itemIdx = idx;
        itemGood(obj)
        .then(res => {
            console.log(res);
        })
    }



    return(
        <div>
            <h1>ItemList</h1>
            {/** Item Category */}
            {categoryLists.map(
                (item, index) => (
                    <div key={index}>
                        <a onClick={
                            e=> {
                                e.preventDefault();
                                categoryNum(item.id);
                            }
                        }>{item.name}</a> <br/><br/>
                    </div>
                )
            )}

            <input
            type='text'
            placeholder='Search'
            value={keyword}
            onChange={
                e=>setKeyword(e.target.value)
            }/>

            <input
            type='button'
            value='검색' 
            onClick={searchBtn}/>

            {/** Item List */}
            {items.map(
                (item, index) => (
                    <ItemArea key={index} item={item} index={index} onGoodUp={
                        (idx) => {
                            console.log(`부모 : ${idx}`);
                            const copy = items.copy;
                            changeItem(idx)
                        }
                    }>
                    </ItemArea>
                )
            )}
        </div>
    )
}