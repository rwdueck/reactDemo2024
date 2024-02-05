import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2024</p>
      <Link to='/intro' style={linkStyle}>Intro</Link>
      <Link to='/about' style={linkStyle}>About</Link>
      <Link to='/'style={linkStyle}>Tasks</Link>
      <Link to='/api'>API</Link>
    </footer>
  )
}

const linkStyle = {
  marginRight: '10px',
}

export default Footer
