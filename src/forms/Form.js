import { PureComponent } from "react";

class Signup extends PureComponent {
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };
     
    state= {};
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
  

    render() {

        return (
            <div className='signin h-100'>
                <div className=''>
                    <div className='container '>
                        <div className='row justify-content-center'>
                            <form className="row g-3" onSubmit={this.handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputEmail4" name="name" onChange={this.handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Contact Number</label>
                                    <input type="text" className="form-control" id="inputPassword4" name="contact" onChange={this.handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" name="email" onChange={this.handleChange} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Address </label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='address' onChange={this.handleChange} />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputCity" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" id="inputCity" name='pincode' onChange={this.handleChange} />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputState" className="form-label">Age</label>
                                    <input type="text" className="form-control" id="inputCity" name='age' onChange={this.handleChange} />

                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Visted on</label>
                                    <input type="text" className="form-control" id="inputZip" name='visitedon' onChange={this.handleChange} />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"  />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Signup;