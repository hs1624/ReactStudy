import { useState } from "react";
import { itemList } from "../api/Item";

export default function Study() {

    const [items, setItems] = useState([]);

    const categoryLists = [
        {id: '1', 'name': '도서'},
        {id: '2', 'name': '전자'},
        {id: '3', 'name': '생활'}
    ]

    function startItemList() {
        console.log('itemList');
        itemList()
        .then(res => {
            console.log(res);
            if(res.data.code == 200) {

            }
        })
    }

    useEffect(() => {
        startItemList();
    }, [])

    function categoryNum(num) {
        console.log('num: ', num);
    }

    return(
        <div>
            <h1>아이템 리스트</h1>
            {categoryLists.map(
                (item, index) => (
                    <div key={index}>
                        <a onClick={
                            e=> {
                                e.preventDefault();     //html 기본기능 멈추게 하기
                                categoryNum(item.id);
                            }
                        }>{item.name}</a>
                    </div>
                )
            )}
        </div>
    )
}