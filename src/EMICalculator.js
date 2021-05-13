import { React, useState } from 'react';
import { Tabs, Tab, Form, Row, Col, Button } from 'react-bootstrap';

import { CommonInput } from './InputControls';

const EMICalculator = () => {

    //Calculated values
    const [ EMI, setEMI] = useState(0);
    const [ Tenure, setTenure ] = useState(0);
    const [ MonthlyTenure, setMonthlyTenure ] = useState(0);
    const [ Principal, setPrincipal ] = useState(0);

    //Input values
    const [ inputEMI, setInputEMI] = useState(0);
    const [ inputTenure, setInputTenure ] = useState(0);
    const [ inputMonthlyTenure, setInputMonthlyTenure ] = useState(0);
    const [ inputPrincipal, setInputPrincipal ] = useState(0);
    const [ inputROI, setInputROI ] = useState(0);

    //Tab control
    const [key, setKey] = useState('emi');

    //Function to calculate EMI from Principal, ROI and Tenure
    const calculateEMI = () => {
        let monthlyROI = inputROI / 12 / 100;
        let monthlyTenure = inputTenure * 12;
        setEMI(
            inputPrincipal * 
            monthlyROI * ( 
                ( (1 + monthlyROI) ** monthlyTenure ) / 
                ( ((1 + monthlyROI) ** monthlyTenure) - 1 )
            )
        );
    };

    //Calculate Tenure from Principal, ROI and EMI
    const calculateTenure = () => {
        let monthlyROI = inputROI / 12 / 100;
        let monthlyTenure = (Math.log(inputEMI) - 
                                Math.log(inputEMI - (inputPrincipal * monthlyROI))) / 
                                Math.log(1 + monthlyROI);
        setMonthlyTenure(monthlyTenure); //monthly
        setTenure(monthlyTenure / 12);  //yearly
    };

    //Calculate Principal from EMI, ROI and Tenure
    const calculatePrincipal = () => {
        let monthlyROI = inputROI / 12 / 100;
        let monthlyTenure = inputTenure * 12;
        setPrincipal(
            inputEMI / (
                monthlyROI * ( 
                    ((1 + monthlyROI) ** monthlyTenure) / (((1 + monthlyROI) ** monthlyTenure) - 1)
                )
            )
        );
    };

    //Render UI
    return (
        <>
        <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
        
        <Tab eventKey="emi" title="EMI">
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
                <Col sm={{ span: 9, offset: 3 }}>
                <Button onClick={calculateEMI}>Calculate EMI</Button>
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
        </Tab>

        
        <Tab eventKey="tenure" title="Tenure">
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
                    placeholder="Tenure in Years"
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
        </Tab>

        
        <Tab eventKey="principal" title="Principal">
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
        </Tab>
        
        </Tabs>
        </>
    );
}

export default EMICalculator;