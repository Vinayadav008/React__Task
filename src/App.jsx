import React from 'react'
import News from './Components/News'
import { Provider } from 'react-redux'
import { store } from './Redux/Shop'
function App() {
  return (
    <Provider store={store}>

   <div className=''>
    <News/>
   </div>
   </Provider>
  )
}

export default App
