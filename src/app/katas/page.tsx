
"use client";

import React from "react";
import Link from "next/link" 
import { kataLibrary } from "./katalibrary/kataLibrary"
import KataList from "../components/KataList";
import { useState } from "react";



export default  function katas() {
function selectCategory (e) {
  const category  = e.target.value
  setCategory(category)
}
function selectDifficulty (e) {

  const difficulty = e.target.value
  setDifficulty(difficulty)
}
const [difficulty, setDifficulty] = useState('all')
    const [category, setCategory] = useState('all')

 
    return (
        <div className="my-10 w-5/6 mx-auto " >
        
      
    <h1 className="p-5 -lg bg-grey-300 text-xl p-2 text-primary  ">List of Katas</h1>
  <div className="flex flec-row">
    <select className=" bg-grey-300"name="difficulty" id="difficulty" onChange={(e)=> { selectDifficulty(e)}}>
    <option value="all">All</option>
  <option value="Easy">Easy</option>
  <option value="Moderate">Moderate</option>
  <option value="Hard">Hard</option>
</select>

<select className=" bg-grey-300"name="catogery" id="catogery" onChange={(e)=> { selectCategory(e)}}>
    <option value="all">All</option>
  <option value="Maths">Maths</option>
  <option value="Arrays and Objects">Arrays and Objects</option>
  <option value="Strings">Strings</option>
</select>
</div>
<ul className = " bg-grey-100 flex flex-col jp-4  p-5 bg-grey-300 border-solid ">

  <KataList difficulty={difficulty} category={category}/>

  
 
  </ul>
</div>

    )
    







