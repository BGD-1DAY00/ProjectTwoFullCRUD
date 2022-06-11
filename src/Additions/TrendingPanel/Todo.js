import React from 'react'
import { useFetch } from './useFetch'
export const Todo = () => {
    const {dataFromApi, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <div className='Todo'>
        <h3 className='todo-title'>TODOS</h3>
        {dataFromApi.map((val)=>{
            const {id, title, completed} = val
            return(
                <div className='todo-action'>
                    {completed === true? <h3 style={{background:'lightgreen'}}>{title}</h3>:<h3 style={{background:'lightpink'}}>{title}</h3> }
                </div>
            )
        })}
    </div>
  )
}
