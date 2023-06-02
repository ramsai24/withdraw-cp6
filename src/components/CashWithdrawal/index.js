// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000, initialName: 'Sarah Willianms'}

  onDeduction = (id, value) => {
    const {denominationsList} = this.props
    console.log(denominationsList)
    console.log(id, value)

    // const {balance} = this.stat

    // this.setState(prestate => ({
    //   balance: prestate.balance - value,
    // }))

    this.setState(prevState => {
      if (prevState.balance <= 0) {
        return {balance: 0}
      }
      return {balance: prevState.balance - value}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {initialName, balance} = this.state
    console.log(denominationsList)
    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="profile-name-container">
            <p className="initialLetter">{initialName[0]}</p>
            <p>{initialName}</p>
          </div>
          <div className="balance-container">
            <h1 className="your-balance">Your Balance</h1>
            <div>
              <h1 className="balance">{balance}</h1>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <h1 className="withdraw-heading">Withdraw</h1>
            <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-container-btn">
              {denominationsList.map(each => (
                <DenominationItem
                  item={each}
                  key={each.id}
                  onLess={this.onDeduction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
