import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from './data'
//import image from './img/katie.png'

function App() {
  const card = data.map(item => {
    return <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
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
