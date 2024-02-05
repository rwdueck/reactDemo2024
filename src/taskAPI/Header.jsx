import { useLocation } from 'react-router-dom'
import Button from '../components/Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      {/* inline styles */}
      <h1 style={headingStyle}>{title}</h1>
      {/* button component */}
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
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
