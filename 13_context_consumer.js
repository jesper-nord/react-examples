import React from 'react'
import ReactDOM from 'react-dom'
import { CurrencyProvider, CurrencyContext } from './12_context_provider'

ReactDOM.render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
)

const Payment = () => (
  <CurrencyContext.Consumer>
    {currency => <p>Payment currency: {currency}</p>}
  </CurrencyContext.Consumer>
)

export default Payment
