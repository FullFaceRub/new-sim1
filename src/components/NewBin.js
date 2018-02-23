import React from 'react'

export default function NewBin(props) {
    return (
        <div>
            <button onClick={props.newBin}>Add Bin</button>
        </div>
    )
}