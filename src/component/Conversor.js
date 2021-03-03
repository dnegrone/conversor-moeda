import { useState } from 'react'
import './Conversor.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Conversor() {

    const [ moedaA, setMoedaA ] = useState('BRL')
    const [ moedaA_value, setMoedaA_value ] = useState(0)
    const [ currentValue, setCurrentValue ] = useState(0)
    const [ moedaB, setMoedaB ] = useState('USD')
    const [ moedaB_value, setMoedaB_value ] = useState(0)
    const [ currencies, setCurrencies ] = useState(0)

    const countries = ['BRL','USD','EUR','GBP','CAD','AUD','JPY','ARS','CLP','PEN']
    const suggestedValues = [1,5,10,25,50,100,500,1000,1250]

    const urlCurrency = `https://api.exchangerate.host/latest?base=${moedaA}&amount=${currentValue}&symbols=${countries.toString()}`

    function handleChange_moedaA(event) {
        setMoedaA(event.target.value)
    }

    function handleChange_moedaB(event) {
        setMoedaB(event.target.value)
    }

    function handleInputChange(event) {
        setCurrentValue(event.target.value)
    }

    function convert() {
        setMoedaA_value(currentValue)
        fetchCurrency().then(currency => {
            setCurrencies(currency.rates)
            setMoedaB_value(parseFloat(currency.rates[moedaB].toFixed(2)))
        })
    }

    async function fetchCurrency() {
        const response = await fetch(urlCurrency)
        const currency = await response.json()
        return currency
    }


    return(        
        <>
            <Container>
                <Row className="mb-4 pl-3">
                    <Col xs={2}>
                        <select value={moedaA} name="moedaA" className="specialSelect" onChange={handleChange_moedaA} disabled>
                            {countries.map((country, index) => 
                                <option key={index} value={country}>{country}</option>
                            )}
                        </select>
                    </Col>
                    <Col xs={3}>
                        <input type="number" value={currentValue} onChange={handleInputChange} id="currentValue" name="currentValue" list="suggestedValues" className="specialInput" />
                        <datalist id="suggestedValues">
                            {suggestedValues.map((val, index) => 
                                <option key={index} value={val} />
                            )}
                        </datalist>
                    </Col>
                    <Col xs={2}>
                        <select defaultValue={moedaB} name="moedaB" className="specialSelect" onChange={handleChange_moedaB} disabled>
                            {countries.map((country, index) => 
                                <option key={index} value={country}>{country}</option>
                            )}
                        </select>
                    </Col>
                    <Col xs={2}>
                        <button className="btn btn-primary" onClick={convert}>Converter</button>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="ml-2">
                    <Col xs={4}><h4 className="text-muted">{moedaA_value} {moedaA}</h4></Col>
                    <Col xs="auto"><h5 className="text-muted">Real Brasileiro</h5></Col>
                </Row>
                <Row className="ml-2">
                    <Col xs={4}><h3>{moedaB} {moedaB_value}</h3></Col>
                    <Col xs="auto"><h4>Dólar Americano</h4></Col>
                </Row>
                <hr />
                <ul className="list-unstyled ml-4">
                    {!currencies
                        ? <li>Loading...</li>
                        : (
                            <>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>EUR {parseFloat(currencies.EUR).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Euro</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>GBP {parseFloat(currencies.GBP).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Libra Esterlina</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>JPY {parseFloat(currencies.JPY).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Iene Japonês</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>CAD {parseFloat(currencies.CAD).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Dólar Canadense</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>AUD {parseFloat(currencies.AUD).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Dólar Australiano</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>ARS {parseFloat(currencies.ARS).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Peso Argentino</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>CLP {parseFloat(currencies.CLP).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Peso Chileno</small></h5></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col xs={4}><h5>PEN {parseFloat(currencies.PEN).toFixed(2)}</h5></Col>
                                        <Col xs="auto"><h5><small className="text-muted">Sol Peruano</small></h5></Col>
                                    </Row>
                                </li>
                            </>
                        )
                    }
                </ul>
            </Container>
        </>
    )

}

export default Conversor;