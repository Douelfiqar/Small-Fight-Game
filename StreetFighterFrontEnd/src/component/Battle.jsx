import React, { useEffect } from 'react'
import backgound from '../assets/background1.webp'
import player1 from '../assets/PLAYER1.png'
import player2 from '../assets/PLAYER2.png'


import styled from 'styled-components'
import axios from 'axios'

export const Battle = () => {
    let canvas;
    let ctx;
    let CANVAS_WIDTH
    let CANVAS_HEIGHT
    
    const playerImage = new Image();
    playerImage.src = player1

    const spriteWidth = 70;
    const spriteHeight = 65;
    let frameX = 0
    let frameY = 1
    let gameFrame = 0
    const staggerFrames = 5
    let counter2 = 0
    const annimationTime = 60

    let canvas1 ;
    let ctx1 
    
    
    let CANVAS_WIDTH1 
    let CANVAS_HEIGHT1
    
    const playerImage1 = new Image();
    playerImage1.src = player2
    const spriteWidth1 = 82;
    const spriteHeight1 = 87;
    let frameX1 = 0
    let frameY1 = 3
    let gameFrame1 = 0
    const staggerFrames1 = 5
    let count = 0;


    function animate1(){
        
        
        ctx1.clearRect(0, 0, CANVAS_WIDTH1, CANVAS_HEIGHT1);
    
        let position1 = Math.floor(gameFrame1/staggerFrames1) % 4;
        if(position1 === 0){
            count ++;
        }
        if(count === 2){
            frameY1 = 3
            count=0
        }
    
        frameX1 = spriteWidth1 * position1;

        ctx1.drawImage(playerImage1, frameX1, frameY1 * spriteHeight1, spriteWidth1, spriteHeight1, 0, 0, CANVAS_WIDTH1, CANVAS_HEIGHT1)
        gameFrame1++;
    
        setTimeout(function () {
            requestAnimationFrame(animate1);        
        }, annimationTime); 
    }

    function animate(){
    
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    
        let position = Math.floor(gameFrame/staggerFrames) % 6;
        if(position === 0){
            counter2 ++;
        }
        if(counter2 === 2){
            frameY = 1
            counter2=0
        }
        frameX = spriteWidth * position;
        // ctx.drawImage(playerImage, 100 , 100)
        ctx.drawImage(playerImage,frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        //gameFrame++;
        gameFrame++;
        setTimeout(function () {
            requestAnimationFrame(animate);
        }, 100); 
    }

    useEffect(()=>{
        canvas = document.getElementById("chompion1");
        ctx = canvas.getContext('2d')

        CANVAS_WIDTH = canvas.width = 600;
        CANVAS_HEIGHT = canvas.height = 600;
        

        canvas1 = document.getElementById("chompion2");
        ctx1 = canvas1.getContext('2d')

        CANVAS_WIDTH1 = canvas1.width = 600;
        CANVAS_HEIGHT1 = canvas1.height = 600;
        
        animate()
    
    
        animate1()
        
    }, [])
   
    const attackButtonFunction = async (e) => {
        e.preventDefault()
        frameY1 = 0
        frameY =3
        const response = await axios.get("http://localhost:8080/demo5/hello-servlet") 
    }

  return (
        <Wrapper>

            <div id="map">  
                <img id="mapImg" src={backgound} alt="" />
                <canvas id="chompion1"></canvas>
                <canvas id="chompion2"></canvas>
            </div>
            
            <div className="Character">
                <div className="enemy-side"></div>
                <div className="player-side">
                    <div ontouchstart="">
                        <div className="button">
                        <a id="attack-button" onClick={(e)=>attackButtonFunction(e)}> Attack</a>
                        </div>
                    </div>
                </div>
            </div>

        </Wrapper>
  )
}


const Wrapper = styled.div`
height: 100vh;
    img{
        width: 100vw;
    }
    #chompion1{
    position: relative;
    transform: scale(80%, 80%);
    z-index: 1;
    left: 350px;
    }

    #chompion2{
        position: relative;
        transform: scale(80%, 80%);
        right: -660px;
        top: -570px;
        z-index: 1;
    }

    #mapImg{
        width: 100%;    
        height: 70vh;
        object-fit: cover;
        position: absolute;
    }
        
    .Character{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -500px;
        /* margin-top: 350px; */
    }

    .enemy-side{
        width: 30vw;
        height: 20vh;
    }
    .player-side{
        width: 25vw;
        height: 20vh;
    }

    /* attack button */
    .button{
        position:relative;
        display:inline-block;
        margin:20px;
        cursor: pointer;
    }
    
    .button a{
        color:white;
        font-family:Helvetica, sans-serif;
        font-weight:bold;
        font-size:36px;
        text-align: center;
        text-decoration:none;
        background-color:#701939;
        display:block;
        position:relative;
        padding:20px 40px;
        
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-shadow: 0px 1px 0px #000;
        filter: dropshadow(color=#000, offx=0px, offy=1px);
        
        -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #701939;
        -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #701939;
        box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #701939;
        
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    
    .button a:active{
        top:10px;
        background-color:#F78900;
        
        -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #701939;
        -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #701939;
        box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #701939;
    }
    
    .button:after{
        content:"";
        height:100%;
        width:100%;
        padding:4px;
        position: absolute;
        bottom:-15px;
        left:-4px;
        z-index:-1;
        background-color:#2B1800;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
`