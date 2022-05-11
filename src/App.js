import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
//import image from './img/katie.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card 
        img='katie.png'
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price={136}
      />
    </div>
  );
}

export default App;
