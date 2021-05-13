import { React, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import EMITab from './EMITab';
import TenureTab from './TenureTab';
import PrincipalTab from './PrincipalTab';

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
        //Check if ROI or Tenure are non-zero
        if (inputROI === 0 || inputTenure === 0) {
            setEMI(0);
            return;
        }
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
        if (inputROI === 0 || inputEMI === 0){
            setMonthlyTenure(0);
            setTenure(0);
            return;
        }
        let monthlyROI = inputROI / 12 / 100;
        let monthlyTenure = (Math.log(inputEMI) - Math.log(inputEMI - (inputPrincipal * monthlyROI))) / 
                                Math.log(1 + monthlyROI);
        setMonthlyTenure(monthlyTenure); //monthly
        setTenure(monthlyTenure / 12);  //yearly
    };

    //Calculate Principal from EMI, ROI and Tenure
    const calculatePrincipal = () => {
        //Check if ROI or Tenure are non-zero
        if (inputROI === 0 || inputTenure === 0) {
            setEMI(0);
            return;
        }
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

    //Reset All
    const resetAll = () => {
        //reset input parameters
        setInputEMI(0);
        setInputPrincipal(0);
        setInputROI(0);
        setInputTenure(0);
        setInputMonthlyTenure(0);
        //reset calculated parameters
        setEMI(0);
        setTenure(0);
        setMonthlyTenure(0);
        setPrincipal(0);
    }

    //Render UI
    return (
        <>
        <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}>
        
            <Tab eventKey="emi" title="EMI">
                <EMITab
                    inputPrincipal={inputPrincipal} setInputPrincipal={setInputPrincipal}
                    inputROI={inputROI} setInputROI={setInputROI}
                    inputTenure={inputTenure} setInputTenure={setInputTenure}
                    inputMonthlyTenure={inputMonthlyTenure} setInputMonthlyTenure={setInputMonthlyTenure}
                    EMI={EMI} calculateEMI={calculateEMI} resetAll={resetAll} 
                />
            </Tab>
            
            <Tab eventKey="tenure" title="Tenure">
                <TenureTab
                    inputPrincipal={inputPrincipal} setInputPrincipal={setInputPrincipal}
                    inputROI={inputROI} setInputROI={setInputROI}
                    inputEMI={inputEMI} setInputEMI={setInputEMI}
                    Tenure={Tenure} MonthlyTenure={MonthlyTenure} calculateTenure={calculateTenure} resetAll={resetAll} 
                />
            </Tab>
            
            <Tab eventKey="principal" title="Principal">
                <PrincipalTab
                    inputEMI={inputEMI} setInputEMI={setInputEMI}
                    inputROI={inputROI} setInputROI={setInputROI}
                    inputTenure={inputTenure} setInputTenure={setInputTenure}
                    inputMonthlyTenure={inputMonthlyTenure} setInputMonthlyTenure={setInputMonthlyTenure}
                    Principal={Principal} calculatePrincipal={calculatePrincipal} resetAll={resetAll} 
                />
            </Tab>
        
        </Tabs>
        </>
    );
}

export default EMICalculator;