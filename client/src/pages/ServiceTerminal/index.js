import React, { useState } from 'react'
import Container from '../../components/Container/index'
import Button from '../../components/Button/index'
import io from 'socket.io-client'
import { v4 as uuid } from 'uuid'

import * as S from './styles'

const socket = io('http://localhost:8080', { transports: ['websocket'] })
socket.on('connect', () => console.log('[SOCKET] [SERVICE] => New Connection'))

const ServiceTerminal = () => {
  const id = uuid()

  const [password, setPassword] = useState()

  socket.on(`password.tv.${id}`, data => {
    setPassword(data)
  })

  const proxSenha = () => {
    socket.emit('password.next', id)
  }

  return (
    <Container>
      <S.FixarTela>
        <h1>Informe sua senha</h1>
        <S.SenhaAtualizada>{password}</S.SenhaAtualizada>
        <p>Clique para avançar para o próximo passo</p>
        <Button onClick={() => proxSenha()}>Próxima senha</Button>
      </S.FixarTela>
    </Container>
  )
}

export default ServiceTerminal
