import React from 'react'

const HistoryItem = ({item}) => {
    return (
        <div style={{display:'flex'}}>
            <p>{item.x}</p>
            <p>{item.operation}</p>
            <p>{item.y}</p>
            <p>=</p>
            <p>{item.result}</p>
            <button>X</button>
            <button>UPD</button>
        </div>
    )
}

export default HistoryItem
