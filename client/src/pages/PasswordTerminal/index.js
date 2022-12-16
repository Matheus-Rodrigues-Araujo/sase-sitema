import React, { useState } from 'react'
import io from 'socket.io-client'

import Container from '../../components/Container'
import Button from '../../components/Button'

import * as S from './styles'

const socket = io('http://localhost:8080', { transports: ['websocket'] })
socket.on('connect', () => console.log('[SOCKET] [USER] => New Connection'))

const PasswordTerminal = () => {
  const [SenhaAtualizada, setSenhaAtualizada] = useState()
  const [thanksButton, setThanksButton] = useState(false)

  const selectPassword = category => {
    socket.emit('password.send', category)
    setThanksButton(true)
  }

  socket.on('object.passwords', data => {
    const allPasswords = data['all']
    setSenhaAtualizada(allPasswords[allPasswords.length - 1])
  })

  const showText = () => {
    return (
      thanksButton && (
        <S.SenhaAtualizada>
         Senha pessoal: <span>{SenhaAtualizada}</span>
        </S.SenhaAtualizada>
      )
    )
  }

  const showPassword = () => {
    return (
      <>
        <S.FixarTelaButtons>
          {thanksButton ? (
            <Button onClick={() => setThanksButton(false)}>Agradeço!</Button>
          ) : (
            <>
              <Button onClick={() => selectPassword('normal')}>Normal</Button>
              <Button onClick={() => selectPassword('prioritary')}>
                Prioritária
              </Button>
            </>
          )}
        </S.FixarTelaButtons>
        {showText()}
      </>
    )
  }

  return (
    <Container>
      <S.FixarTela>
        <h1>Selecione sua senha</h1>
        {showPassword()}
      </S.FixarTela>
    </Container>
  )
}

export default PasswordTerminal
