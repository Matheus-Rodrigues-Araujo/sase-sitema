import React, { useState } from 'react'
import Container from '../../components/Container'
import io from 'socket.io-client'

import * as S from './style'

const socket = io('http://localhost:8080', { transports: ['websocket'] })
socket.on('connect', () =>
  console.log('Socket de exibição, nova conexão criada')
)

const DisplayTerminal = () => {
  const [password, setPassword] = useState()

  socket.on('password.tv.update', data => {
    setPassword(data)
  })

  return (
    <Container>
      <S.FixarTela>
        <S.Title>Senha atual</S.Title>
        <S.SenhaAtualizada>{password}</S.SenhaAtualizada>
      </S.FixarTela>
    </Container>
  )
}

export default DisplayTerminal
