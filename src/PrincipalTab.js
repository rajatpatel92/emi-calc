import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { CommonInput } from './InputControls';

const PrincipalTab = ({
        inputEMI, setInputEMI, 
        inputROI, setInputROI,
        inputTenure, setInputTenure,
        inputMonthlyTenure, setInputMonthlyTenure,
        Principal, calculatePrincipal, resetAll
    }) => {
        return (
            <>
            <Form style={{margin: "20px" }}>
                
            <CommonInput
                inputLabel="EMI"
                placeHolderName="EMI"
                inputValue={inputEMI}
                setInputValue={setInputEMI}/>

            <CommonInput
                inputLabel="Rate of Interest (%)"
                placeHolderName="Rate of Interest in %"
                inputValue={inputROI}
                setInputValue={setInputROI}/>

            <CommonInput
                inputLabel="Tenure (in Years)"
                placeHolderName="Tenure in Years"
                inputValue={inputTenure}
                setInputValue={setInputTenure}
                isYearlyTenure="true"
                setInputMonthlyTenure={setInputMonthlyTenure}                 
            />

            <CommonInput
                inputLabel="Tenure (in Months)"
                placeHolderName="Tenure in Months"
                inputValue={inputMonthlyTenure}
                setInputValue={setInputTenure}
                isYearlyTenure="false"
                setInputMonthlyTenure={setInputMonthlyTenure}                 
            />

            <Form.Group as={Row}>
                <Col sm={{ span: 9, offset: 3 }}>
                <Button onClick={calculatePrincipal}>Calculate Principal</Button>
                <Button variant="outline-primary" onClick={resetAll} style={{"marginLeft": "10px"}}>Reset</Button>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPrincipal">
                <Form.Label column sm={3}>
                Principal
                </Form.Label>
                <Col sm={9}>
                <Form.Control 
                    value={Principal}
                    type="number" 
                    placeholder="Principal Amount" 
                    disabled/>
                </Col>
            </Form.Group>

            </Form>
            </>
        )
}

export default PrincipalTab;