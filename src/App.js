import Header from './components/Header';
import Form from './components/Form';
import UpperCase from './components/UpperCase';
import LowerCase from './components/LowerCase';
import SpecialCharacters from './components/SpecialCharacters';
import Numbers from './components/Numbers';
import Button from './components/Button';
import PasswordGenerator from './components/PasswordGenerator';
import {inumbers, uppercaseletters, lowercaseletters, specialcharacterletters} from './characters'
import React,{useState} from 'react';

function App() {

  const [key, setKey] = useState('')
  const [length, setLength] = useState(15)
  const [uppercase, setUpperCase] = useState(true)
  const [lowercase, setLowerCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [specialcharacters, setSpecialCharacters] = useState(false)

  const generatepass =(e) =>{

    let charsList = ''
    if(uppercase){
      charsList= charsList + uppercaseletters
    
    }
    if(lowercase){
      charsList= charsList + lowercaseletters
    
    }

    if(numbers){
      charsList = charsList + inumbers;
    }

    if(specialcharacters){
      charsList = charsList + specialcharacterletters
    }

    if(!uppercase && !lowercase && !numbers && !specialcharacters)
    {
      alert('please select one or multiple checkboxes below')
    }
    setKey(createPassword(charsList))

  }

  const createPassword = (charsList) => 
  { 
    let password = ''
    const len = charsList.length

    for(let i = 0; i<length; i++)
    {
      const index = Math.round(Math.random()*len)
      password = password + charsList.charAt(index)
    }
    return password
  }

/*
const Form = () => {
  return (
      <div>
          <label htmlFor="password length">Password Length</label>
          <input defaultValue={length} onChange={(e) => setLength(e.target.value)}
          type='number' id='password length' name='password length' max='15' min='10'/>
      </div>
  )
}

/*
const LowerCase = () => {
  return (
      <div>
          <label htmlFor="lowercase">Include LowerCase Characters</label>
          <input
          checked={lowercase} onChange={(e) =>setLowerCase(e.target.checked)}
           type='checkbox' id='lowercase' name='lowercase' />
      </div>
  )
}
*/
/*
const Numbers = () => {
  return (
      <div>
          <label htmlFor="includenumbers">Include Numbers</label>
          <input
          checked={numbers} onChange={(e) =>setNumbers(e.target.checked)}
           type='checkbox' id='includenumbers' name='includenumbers'/>
      </div>
  )
}
/*

const UpperCase = () => {
    
  return (
      <div>
          <label htmlFor="uppercase">Include UpperCase Characters</label>
          <input checked={uppercase} onChange={(e) => setUpperCase(e.target.checked)}
          type='checkbox' id='uppercase' name='uppercase' />
      </div>
  )
}
*/

/*
const SpecialCharacters = () => {

  return (
      <div>
          <label htmlFor="specialcharacters">Include Special Characters</label>
          <input
          checked={specialcharacters} onChange={(e) =>setSpecialCharacters(e.target.checked)}
           type='checkbox' id='incspecialcharacters' name='incpecialcharacters' />
      </div>
  )
}

*/

/*
<form className='password-typer'>
        <div className='password-controller'>
          <label>{key}</label>
          <input type='text' />
        </div>
      </form>
*/


  return (
     <div className="container" style={{backgroundImage: "url(/passwordgen.jpeg)"}}>
     
      <Header />
      
      <PasswordGenerator pass={key} />
      <Form len={length} onDelete={setLength}/>
      <UpperCase upper={uppercase} onDelete={setUpperCase}/>
      <LowerCase lower={lowercase} onDelete={setLowerCase}/>
      <SpecialCharacters special={specialcharacters} onDelete={setSpecialCharacters}/>
      <Numbers num={numbers} onDelete={setNumbers}/>
      <Button onDelete={generatepass} />

  
      
    </div>
  );
}

export default App;
