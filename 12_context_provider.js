import React from 'react'

export const CurrencyContext = React.createContext('SEK')

class CurrencyProvider extends Component {
  render() {
    return (
      <CurrencyContext.Provider value='SEK'>
        {this.props.children}
      </CurrencyContext.Provider>
    )
  }
}

export { CurrencyContext, CurrencyProvider }
