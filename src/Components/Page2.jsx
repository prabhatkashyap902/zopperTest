import React from 'react'

export default function Page2(props) {
    var temp = props.location.state.data
    return (
        <div>
            <h1>Welcome {temp.name}</h1>
            <h3>Your Id is : {temp.id}</h3>
            <h3>Created on:{temp.createdAt}</h3>

        </div>
    )
}
