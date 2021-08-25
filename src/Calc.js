import React, {useState , useEffect} from 'react'
//Components
import History from "./History";
//Styles
import './calc.css'


const Calc = () => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [operator, setOperator] = useState("addition")
    const [result,   setResult] = useState("")
    const [history, setHistory] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            },
            redirect: 'follow'
        };

        fetch("https://dry-dawn-14885.herokuapp.com/history", requestOptions)
            .then(response => response.json())
            .then(result => setHistory(result.records))
            .catch(error => console.log('error', error));

    }, []);

    const InitValue1 = (e) => {
        setValue1(e.target.value)
    }
    const InitValue2 = (e) => {
        setValue2(e.target.value)
    }
    const Operator = (e) => {
        e.preventDefault()
        setOperator(e.target.value)
    }

    const Calculate = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Accept": "application/json",
            },
        };
         fetch(`https://dry-dawn-14885.herokuapp.com/${operator}/?x=${value1}&y=${value2}`, requestOptions)
             .then(response => response.text())
             .then(result => setResult(result))
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
    return (
        <div className='center'>
            <h1 className=''>Calculator App</h1>
            <form className='calculation'>
                <div className='inputbox'>
                    <input onChange={InitValue1}  value={value1} type="text" required="required"/>
                    <span>input your first value</span>
                </div>
                <div className='inputbox'>
                    <select value={operator} onChange={Operator}>
                        <option value="addition">+</option>
                        <option value="deduction">-</option>
                        <option value="multiplication">*</option>
                        <option value="division">/</option>
                    </select>
                </div>
                <div className='inputbox'>
                    <input value={value2} onChange={InitValue2} type="text" required="required"/>
                    <span>input your second value</span>
                </div>
                <div className='inputbox'>
                    <input type='button' className='result_button' onClick={Calculate} value='='/>
                </div>
                <div className='inputbox'>
                    <div className='result'>{result}</div>
                </div>
                <h1 className='title'>History List</h1>
                <div className='history_wrapper'>
                    {history.map(item => <History setresult={setResult} setvalue1={setValue1} setvalue2={setValue2} setoperation={setOperator} setHistory={setHistory} key={item.id} items={item}/>)}
                </div>
            </form>

        </div>
    )
}
export default Calc
