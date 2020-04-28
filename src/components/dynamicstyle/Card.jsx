import React, { useState } from 'react'
// import styles from './Card.module.css';
import { css } from 'emotion'


const Card = () => {
    const [backgroundColor, setBackgroundColor] = useState("#fdfdfd")

    const [font, setFont] = useState("#424246")

    const setStyle = (background, font) => {
        setBackgroundColor(background);
        setFont(font)
    }

    const card = css`
        max-width: 600px;
        padding: 40px;
        background-color: ${backgroundColor};
        margin: 0 auto;
        transition: .5s;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.40);
        border-radius: 12px;
        h1{
            font-family: "Abril-Fatface";
            font-weight: 400;
            font-size: 36px;
            margin-bottom: 10px;
            color: ${font}
        }
        P{
            font-family:"Poppins". sans-serif;
            font-weight: 100;
            font-size: 16px;
            margin-bottom: 20px;
            color: ${font};
        }
    `
    const cardButtons = css`
        button{
            font-family: "Poppins". sans-serif;
            font-weight: 500;
            font-size: 12px;
            padding: 10px 30px;
            margin-right: 20px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
        }
    `

    const BlackButton = css`
        color: #fdfdf4;
        background-color: #424246;
    `

    const BlueBotton = css`
        color: #fdfdfd;
        background-color: #1d499b
    `
    const yellowButton = css`
        color: #424246;
        background-color: #f9d648
    `

    return(
        <div className={card}>
            <h1>This is Sample React Hook Example</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi quasi. Nam dolorum exercitationem at sit veniam vel ullam, quaerat molestiae minus repellendus qui quasi illo recusandae sequi voluptatum necessitatibus earum cupiditate error iste nihil, ipsum dolor pariatur. Repudiandae eveniet alias pariatur dolor totam fugiat minima autem tempora similique expedita.</p>
            <div className={cardButtons}>
                <button onMouseEnter={() => setStyle("#424246", "#fdfdfd")} onMouseOut={() => setStyle("#fdfdfd", "#424246")} className={BlackButton}>Black</button>
                <button onMouseEnter={() => setStyle("#1d499b", "#fdfdfd")} onMouseOut={() => setStyle("#fdfdfd", "#424246")} className={BlueBotton}>Blue</button>
                <button onMouseEnter={() => setStyle("#f9d648", "#424246")} onMouseOut={() => setStyle("#fdfdfd", "#424246")} className={yellowButton}>Yellow</button>
            </div>
        </div>
    )
}

export default Card;
