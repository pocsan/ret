import React from 'react';
// 定义一个React函数组件App
// const App: React.FC = () => {
//   //react.fc  是什么意思

//   // 使用React的useState钩子，定义一个count变量和一个setCount函数
//   const [count, setCount] = React.useState(0);

//   // 定义一个increment函数，用于增加count的值
//   const increment = () => {
//     setCount(count + 1);
//   };

//   // 返回一个包含标题、计数器和按钮的div元素
//   return (
//     <div>
//       <h1>Hello, React 18 with TypeScript!</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default App;

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, React 18 with TypeScript!</h1>
      <p>Count :{count}</p>
      <button onClick={increment}> Increment</button>
    </div>
  );
};
export default App;
