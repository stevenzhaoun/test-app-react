import { useEffect, useState } from 'react';
import Header from './Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [isAdding, setIsAdding] = useState(false)
  const handleAdd = (text) => {
    // setIsAdding(true);
    // fetch(`https://jsonplaceholder.typicode.com/posts`,
    //   {
    //     method: 'post',
    //     body: JSON.stringify({
    //       value: text
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   }).then(resp => resp.json()).then(data => {
    //     setTodos([...todos, { id: data.id, title: data.value }]);
    //     setIsAdding(false);
    //   });
    setTodos([...todos, { id: new Date().valueOf(), title: text }]);
  };

  useEffect(() => {
    console.log('useEffect')
    return fetch('https://jsonplaceholder.typicode.com/posts',).then(resp => resp.json()).then(data => {
      console.log('fetch done')
      setTodos(data.slice(0, 10));
    }).catch((e) => { console.error(e) })
  }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Header onAdd={handleAdd} />
      {isAdding && <div>Adding</div>}
      <ul >
        {todos.map((todo, index) => (
          <li key={todo.id}>{`${index} - ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
