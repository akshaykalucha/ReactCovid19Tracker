import React, { useState } from 'react'
// import { css } from 'emotion'
import  '../dynamicstyle/Card.module.css'


export default function Extra() {
    const [{count, count2}, setCount] = useState({count: 0, count2: '0'})
    const [input, setinput] = useState('')

    function updater() {
        console.log(count, count2, input)
        if(count === 0){
            console.log('c1 null')
            setCount(currentState => ({...currentState, count: input, count2: 0}))
            setinput('')
        }
        if(count2 === 0){
            console.log('c2 null')
            setCount(currentState => ({...currentState, count2: input}))
            setinput('')
        }
        if(count !==0 && count2 !== 0 && input !==0){
            setCount({count: count+ input, count2: count2 +input})
        }
        if(count !==0 && count2 !== 0 && input===0){
            setCount({count: count+ 1, count2: count2 +1})
        }
        if(count !==0 && count2 !== 0 && input===''){
            setCount({count: count+ 1, count2: count2 +1})
        }
    }
    const card = {
        maxWidth: "300px",
        padding: "40px",
        margin: "0 auto",
        backgroundColor: "white",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.40)",
        borderRadius: "12px"
    }


    const name = ['SetFirst Value', 'SetSecond Value', "Increase"]
    const nameSelector = () => {
        if(count===0){
            return name[0]
        }else if(count2===0){
            return name[1]
        }else return name[2]
    }

    return (
        <div style={card}>
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <input type="text" name="number" value={input} onChange={e => setinput(parseInt(e.target.value) || '')}></input>
            <button onClick={updater}>{nameSelector()}</button><small>Default=1</small><br />
            <button onClick={
                () => {
                    setCount({count: 0, count2: '0'});
                    setinput('')    
                }
            }>Reset</button>
        </div>
    )
}
