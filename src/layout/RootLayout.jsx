/* eslint-disable react/prop-types */
import HeaderBar from './HeaderBar';
import FooterBar from "./FooterBar";

function RootLayout(props) {
  console.log(props.children);
  
  return (
    <div>
      <HeaderBar />
      <main>
        {props.children}
      </main>
      <FooterBar />
    </div>
  )
}


export default RootLayout