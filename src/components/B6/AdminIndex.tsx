import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Menu from './Menu'

export default function AdminIndex() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="left">
          <div className="main">
            <Main />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
