import { PureComponent } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom'


class Home extends PureComponent {
    data = [];
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
        }
    }

    componentDidMount() {
        this.getData();
       
    }

    async getData() {
        try {
            const res = await axios.get(`http://localhost:3000/api/v1/users`)
                this.data = res.data
                this.setState({
                    tableData: [this.data[0]]
                })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <NavLink to="signup" className='btn btn-primary my-4'>Add Row</NavLink>
                <table className="table">
                    <thead>
                        <tr className='bg-danger'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">contact</th>
                            <th scope="col">address</th>
                            <th scope="col">pincode</th>
                            <th scope="col">age</th>
                            <th scope="col">visitedon</th>
                            <th scope="col">email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableData.map((x,i) => (
                                
                                <tr className='bg-warning' key={x._id}>
                                    <td>{i + 1}</td>
                                    <td>{x.name}</td>
                                    <td>{x.contact}</td>
                                    <td>{x.address}</td>
                                    <td>{x.pincode}</td>
                                    <td>{x.age}</td>
                                    <td>{x.visitedon}</td>
                                    <td>{x.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success m-3 px-4' onClick={() => {
                        if (this.data.length === this.state.tableData.length) {
                            return;
                        }
                        const tableList = [...this.state.tableData, this.data[this.state.tableData.length]];
                        this.setState({
                            tableData: tableList
                        })
                    }}>Next</button>

                    <button className='btn btn-success m-3' onClick={() => {
                        if (this.state.tableData.length === 1) {
                            return;
                        }
                        const data = this.state.tableData;
                        const newTable = data.slice(0, -1);
                        this.setState({
                            tableData: newTable
                        })
                    }}>Remove</button>
                </div>
            </div>
        );

    }
}
export default Home;