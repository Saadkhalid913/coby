import './index.css';
import "./index.css"
import MatrixBox from './components/matrixBox';
import ImageBox from './components/ImageBox';
function App() {
  return (
    <div>
      <MatrixBox gridSize={5}/>
      <ImageBox />
    </div>
  )
}

export default App;
