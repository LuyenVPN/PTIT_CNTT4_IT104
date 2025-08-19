import Header from './Header'
import Navbar from './Navbar'
import Menu from './Menu'
import Main from './Main'
import Article from './Article'
import './UserLayout.css'

export default function UserLayout() {
  return (
    <div className="layout-root">
      <Header />
      <Navbar />
      <div className="layout-content">
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  )
}

