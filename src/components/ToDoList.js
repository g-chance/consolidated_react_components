import React, { useState } from 'react';

const ToDoList = (props) => {
    
    const [state, setState] = useState(
        {
            'thing': [],
            'task': "",
        }
    )
    
    const onChangeHandler = e => {
        e.preventDefault();
        setState(
            {...state, 'task': e.target.value}
        )
        console.log(state.task)
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(state)
        setState(
            {...state, 'thing': [...state.thing, {'content': state.task, 'done': false}]}
        )
        console.log(state.thing)
    }

    const onClickHandler = (e,i) => {
        e.preventDefault();
        // let temp = {...state.thing};
        let temp = [...state.thing]
        temp[i].done = true
        setState(
            {...state, 'thing': [...temp] }
        )
        // console.log(temp)
        // setState(
        //     {...state, temp}
        // )
        console.log(state.thing[e.target.id].done)
        console.log(state.thing[e.target.id])
        console.log(e.target.id)
        console.log(state)
    }

    return (
        <div>
            <form action="" onSubmit={onSubmitHandler}>
                <label htmlFor="">Add a Task:</label>
                <input type="text" name="task" id="" onChange={onChangeHandler}/>
                <input type="submit" value="Add"/>
            </form>
            {state.thing.map((val, i) => (
                !val.done ?
                <div id={i} key={i}>
                    <input type="checkbox" name="" id={i} onClick={(e) => onClickHandler(e,i)}/>
                    <label htmlFor="">{val.content}</label>
                </div>
                : null
            ))}
        </div>
    )
}

export default ToDoList;