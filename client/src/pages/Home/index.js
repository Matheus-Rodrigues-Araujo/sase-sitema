import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import Button from '../../components/Button'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = path => {
    navigate(path)
  }

  return (
    <Container>
      <Button onClick={() => handleNavigate('/password')}>
        Terminal - Senha
      </Button>
      <Button onClick={() => handleNavigate('/service')}>
        Terminal - Serviço 
      </Button>
      <Button onClick={() => handleNavigate('/display')}>
        Terminal - Exibição
      </Button>
    </Container>
  )
}

export default Home
