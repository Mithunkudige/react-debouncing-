import React from 'react';

export default function App() {

  const [search, setSearch] = React.useState([]);


  const debounce = (fn, delay) => {
    let timer;
    return function(...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };

  const handleChange = (e) => {
    const {value} = e.target;
    console.log(value);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(json => setSearch(json))
  }

  const searchChange = debounce(handleChange, 300);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" onChange={searchChange} name='search' />
      <ul>
      {search.map(list => (
        <li>{list.title}</li>
      ))}
      </ul>
    </div>
  );
}
