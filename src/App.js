import PropTypes from 'prop-types'
import Header from './Header'
import Tasks from './Tasks'
import Addtask from './Addtask'
import {useState, useEffect} from 'react'
import Footer from './Footer'
import About from './About'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  const [showaddtask,setshowaddtask]=useState(false)
  const [tasks,settasks]=useState([])

  useEffect(() => {
     const gettasks = async() => {
       const tasksfromserver = await fetchtasks()
       settasks(tasksfromserver)
     }
    gettasks()
    },
   [])

   const fetchtasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
    }
   
    const fetchtask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
      }

    const addtask = async(task) =>{
      const res=await fetch('http://localhost:5000/tasks',{method: 'POST',headers:{'Content-type':'application/json'},body: JSON.stringify(task)})
      const data = await res.json()
      settasks([...tasks,data])
    // const id = Math.floor(Math.random()*10000)+1
    // const newTask= {id,...task} 
    // settasks([...tasks,newTask])
      
      
     } 

const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE'})
  settasks(tasks.filter((task)=> task.id!==id))
}

const toggleremainder = async(id) => {
  const  tasktoggle = await fetchtask(id)
  const updatedtask = {...tasktoggle,reaminder:!tasktoggle.reaminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{method: 'PUT',headers:{'Content-type':'application/json'},body: JSON.stringify(updatedtask)})
  const data = await res.json()

  settasks(tasks.map((task)=>task.id===id?{...task,reaminder:data.reaminder}:task))
}
  return (<Router>
    <div className='container'>
    <Header onAdd={()=>setshowaddtask(!showaddtask)} showAdd={showaddtask}/>
    
    <Route path='/' exact render={(props)=>(
      <>
       {showaddtask && <Addtask onadd={addtask}/>}
    {tasks.length>0?(<Tasks tasks={tasks} ondelete={deleteTask} ontoggle={toggleremainder}/>) : ('No Tasks to show')}
      </>
    )}/>
    <Route path='/about'component={About}/>
    <Footer />
    </div>
    </Router>
    
  );
}


Header.defaultProps = {
  title: 'Task Tracker',
}

Header.prototype = {
  title : PropTypes.string.isRequired,
}
export default App;
