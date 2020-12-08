import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import "../css/main.css";
import Body from "./Body";
import Header from "./Header";

export default function Page1() {

    const [change, setChange] = useState(false);
    const [data, setData] = useState();
    function changePage(data) {
        console.log(data);

        setData(data)
        setChange(true);
    }
    if (change) return <Redirect to={{
        pathname: '/Page2',
        state: { data: data }
    }} />
    return (
        <div className="App">
            <Header />
            <Body redirect={changePage} />
        </div>
    )
}
