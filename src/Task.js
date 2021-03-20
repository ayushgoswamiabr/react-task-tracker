import {FaTimes} from  'react-icons/fa'
const Task = ({task,ondelete,ontoggle}) => {
    return (
        <div className='task' className={`task ${task.reaminder?'reminder':''}`} onDoubleClick={()=>ontoggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color: 'red',cursor: 'pointer'}} onClick={()=>ondelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
 