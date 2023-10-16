import Signup from './signUp'
import Login from './Login'
import Home from './Home'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
     
     <BrowserRouter>
       <Routes>
         <Route>
          <Route path='/home' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/' element={<Signup/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
    
   </div>
  )
}

export default App
