import './App.scss'
import Conversor from './component/Conversor'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Container className="new-container">
        <h2 className="mt-3 mb-4 pl-2">Conversor de Moedas</h2>
        <Conversor />
      </Container>
    </>
  );
}

export default App;
