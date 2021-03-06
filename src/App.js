import React, { useState } from 'react'

import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = useState([
        '課題をする',
        '洗濯をする',
        '仕事をする'
    ])

    const addTodo = (value) => {
        const newTodos = [
            ...todos,
            value
        ]
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {        
        const newTodos = todos.filter((todo, index) => index !== id)
        setTodos(newTodos)
    }

    const updateTodo = (id, value) => {
        const newTodos = [...todos]
        newTodos[id] = value
        setTodos(newTodos)
    }

    return(
        <>
            <GlobalStyle/>
            <Title>Todo APP</Title>
            <Form addTodo={addTodo}></Form>
            <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}></List>
        </>
    )
}

const Title = styled.h1`
    padding: 40px 0 ;
    text-align: center;
    font-size: 4.0rem;
`

export default App