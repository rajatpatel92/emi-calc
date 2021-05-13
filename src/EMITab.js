import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { CommonInput } from './InputControls';

const EMITab = ({ 
        inputPrincipal, setInputPrincipal, 
        inputROI, setInputROI,
        inputTenure, setInputTenure,
        inputMonthlyTenure, setInputMonthlyTenure,
        EMI, calculateEMI, resetAll 
    }) => {
    return(
        <>
        <Form style={{ margin: "20px" }}>
            <CommonInput
                inputLabel="Principal"
                placeHolderName="Principal Amount"
                inputValue={inputPrincipal}
                setInputValue={setInputPrincipal}
            />

            <CommonInput
                inputLabel="Rate of Interest (%)"
                placeHolderName="Rate of Interest in %"
                inputValue={inputROI}
                setInputValue={setInputROI}
            />

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
                <Col sm={{ span: 6, offset: 3 }}>
                <Button onClick={calculateEMI}>Calculate EMI</Button>
                <Button onClick={resetAll} variant="outline-primary" style={{"marginLeft": "10px"}}>Reset</Button>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEMI">
                <Form.Label column sm={3}>
                EMI
                </Form.Label>
                <Col sm={9}>
                <Form.Control 
                    value={EMI}
                    type="number" 
                    placeholder="EMI" 
                    disabled/>
                </Col>
            </Form.Group>
            </Form>
        </>
    )
}

export default EMITab;