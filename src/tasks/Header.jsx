import Button from '../components/Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <div>Header</div>
  )
}

Header.defaultProps = {
  title: 'My Task Tracker',
}

// CSS in JS
const headingStyle = {
  color: 'tomato',
  backgroundColor: 'lightgrey',
  padding: '10px 20px',
  borderRadius: '40px'
}

export default Header
