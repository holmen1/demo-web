import React from 'react';

class Insurancelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            insurances: [],
            IsApiError: false
        }
    }
    componentDidMount() {
        fetch("https://localhost:7087/api/insurances")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        insurances: result
                    });
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }
    render() {
        var insuranceslist = this.state.insurances;
        debugger;
        if (insuranceslist && insuranceslist.length > 0) {
            return (<div>
                <h2>Insurance List</h2>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Insurance Id</th>
                            <th>Personal Id</th>
                            <th>Sex</th>
                            <th>Guarantee Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {insuranceslist.map(ins => (
                            <tr key={ins.id}>
                                <td>{ins.id}</td>
                                <td>{ins.insuranceId}</td>
                                <td>{ins.personalId}</td>
                                <td>{ins.sex}</td>
                                <td>{ins.guaranteeAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)
        }
        else {
            return (<div>No Record Found</div>)
        }
    }
}
export default Insurancelist;