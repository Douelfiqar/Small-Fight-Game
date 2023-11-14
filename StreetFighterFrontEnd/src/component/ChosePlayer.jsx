import React, { useState } from 'react'
import styled from 'styled-components'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import KnightPicture from '../assets/KnightPicture1.png'
import WizardPicture from '../assets/WizardPicture.png'
import map1 from '../assets/background1.webp'
import map2 from '../assets/background2.webp'
import map3 from '../assets/background3.webp'
import axios from 'axios';

export const ChosePlayer = () => {
    let [player, setPlayer] = useState(0)
    let [map, setMap] = useState(0)
    let [playerChoosed, setPlayerChoosed] = useState("");
    let [mapChoosed, setMapChoosed] = useState("");
    const players = []
    players.push(KnightPicture)
    players.push(WizardPicture)
    const maps = []
    maps.push(map1)
    maps.push(map2)
    maps.push(map3)

    let [playerName, setPlayerName] = useState("")

    const incrementMap = () => {
        if(map<2)
            setMap(++map)
        else{
            setMap(0)
        }
    }
    const MappingPlayer = () => {
        if(player === 0)
            setPlayer(1)
        else if(player === 1){
            setPlayer(0)
        }
    }

    const decrementMap = () => {
        if(map>0)
            setMap(--map)
        else{
            setMap(2)
        }
    }
    const choosePlayerFunction = () => {
        if(player === 0){
            setPlayerChoosed("Knight")
        }else if(player === 1){
            setPlayerChoosed("Wizard")
            
        }
    }

    const chooseMapFunction = () => {
        setMapChoosed(maps[map])
    }

    const start = async () => {
        const resp = await axios.get("http://localhost:8080/demo5/hello-servlet", {
            params: {
                playerName: playerName,
                playerChoosed : playerChoosed,
                mapChoosed : mapChoosed
            }})

            console.log(resp);
    }
  return (
    <Wrapper>
        
            <div className='flex gap-64'>
                <div className='flex flex-col'>

                    {player === 0 && <p className='text-3xl tracking-widest text-blue-950 capitalize text-center weight ml-10 font-semibold mb-12'>Knight</p>}
                    {player === 1 && <p className='text-3xl tracking-widest text-blue-950 capitalize text-center font-semibold mb-12'>Wizard</p>}
                    
                    <div className='flex justify-center items-center h-80'>
                    <GoChevronLeft className={playerChoosed === "" ?"icon" : "hidden" } onClick={()=>{MappingPlayer()}} />
                    <img src={players[player]} />
                    <GoChevronRight className={playerChoosed === "" ?"icon" : "hidden" } onClick={()=>{MappingPlayer()}}/>
                    </div>

                    <input value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />

                    <button onClick={()=>{choosePlayerFunction()}} className={playerChoosed === "" ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 rounded shadow mt-12" : "hidden"}>Choose Player</button>

                </div>
                <div className='flex flex-col'>
                    {map === 0 && <p className='text-3xl tracking-widest text-blue-950 capitalize text-center weight ml-10 font-semibold mb-12'>Ayutthaya Ruins</p>}
                    {map === 1 && <p className='text-3xl tracking-widest text-blue-950 capitalize text-center font-semibold mb-12'>Temple Hideout</p>}
                    {map === 2 && <p className='text-3xl tracking-widest text-blue-950 capitalize text-center font-semibold mb-12'>Flamenco Tavern</p>}
                    <div className='flex justify-center items-center h-80'>
                        <GoChevronLeft className={mapChoosed === "" ?"icon" : "hidden" } onClick={() => decrementMap()} />
                        <img width={600} height={600} className='object-cover rounded-md' src={maps[map]} />
                        <GoChevronRight className={mapChoosed === "" ?"icon" : "hidden" } onClick={() => incrementMap()} />
                    </div>

                    <button onClick={()=>{chooseMapFunction()}} className={mapChoosed === "" ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 ml-6 border border-gray-400 rounded shadow mt-12" : "hidden"}>Choose Map</button>
                </div>
            </div>

            <div className="flex justify-center items-center">
            <button onClick={()=>{start()}} className={(mapChoosed === "" || playerChoosed === "") ? "hidden" : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-28 ml-6 border border-gray-400 rounded shadow mt-20"}>Start</button>
            </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    .icon{
        cursor: pointer;
        font-size: 50px;
    }
`