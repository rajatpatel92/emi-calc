import { Navbar } from 'react-bootstrap'; 

const TopBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
            Loan Calculator
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Developed by: Rajat Patel
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopBar;