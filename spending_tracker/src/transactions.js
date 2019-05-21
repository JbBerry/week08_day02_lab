import React from 'react';
import {connect} from 'react-redux';

const Transactions=(props)=>{

  const list = props.transactions.map((transaction, index) => {
    return (
      <li key={index}>{transaction.text}, £{transaction.value}</li>
    );
  })

  // let total = 0;
  const grandTotal = props.transactions.reduce((total,transaction)=>{
    return total+parseInt(transaction.value)
  },0)

  const handleSubmit= (event)=>{
    event.preventDefault();
    const item = {text: event.target.text.value, value:event.target.value.value}
    console.log(item);
    props.addToList(item);
  };


return(  /*variables and functions need to be defined before the RETURN( */
  <>
    <form id="transaction-form" onSubmit={handleSubmit}>
      <label for="item">Add a transaction: </label>
      <input type="text" name="text" id="text"/>
      <input type="number" name="value" id="value"/>
      <input type="submit" value="Add"/>
    </form>
  <ul>{list}</ul>
  <p>TOTAL: £{grandTotal}</p>
  </>
)
}
const mapStateToProps =(state)=>{
  return {
    transactions:state /* NEED TO GIVE THIS A KEY, so can be reffered to on Ln6. */
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addToList:(item)=>{
      dispatch({type:'ADD_TRANSACTION', item:item});  /* need to make sure these {key:value} pairs match with the reducer */
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
