import { PureComponent } from "react";
import axios from 'axios'

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
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
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
                <table className="table">
                    <thead>
                        <tr className='bg-danger'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableData.map(x => (
                                <tr className='bg-warning' key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.name}</td>
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