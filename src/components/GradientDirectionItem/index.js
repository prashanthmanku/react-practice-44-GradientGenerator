import {DirectionBtn, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, activeDirection} = props
  const {value, displayText} = directionDetails
  const isActiveBtn = activeDirection === value

  const onChangeDirection = () => {
    changeDirection(value)
  }
  return (
    <DirectionItem>
      <DirectionBtn
        type="button"
        onClick={onChangeDirection}
        isActiveBtn={isActiveBtn}
      >
        {displayText}
      </DirectionBtn>
    </DirectionItem>
  )
}
export default GradientDirectionItem
