import HeaderBar from './HeaderBar';
import FooterBar from "./FooterBar";

function RootLayout(props) {
  return (
    <>
      <HeaderBar key="header-bar" />, 
      <main key="main">{props.children}</main>, 
      <FooterBar key="footer-bar" />
    </>
  )

  
  // JSX
  // return은 값을 내보내므로 배열을 내보낼 수 있다.
  // children = [] 배열이다.
  // 대신 배열 내에서 고유한 key를 부여해줘야 한다.
  // 이로 인해 쓸 데 없는 div로 감싸지 않아도 여러 형제를 내보낼 수 있다.
  // return [
  //   <HeaderBar key="header-bar" />, 
  //   <main key="main">{props.children}</main>, 
  //   <FooterBar key="footer-bar" />
  // ];
}


export default RootLayout