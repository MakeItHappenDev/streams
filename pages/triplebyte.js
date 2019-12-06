import React, {useState} from 'react'

import styles from './triplebyte.module.scss'

export default () => {

    let defaultUsers = [
        {
            name:"Winnie",
            todos:[
                "test",
                "test2"
            ]
        },
        {
            name:"Bob",
            todos:[
                "Hello",
                "world"
            ]
        },
        {
            name:"Thomas",
            todos:[
                "foo",
                "bar"
            ]
        },
        {
            name:"George",
            todos:[
                "Pay electrity bill",
                "Help Winnie"
            ]
        }
    ]


    if(typeof window != "undefined"){

        const lsUsers = localStorage.getItem("people")
        if(lsUsers){
            defaultUsers = JSON.parse(localStorage.getItem("people"))
        }
        else{
            defaultUsers =  defaultUsers
        }
    }
    const [people,setPeople] = useState(defaultUsers)

    const savePeople = (people) =>{
        if(typeof window != "undefined"){
            localStorage.setItem("people",JSON.stringify(people))
        }
        setPeople(people)
    }

    const addTodo = (index,todo) => {
        const users = [...people]
        let workingUser = users[index]
        workingUser.todos.push(todo)
        savePeople(users)
    }

    const handleTaskOwnershipSwitch = (givingUser,givingIndex,receivingUser) => {
        console.log("User ",givingUser," gave task ", givingIndex, " to user ", receivingUser)

        const users = [...people]
        const gUser = users[givingUser]
        const rUser = users[receivingUser]

        const task = gUser.todos.splice(givingIndex, givingIndex+1)
        rUser.todos.push(task)
        savePeople(users)


    }

    return(
        <main className={styles.container}>
            {people.map((p,i) => <People key={`user-${p.name}`} {...p} index={i} addTodo={addTodo} handleTaskOwnershipSwitch={handleTaskOwnershipSwitch} />)}

        </main>
    )
}

const People = (props) => {

    const handleAddCart = () => {
        //const string = "test"
        const string = window.prompt("What do you want to add", "task");
        props.addTodo(props.index,string)

    }

    return(
        <article>
            <h1>{props.name}</h1>
            {props.todos && props.todos.map((t,i) => <Task key={`todo-${props.name}-${i}`} task={t} indexUser={props.index} indexTask={i} handleTaskOwnershipSwitch={props.handleTaskOwnershipSwitch}/>)}
            <button onClick={()=>handleAddCart()}>+ Add a card</button>
        </article>
    )
}

const Task = (props) => {

    return(
        <section>
            {props.indexUser > 0 && <p onClick={()=>props.handleTaskOwnershipSwitch(props.indexUser,props.indexTask,(props.indexUser - 1))}>{`<`}</p>}
            <p>{props.task}</p>
            {props.indexUser < 3 && <p onClick={()=>props.handleTaskOwnershipSwitch(props.indexUser,props.indexTask,(props.indexUser + 1))}>{`>`}</p>}
        </section>

    )
}