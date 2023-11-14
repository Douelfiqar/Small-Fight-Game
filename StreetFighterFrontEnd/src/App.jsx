import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import { ChosePlayer } from './component/ChosePlayer'
import { Battle } from './component/Battle'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" elements={ <ChosePlayer /> } />
          <Route exact path="/battle" elements={ <Battle /> } /> */}
          <Route exact path="/" element={<ChosePlayer />} /> 
          <Route exact path="/battle" element={<Battle />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const Wrapper = styled.div`
  width: 99vw;
`

export default App
