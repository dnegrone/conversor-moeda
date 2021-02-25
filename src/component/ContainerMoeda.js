import Conversor from './Conversor'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function ContainerMoeda(props) {
    return(
        <>
            <Card body border="secondary" className="mb-4">
                <Row>
                    <Col><Conversor moedaA={props.moedaA} moedaB={props.moedaB} /></Col>
                    <Col><Conversor moedaA={props.moedaB} moedaB={props.moedaA} /></Col>
                </Row>
            </Card>
        </>
    )
}

export default ContainerMoeda