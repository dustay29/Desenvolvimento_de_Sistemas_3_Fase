import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'



function App() {

  const [personagens, setPersonagens] = useState ([])
  const [nome, setNome] = useState ([])
  const [id, setId] = useState ([])
  const [status, setStatus] = useState ([])
  useEffect (() => {
    buscarPersonagem()
  }, [])

  

  async function buscarPersonagem() {
    try{
      let url = 'https://rickandmortyapi.com/api/character';

      const retorno = await axios.get(url);
      setPersonagens (retorno.data.results)
    }catch (erro){
      console.log ("erro")
  }
  }
  async function buscarPersonagemNome() {


  try{
    let name = `https://rickandmortyapi.com/api/character/?name=${nome}`;

    const retorno = await axios.get(name);
    setPersonagens (retorno.data.results)
  }catch (erro){
    console.log ("erro")
}
  }

  async function buscarPersonagemId() {


    try{
      let idPersonagem = `https://rickandmortyapi.com/api/character/${id}`;
  
      const retorno = await axios.get(idPersonagem);
      setPersonagens ([retorno.data])
    }catch (erro){
      console.log ("erro")
  }
    }

    async function buscarPersonagemStatus() {


      try{
        let statusPersonagem = `https://rickandmortyapi.com/api/character/?status=${status}`;
    
        const retorno = await axios.get(statusPersonagem);
        setPersonagens (retorno.data.results)
      }catch (erro){
        console.log ("erro")
    }
      }


  return (
    <>
    <div>
      <div>
    <input onChange= {(event) => setNome(event.target.value)} type="text" id="nome" placeholder="Digite um nome" />
    <button onClick={buscarPersonagemNome}>Buscar</button>
    valor do nome: {nome}
    </div>
    <div>
    <input onChange= {(event) => setId(event.target.value)} type="number" id="id" placeholder="Digite um ID" />
    <button onClick={buscarPersonagemId}>Buscar</button>
    valor do ID: {id}
    </div>
    <div>
    <input onChange= {(event) => setStatus(event.target.value)} type="text" id="status" placeholder="Digite um Status" />
    <button onClick={buscarPersonagemStatus}>Buscar</button>
    valor do nome: {status}
    </div>
      <h1>RICK AND MORTY</h1>
      {personagens.map((item) => (
        <div className='Info'>
        <img src={item.image} />
        <p>Id: {item.id}</p>
        <p>Nome: {item.name}</p>
        <p>Status: {item.status}</p>
        </div>
      )
    )}
    <p></p>
    </div>
    </>
  )
}

export default App
