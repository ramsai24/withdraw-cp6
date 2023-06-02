// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, onLess} = props

  const onDeduct = () => {
    onLess(item.id, item.value)
  }
  return (
    <li>
      <button className="value-btn" type="button" onClick={onDeduct}>
        {item.value}
      </button>
    </li>
  )
}

export default DenominationItem
