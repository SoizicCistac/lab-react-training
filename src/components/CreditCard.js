import React from 'react'
import visa from "./../assets/images/visa.png"
// import Mastercard from "./../assets/images/master-card.svg"

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const cardType = type === 'Visa' ? './../assets/images/visa.png' : './../assets/images/master-card.svg'

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }

    const expireMonth = expirationMonth.length < 10 ? '0'+expirationMonth : expirationMonth
    const expireYear = expirationYear.slice(2)

//     <CreditCard
//   type="Visa"
//   number="0123456789018845"
//   expirationMonth={3}
//   expirationYear={2021}
//   bank="BNP"
//   owner="Maxence Bouret"
//   bgColor="#11aa99"
//   color="white" 
// />

  return (
    <div style={divStyle}>
        <img src={type === 'Visa' ? visa : null}/>
        <p>{'**** **** **** '+ number.slice(12)}</p>
        <p>Expires {expireMonth / expireYear}</p>
    </div>
  )
}

export default CreditCard