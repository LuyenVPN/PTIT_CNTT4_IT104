import React, { Component } from "react";
type Task = {
  id: number;
  task: string;
  completed: boolean;
};
type InitialState = {
  todos: Task[];
  taskName:string
};
export default class Event extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
     taskName:"",
      todos: [
        {
          id: 1,
          task: "học reactjs",
          completed: false,
        },
        {
          id: 2,
          task: "phải học reactjs",
          completed: false,
        },
        {
          id: 3,
          task: "vẫn học reactjs",
          completed: false,
        },
      ],
    };
  }
  // Tạo hàm xóa công việc
  deleteTask=(id:number)=>{
    console.log("id công việc là: ",id);
    const new_todos= this.state.todos.filter(item=>item.id!=id);
    this.setState({todos:new_todos});
  }
  handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("giá trị ô input", e.target.value);
    this.setState({taskName:e.target.value});
  }
  // hàm thêm công việc
  addTodo=()=>{
    if(this.state.taskName){
        const new_todo= {
            id: Math.floor(Math.random()*999999),
            task:this.state.taskName,
            completed:false
        }
        this.setState({todos:[...this.state.todos,new_todo]});
    }
  }
  render() {
    return <div>Học về event

        <h1> Danh sách công việc cần làm!</h1>
        <input
         type="text"
         placeholder="nhập công việc mới"
         onChange={this.handleChange}
          />
        <button onClick={this.addTodo}>Thêm công việc</button>
        <ul>
            {this.state.todos.map((item:Task,index)=>{
                return <>
                    <li key={index}>Tên công việc: {item.task}</li>
                    <button onClick={()=>this.deleteTask(item.id)}>Xóa</button>
                    <button>sửa</button>
                </>
            })}
        </ul>
    </div>;
  }
}