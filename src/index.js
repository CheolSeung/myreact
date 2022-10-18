import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // .js 는 생략되어있음
// App.js 에서 사용자 정의 태그(컴포넌트)를 불러와서 사용하겠습니다.
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
