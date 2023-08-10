import HeaderBar from './HeaderBar';
import FooterBar from "./FooterBar";

function RootLayout(props) {
  // React API
  // return React.createElement(
  //   type,
  //   // props,
  //   // ...children
  //   // [child, child, child]
  // )

  
  // JSX
  // return은 값을 내보내므로 배열을 내보낼 수 있다.
  // children = [] 배열이다.
  // 대신 배열 내에서 고유한 key를 부여해줘야 한다.
  return [
    <HeaderBar key="header-bar" />, 
    <main key="main">{props.children}</main>, 
    <FooterBar key="footer-bar" />
  ];
}


export default RootLayout