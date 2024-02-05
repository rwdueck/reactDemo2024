// https://www.youtube.com/watch?v=w7ejDZ8SWv8
// project idea and content and .css from Traversy Media
// content added and restructured to meet our needs
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import About from './about/about'
import IntroContainer from './intro/IntroContainer'
import TaskContainer from './tasks/TaskContainer'
import TaskContainerAPI from './taskAPI/TaskContainerAPI'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<TaskContainer />}/>
          <Route path='/intro' element={<IntroContainer />}/>
          <Route path='/api' element={<TaskContainerAPI />}/>
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
