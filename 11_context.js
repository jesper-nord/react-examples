ReactDOM.render(
  <App currency='SEK' />
)

const App = ({ currency }) => {
  return <PaymentScreen currency={currency} />
}

const PaymentScreen = ({ currency }) => {
  return <PaymenList currency={currency} />
}

const PaymenList = ({ currency }) => {
  return <Payment currency={currency} />
}

const Payment = ({ currency }) => {
  return <p>Amount: 10 {currency}</p>
}


export default App