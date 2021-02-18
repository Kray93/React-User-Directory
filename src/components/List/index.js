import React, { Component } from 'react';
import './style.css';
import Employee from "../Employee";
import API from '../../utils/API';

export default class List extends Component {
    state = {
        employees: [],
        empList: [],
        isAlphebetized: true
    };
    componentDidMount() {
        API.search()
            .then(res => this.setState({ employees: res.data.results, empList: res.data.results }))
            .catch(err => console.log(err));
    };
    handleInputFilter = event => {
        const filter = event.target.value;
        const filtered = this.state.employees.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ empList: filtered });
    };
    handleNameSort = () => {

        const newList = [...this.state.empList]
        // const sortaz = this.state.empList.sort((a, b) => a.name.first.localeCompare(b.name.first));
        // const sortza = this.state.empList.sort((a, b) => b.name.first.localeCompare(a.name.first));
        if(this.state.isAlphebetized===false){
            const sortaz = newList.sort((a, b) => a.name.first > b.name.first ? -1:1);
            // console.log(sortaz);
            this.setState({ empList: sortaz, isAlphebetized: true });
            // this.setState({ isAlphebetized: true })
        } else {
            const sortza = newList.sort((a, b) => a.name.first > b.name.first ? 1:-1);
            // console.log(sortza);
            this.setState({ empList: sortza, isAlphebetized: false });
            // this.setState({ isAlphebetized: false})
        }
    };
    handleLocationSort = () => {
        const sortaz = this.state.empList
        .sort((a, b) => a.location.state.localeCompare(b.location.state));
        this.setState({ empList: sortaz });
    };
    render() {
        return (
            <div className="list-container">
                <form className="form-inline" id="form-center">
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            name="search"
                            onChange={this.handleInputFilter}
                            placeholder="Search For Employee"
                        />
                    </div>
                </form>

                <table className="table table-striped table-dark table-responsive-sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col" onClick={this.handleNameSort} className="name.first">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 19 19">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                </svg>
                                Name
                            </th>
                            <th scope="col" className="center-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 19 19">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                </svg>
                                Email
                            </th>
                            <th scope="col" className="center-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 19 19">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                Phone
                            </th>
                            <th scope="col" className="center-icon" onClick={this.handleLocationSort}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo" viewBox="0 0 19 19">
                                    <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                                </svg>
                                Location
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.empList.map((employee, index) => <Employee firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} cell={employee.cell} picURL={employee.picture.thumbnail} key={index} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}