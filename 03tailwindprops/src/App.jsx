
import './App.css'
import Card from './components/Card'
function App() {
  //  let myData={
  //   name:"rushikesh",
  //   age:21
  // }
  // let myArr=[1,2,3]
  
  return (
    <>
      <h1 className='bg-green-400'>Hello rushikesh</h1>
      <Card username="rushikesh" age="21" />
      <Card username="nikhil"  />
    </>
  )
}

export default App
