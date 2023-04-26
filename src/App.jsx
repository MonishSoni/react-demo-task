import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Quiz from "./Quiz";
import Image from "./images/image.png"

function App() {

  return <div className="App">

    {/*=============== Header============= */}
    <Header />


    {/*=============== content============= */}

    <div className="content">
      <h1>Americans Over 64 Can Now Qualify For The $3300 FLEX Card In 2023. Here's How!</h1>
      <img src={Image} alt="Home_image" />
      <p>Americans over 64 can pre-qualify for the 2023 Flex Spending Card to help them cover up to <strong>$3300 of groceries, utility bills, dental procedures, medications, vitamins and more.</strong> </p>
      <p> <strong>The opportunity to upgrade your benefits ends in March,</strong>so it's best to call and get your Flex Card benefits locked in while it's still available. </p>
    </div>

    {/*================== footer ============*/}

    <Quiz />
   
    <Footer />

  </div>;
}

export default App;
