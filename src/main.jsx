
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';



ReactDOM.createRoot(document.getElementById('root'))
.render(
  // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
  <React.StrictMode>
    <App />{/*<App></App>*/}
    </React.StrictMode>
  );
  
  // createRoot
  // create + Root (React DOM Root)
  // ReactDOMRoot 객체를 생성하는 함수
  // ReactDOMRoot 객체는 render() 메서드를 사용해
  // React 요소를 실제 DOM 요소에 렌더링 한다.
  
  
  // JSX가 하는 일은 React 요소 생성 → 마크업 생성
  // JSX → 컴파일러(변환기) → React 요소 → ReactDOM → 실제 DOM 요소 생성 → 구조 작성
  
