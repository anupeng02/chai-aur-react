import {useState} from "react" ;
function TodoList(){
    const [activity, setActivity] = useState("");
    const[list, setList] = useState([]);
    function addActivity(){
       setList([...list, activity]);
       setActivity("");
       
    }
    function removeActivity(i){
        const updatedList = list.filter((elm, id)=>{
            return i!=id;
        })
        setList(updatedList);
    }
    function removeAllActivity(){
        setList([])
    }
    return(
        <>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add activity" value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button onClick={addActivity}> Add</button>

        {list!=[] && list.map((data, i)=>{
           return (
            <>
            <p key={i}>{data}</p>
            <button onClick={()=>removeActivity(i)}>Remove</button>
            </>
           )
        })}
         <br/> <br/><br/><br/>
         {list.length>=1 &&  <button onClick={removeAllActivity}> Remove All</button>}
        
        </>
    )
}
export default TodoList;