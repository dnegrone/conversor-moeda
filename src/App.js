import './App.scss'
import ContainerMoeda from './component/ContainerMoeda'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Container className="new-container">
        <h2 className="mt-5 mb-5 pl-2">Conversor de Moedas</h2>
        <ContainerMoeda moedaA="USD" moedaB="BRL" />
        <ContainerMoeda moedaA="EUR" moedaB="BRL" />
        <ContainerMoeda moedaA="USD" moedaB="EUR" />
        <ContainerMoeda moedaA="GBP" moedaB="BRL" />
        <ContainerMoeda moedaA="ARS" moedaB="BRL" />
        {/* <ContainerMoeda moedaA="CAD" moedaB="BRL" />
        <ContainerMoeda moedaA="AUD" moedaB="BRL" />
        <ContainerMoeda moedaA="JPY" moedaB="BRL" /> */}
        {/* <ContainerMoeda moedaA="GBP" moedaB="EUR" />
        <ContainerMoeda moedaA="USD" moedaB="GBP" /> */}
      </Container>
    </>
  );
}

export default App;
