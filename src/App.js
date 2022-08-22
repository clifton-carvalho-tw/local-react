import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Awesome Iframes</h3>
      <iframe src="http://127.0.0.1:8081/index.html" width={400} height={200}></iframe>
    </div>
  );
}

export default App;
