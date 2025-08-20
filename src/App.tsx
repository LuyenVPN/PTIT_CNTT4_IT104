import React, { Component } from 'react'
import Exercises01 from './components/Exercises01'
import Exercise02 from './components/Exercise02'
import Exercise03 from './components/Exercise03'
import Parent_Comp from './components/B4/Parent_Comp'
import ParentComponent from './components/B5/ParentComponent'
import ListPost from './components/B6/ListPost'
import Exercise07 from './components/Exercise07'
import Todolist from './components/Todolist'
import UpdateState from './components/UpdateState'
import Input from './components/Input'


export default class App extends Component {
  render() {
    return (
      <div>
      <Exercises01></Exercises01>
      <Exercise02></Exercise02>
      <Exercise03></Exercise03>
      <Parent_Comp></Parent_Comp>
      <ParentComponent></ParentComponent>
      <ListPost></ListPost>
      <Exercise07></Exercise07>
      <Todolist></Todolist>
      <UpdateState></UpdateState>
      <Input></Input>
      </div>
    )
  }
}

