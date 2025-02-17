import { useState } from "react"
import { toast } from 'react-toastify'


const Form = ({addItem}) => {
    const [newItemsName, setNewItemsName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!newItemsName) 
            { toast.error('please provide a value')
            return};
        addItem(newItemsName)
        setNewItemsName('')        
    }

  return (
    <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
            <input type="text" className="form-input" 
            value={newItemsName} onChange={(event) => 
            setNewItemsName(event.target.value)} />
            <button type="submit" className="btn">Add item</button>
        </div>
    </form>
  )
}
export default Form