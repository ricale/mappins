import NaverMap from './components/NaverMap';
import wasteBetteryCollectorLatlngs from './data/wasteBetteryCollectorLatlngs';

function App() {
  return (
      <NaverMap latlngs={wasteBetteryCollectorLatlngs} />
  );
}

export default App;
