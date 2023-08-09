import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';

// {/* 홈 페이지 : index.html */}
// {/* 소개 페이지 : about.html */}
// {/* 제품 목록 페이지 : products.html */}
// {/* 의뢰 페이지 : contact.html */}

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* props 객체의 children */}
        {/* Page 삽입 */}
        <Home />
        {/* <About /> */}
      </RootLayout>
    </div>
  );
}

export default App