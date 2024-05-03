import './App.css'
import Layout from './components/Layout'
import Input from './components/Input'
import MainB from './components/Mainbottom'
import MainM from './components/Mainmiddle'
import MainT from './components/Maintop'


function App() {

  return (
    <>
    <body className='AllArea'>
       <Layout/>
      <Input/>
      <div className='MainArea'>
        <MainT/>
        <MainM/>
        <MainB/>
      </div>
    </body>
   
    </>
  )
}

export default App
