import styled from 'styled-components'

export const SystemButton = styled.button`
  border-radius: 5px;
  text-transform: uppercase;

  padding: 0 10px;
  color: var(--white);
  height: 120px;
  width: 120px;
  font-weight: 700;
  border-radius:1em;
  background-color: var(--btnBlack);
  transition: 0.5s;
  cursor: pointer;
  font-size: 1.1rem;
  transition: .4s ease-in-out;
  margin-inline: 5px;

  &:hover {
    background-color: green;
  }
`
