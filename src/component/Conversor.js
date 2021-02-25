import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'

function Conversor(props) {

    const [moedaA_valor, setMoedaA_valor] = useState("")
    const [moedaB_valor, setMoedaB_valor] = useState(0)

    const convertido = () => {
        let de_para = `${props.moedaA}_${props.moedaB}`
        let API_KEY = `2b92ea5e31aa96d7f2c7`
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${API_KEY}`

        fetch(url)
            .then(res => res.json())
            .then(json => {
                let cotacao = json[de_para]
                let moedaB_valor = (parseFloat(moedaA_valor) * cotacao).toFixed(2)
                setMoedaB_valor(moedaB_valor)
            })
    }
    
    return(        
        <Container>
            <Form>
                <Form.Label>{props.moedaA} para {props.moedaB}</Form.Label>
                <InputGroup>
                    <Form.Control type="text" placeholder="valor" onChange={(event) => setMoedaA_valor(event.target.value)} />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" value="Converter" onClick={convertido}>Converter</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Form.Text className="text-muted">Valor convertido: {props.moedaB} {moedaB_valor} </Form.Text>
            </Form>
        </Container>
    )
}

export default Conversor;