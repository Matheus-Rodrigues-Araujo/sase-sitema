const koa = require('koa')
const http = require('http')
// import
const socket = require('socket.io')

const app = new koa()
const server = http.createServer(app.callback())
const io = socket(server)

const SERVER_HOST = 'localhost'
const SERVER_PORT = 8080

const passwords = {
  normal: [],
  prioritary: [],
  all: []
}

// normal
let N = 1
//preferencial
let P = 1
//contador
let counter = 0

const getNormalPassword = () => {
  const value = `N${N++}`
  passwords['normal'].push(value)

  passwords['all'].push(value)
}

const getPrioritaryPassword = () => {
  const value = `P${P++}`
  passwords['prioritary'].push(value)

  passwords['all'].push(value)
}

const receiveData = data => {
  data === 'normal' ? getNormalPassword() : getPrioritaryPassword()
}

const proxSenha = (data, primSenha) => {
  io.sockets.emit('password.next', primSenha)
  io.sockets.emit('password.tv.update', primSenha)
  io.sockets.emit(`password.tv.${data}`, primSenha)

  console.log(`Socket do servidor => Próxima senja ${primSenha}`)
}

io.on('connection', socket => {
  console.log('[IO - CLIENT] Connection => Servidor com nova conexão')

  socket.on('password.send', data => {
    console.log('Nova senha ', data)

    receiveData(data)
    io.sockets.emit('object.passwords', passwords)
  })

  socket.on('password.next', data => {
    const primSenha = passwords['all'][0]

    const isRegularPass = primSenha?.startsWith('N') && counter < 2

    if (isRegularPass) {
      proxSenha(data, primSenha)
      passwords['all'].splice(0, 1)

      counter++
    } else {
      for (let i = 0; i <= passwords['all'].length; i++) {
        const primSenha = passwords['all'][i]

        if (passwords['all'][i]?.startsWith('P')) {
          proxSenha(data, primSenha)
          passwords['all'].splice(i, 1)
          counter = 0
          break
        }
      }

      counter = 0
    }
  })

  socket.on('disconnect', () => {
    console.log('O socket do usuário foi desconectado')
  })
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log('Servidor rodando')
})

server.off('server.off', () => {
  console.log('Servidor parando.')
})
