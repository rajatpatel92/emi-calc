import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const CommonInput = ({ inputLabel, placeHolderName, inputValue, setInputValue, isYearlyTenure = null, setInputMonthlyTenure = null }) => {

    const handleOnChange = (val) => {
        if (isYearlyTenure && setInputMonthlyTenure) {
            getTenure(val, isYearlyTenure);
        } else {
            setInputValue(val);
        }
    }

    //Convert Year to Month & vice versa
    const getTenure = (value, isYear) => {
        if (isYear) {
            setInputMonthlyTenure(value * 12);
            setInputValue(value);
        } else {
            setInputValue(value / 12);
            setInputMonthlyTenure(value);
        }
    };

    return (
        <Form.Group as={Row}>
            <Form.Label column sm={3}>
            {inputLabel}
            </Form.Label>
            <Col sm={9}>
            <Form.Control 
                value={inputValue}
                onChange={(e) => handleOnChange(e.target.value)}
                type="number" 
                placeholder={placeHolderName} />
            </Col>
        </Form.Group>
    );
}

export { CommonInput };