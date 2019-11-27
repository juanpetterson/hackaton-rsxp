import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {

  const [currentLevel,setCurrentLevel] = useState(1);

  function checkLevel(){
    var maxLevels = 3;
    for(let i = 0; i < maxLevels; i++){
      const level = window.localStorage.getItem(`lesson_${i+1}`);
      if(!level){
        console.log(i,i+1);
        setCurrentLevel(i+1);
        break;
      }
    }
  }

  useEffect(()=>{
    checkLevel();
  })

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={`/lessons/${currentLevel}`}>Ir para a lição {currentLevel}</Link>
    </div>
  );
}
