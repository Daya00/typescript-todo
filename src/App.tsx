import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
     
    </div>
  );
}

export default App;





// let name: string;
// let age: number;

// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];//array
// let role: [number, string];//tupel
// let personeName: unknown;

// let printName: (name: string) => never;// nothing return;
// let printName1: (name: string) => void; //return undefined;


// age = 20;

// type Person = {
//   name: string,
//   age: number
// }

// type X = Person & {
//   x1: string,
//   x2: number
// }

// let y: X = {
//   name: "data",
//   age: 10,
//   x1: "daya",
//   x2: 21
// }

// interface Person2 {
//   p1: string,
//   p2: number
// }

// interface Person1 extends Person2 {
//   name1: string,
//   age1: number
// }

// let NewPerson : Person1 &{
//   p1:"daya",
//   p2:11,
//   name1:"dasya",
//   age1:11, 
// }