import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions/asyncAction';

class Async extends Component{ 

  componentWillMount(){
    this.props.fetchUsers()
  }

  find(){
    this.props.onFind(this.searchInput.value);
  }

  render(){    
            const indexOfLast = this.props.currentPage * this.props.PerPage;
            const indexOfFirst = indexOfLast - this.props.PerPage;
            const current = this.props.users.slice(indexOfFirst, indexOfLast);
    
            const renderTable = current.map((user, index) => 
            <tr name={user.name} key={user.id}><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.address.zipcode}</td></tr>
            );

            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.users.length / this.props.PerPage); i++) {
              pageNumbers.push(i);
            }
    
            const renderPageNumbers = pageNumbers.map(number => {
              return (
                <button key={number} id={number} onClick={() => this.props.changePage(number)}>{number}</button>
              );
            });

    return(
      <div>

        <div>
          <input type="text" ref={input => {this.searchInput = input}} onChange={this.find.bind(this)}/>
        </div>

        <div>
        <table>
             <tbody>
               <tr>
                 <th>Firstname</th>
                 <th>Username</th> 
                 <th>Email</th>
                 <th>Phone</th>
                 <th>Zipcode</th>
               </tr>
              {renderTable}
              </tbody>
           </table>
            <div id="page-numbers">
              {renderPageNumbers}
            </div>
        </div>
      </div>
    );
}
}

const mapStateToProps = state => {
  return {    
    users: state.fetching.users.filter(user => user.name.includes(state.filterTables)),
    currentPage: state.paging.currentPage,
    PerPage: state.paging.PerPage
  };
};

const mapDispatchToProps = dispatch => {
  return{
    fetchUsers: () => {
      dispatch(fetchUsers());
    },

    onFind: name => {
      dispatch({type: 'FIND', payload: name.charAt(0).toUpperCase() + name.substr(1)})
    },

    changePage: page => {
      dispatch({type: 'PAGE', payload : page})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Async);




