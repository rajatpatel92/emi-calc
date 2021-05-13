import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { CommonInput } from './InputControls';

const TenureTab = ({
        inputPrincipal, setInputPrincipal, 
        inputROI, setInputROI,
        inputEMI, setInputEMI,
        Tenure, MonthlyTenure, calculateTenure, resetAll
    }) => {
    return (
        <>
        <Form style={{margin: "20px" }}>
        <CommonInput
            inputLabel="Principal"
            placeHolderName="Principal Amount"
            inputValue={inputPrincipal}
            setInputValue={setInputPrincipal}/>

        <CommonInput
            inputLabel="Rate of Interest (%)"
            placeHolderName="Rate of Interest in %"
            inputValue={inputROI}
            setInputValue={setInputROI}/>

        <CommonInput
            inputLabel="EMI"
            placeHolderName="EMI"
            inputValue={inputEMI}
            setInputValue={setInputEMI}/>

        <Form.Group as={Row}>
            <Col sm={{ span: 9, offset: 3 }}>
            <Button onClick={calculateTenure}>Calculate Tenure</Button>
            <Button onClick={resetAll} variant="outline-primary" style={{"marginLeft": "10px"}}>Reset</Button>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formTenure">
            <Form.Label column sm={3}>
            Tenure (in Months)
            </Form.Label>
            <Col sm={9}>
            <Form.Control 
                value={MonthlyTenure}
                type="number" 
                placeholder="Tenure in Months"
                disabled />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formTenure">
            <Form.Label column sm={3}>
            Tenure (in Years)
            </Form.Label>
            <Col sm={9}>
            <Form.Control 
                value={Tenure}
                type="number" 
                placeholder="Tenure in Years"
                disabled />
            </Col>
        </Form.Group>
        
        </Form>
        </>
    );
}

export default TenureTab;