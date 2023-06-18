import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const WidthContainer = styled.div`
  width: 90%;
`

export const MainHeading = styled.h1`
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 50px;
`

export const ChooseDirectionHeadin = styled.p`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
  margin: 35px 0px 10px 0px;
`
export const UnorderListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

// export const PickColorHeading = styled.h1``

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const InputContainer = styled.div`
  margin: 0px 20px;
`

export const HexCode = styled.p`
  color: #ededed;
  font-size: 12px;
  font-weight: 400;
`

export const Input = styled.input`
  padding: 0px;
  border: none;
  background-color: transparent;
  outline: none;
  width: 70px;
  height: 35px;
  cursor: pointer;
`

export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  margin-top: 25px;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`
