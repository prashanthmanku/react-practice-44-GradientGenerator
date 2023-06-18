import styled from 'styled-components'

export const DirectionItem = styled.li`
  margin: 0px 5px 10px 5px;

  flex-grow: 1;
  max-width: 100px;
`

export const DirectionBtn = styled.button`
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ##334155;
  font-size: 14px;
  font-weight: 400;
  opacity: ${props => (props.isActiveBtn ? 1 : 0.5)};
`
