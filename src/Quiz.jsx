import React, { useState, useEffect } from 'react'
// import styles from './Quiz.modules.css'

function Quiz() {

    const [Questions, setQuestios] = useState([
        {
            Question: "What is capital of india",
            Options: [ {op1: "New delhi", b:1 }, {op2: "Mumbai", b:2}, {op3: "Kolkata", b:3}],
            Akey: 1,
            key: 1
        },
        {
            Question: "Who is prime minister",
            Options: [ {op1: "Modi", b:1},  {op2: "Gandhi", b:2},  {op3: "Nehru", b:3}],
            Akey: 1,
            key: 2
        },
        {
            Question: "What is our national bird",
            Options: [ {op1: "Pegion", b:1}, { op2: "Parrot", b:2}, { op3: "Peacock", b:3}],
            Akey: 3,
            key: 3
        },
        {
            Question: "Who is iron man of india",
            Options: [ {op1: "Bose", b:1}, {op2: "Sardar patel", b:2}, {op3: "Gandhi", b:3}],
            Akey: 2,
            key: 4
        },
    ])


    const AnswerKey = [1, 1, 3, 2]
    let i
    function questionList() {
        for(i=0; i<Questions.length; i++){
            const k = Questions[i]['Question']
            // console.log(k)
        }
    }
    questionList()
    const handlechange = (e) => {
        const bkey = e.target.attributes.getNamedItem('data-bbkey').value;
        console.log(e.currentTarget.innerText, bkey, e.currentTarget.value)
    }
    return (
        <h1>{Questions.map(Question => (
            <div key={Math.random() *10}>{Question.Question}
            <div>
             {Question.Options.map(option => 
                <button data-bbkey={option.b} key={Math.random() *10} value={Question.Akey} onClick={e => handlechange(e)}>{option.op1}{option.op2}{option.op3}</button>
            )}
            </div>
            </div>
        ))}</h1>
    )
}

export default Quiz
