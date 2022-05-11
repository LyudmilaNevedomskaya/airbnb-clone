import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from './data'
//import image from './img/katie.png'

function App() {
  const card = data.map(item => {
    return <Card
      key={item.id}
      {...item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='main-content'>
        {card}
      </div>
    </div>
  );
}

export default App;
