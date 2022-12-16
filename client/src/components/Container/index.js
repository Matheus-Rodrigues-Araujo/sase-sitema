import React from 'react'
import FixarTela from './styles'
import {Link} from 'react-router-dom'

const Container = ({ children }) => {
  return <FixarTela>
  Sistema SASE - N2
  <div style={{fontSize: '2rem', display: 'flex', gap: '1em'}}>
    <Link to='/' style={{color: 'yellow'}} >Home</Link>
    <Link to='/service' style={{color: 'yellow'}}>Serviço</Link>
    <Link to='/display' style={{color: 'yellow'}}>Exibição</Link>
  </div>
  {children}
  </FixarTela>
}

export default Container
