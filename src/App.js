import './App.css';
import Testimonial from './Components/Testimonial';
import Data from './Data';


function App() {
  return (
    <div className="App">
      <h2>Our Testimonials</h2>
      <Testimonial data={Data}/>
    </div>
  );
}

export default App;
