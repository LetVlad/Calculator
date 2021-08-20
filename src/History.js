import React from 'react'
import './calc.css'


const History = ({items, setHistory, setvalue1, setvalue2, setoperation, setresult}) => {

    const Delete = (e) => {
        e.preventDefault()

        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
            },
            redirect: 'follow'
        };

        fetch(`https://dry-dawn-14885.herokuapp.com/clearHistory/?id=${items.id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        const requestOptionsH = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            },
            redirect: 'follow'
        };

        fetch("https://dry-dawn-14885.herokuapp.com/history", requestOptionsH)
            .then(response => response.json())
            .then(result => setHistory(result.records))
            .catch(error => console.log('error', error));

    }
    const Update = (e) => {
        e.preventDefault()

        setvalue1(items.x)
        setvalue2(items.y)
        setoperation(items.operation)
        setresult(items.result)

        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
            },
            redirect: 'follow'
        };

        fetch(`https://dry-dawn-14885.herokuapp.com/clearHistory/?id=${items.id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        const requestOptionsH = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            },
            redirect: 'follow'
        };

        fetch("https://dry-dawn-14885.herokuapp.com/history", requestOptionsH)
            .then(response => response.json())
            .then(result => setHistory(result.records))
            .catch(error => console.log('error', error));



    }

    const operator = items.operation

    return(
        <div>
            <div className='history_item' style={{display:'flex'}}>
                <p>{items.x}</p>
                <p>{operator === 'addition' ? '+' : operator === 'deduction' ? '-' : operator === 'multiplication' ? '*': operator === 'division' ? '/' : 'unknown operator'}</p>
                <p>{items.y}</p>
                <p>=</p>
                <p>{items.result}</p>
                <button onClick={Delete}>&#10008;</button>
                <button onClick={Update}>&#9998;</button>
            </div>
        </div>
    )
}
export default History
