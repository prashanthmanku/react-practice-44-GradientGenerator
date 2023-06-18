import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  WidthContainer,
  MainHeading,
  ChooseDirectionHeadin,
  InputsContainer,
  InputContainer,
  HexCode,
  Input,
  GenerateBtn,
  UnorderListContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    userInputColor1: '#8ae323',
    userInputColor2: '#014f7b',
    userSelectedDiretion: gradientDirectionsList[0].value,
    activeDirection: gradientDirectionsList[0].value,
    activeColor1: '#8ae323',
    activeColor2: '#014f7b',
  }

  onChangeColor1 = e => {
    this.setState({
      userInputColor1: e.target.value,
    })
  }

  onChangeColor2 = e => {
    this.setState({
      userInputColor2: e.target.value,
    })
  }

  changeDirection = value => {
    this.setState({userSelectedDiretion: value})
  }

  onGenerateGradient = () => {
    const {userInputColor1, userInputColor2, userSelectedDiretion} = this.state
    console.log('ll')
    this.setState({
      activeColor1: userInputColor1,
      activeColor2: userInputColor2,
      activeDirection: userSelectedDiretion,
    })
  }

  render() {
    const {
      userInputColor1,
      userInputColor2,
      activeDirection,
      activeColor1,
      activeColor2,
      userSelectedDiretion,
    } = this.state
    return (
      <AppContainer
        color1={activeColor1}
        color2={activeColor2}
        direction={activeDirection}
        data-testid="gradientGenerator"
      >
        <WidthContainer>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <ChooseDirectionHeadin>Choose Direction</ChooseDirectionHeadin>
          <UnorderListContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                directionDetails={each}
                key={each.directionId}
                changeDirection={this.changeDirection}
                activeDirection={userSelectedDiretion}
              />
            ))}
          </UnorderListContainer>
          <ChooseDirectionHeadin>Pick the Colors</ChooseDirectionHeadin>
          <InputsContainer>
            <InputContainer>
              <HexCode>{userInputColor1}</HexCode>
              <Input
                type="color"
                value={userInputColor1}
                onChange={this.onChangeColor1}
              />
            </InputContainer>
            <InputContainer>
              <HexCode>{userInputColor2}</HexCode>
              <Input
                type="color"
                value={userInputColor2}
                onChange={this.onChangeColor2}
              />
            </InputContainer>
          </InputsContainer>
          <GenerateBtn type="button" onClick={this.onGenerateGradient}>
            Generate
          </GenerateBtn>
        </WidthContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
