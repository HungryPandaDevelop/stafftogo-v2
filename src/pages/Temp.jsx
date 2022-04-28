
import { connect } from 'react-redux';

import { addCashActionIn } from 'store/actions/addCash';
import { removeCashActionIn } from 'store/actions/removeCash';

import { addCustomerActionIn } from 'store/actions/addCustomer';
import { removeCustomerActionIn } from 'store/actions/removeCustomer';

import { fetchCustomers } from 'store/asyncActions/customers';

const Temp = (props) => {

  // -------------------------------------------------------

  const addCustomer = (name, props) => {

    const customer = {
      name: name,
      id: Date.now(),
    }

    props.addCustomerActionIn(customer)
  }

  const removeCustomer = (customer) => {
    props.removeCustomerActionIn(customer.id)
  }
  const loadCustomer = () => {
    props.fetchCustomers();
  }

  return (
    <div>

      <h1>
        Тест редюсеров

      </h1>
      <h2>
        {props.props.cash.cash}
      </h2>
      <button onClick={() => { props.addCashActionIn(5) }}>+</button>
      <button onClick={() => { props.removeCashActionIn(5) }}>-</button>

      <hr />
      {

        props.props.customers.customers.length > 0 ? (
          props.props.customers.customers.map((el, index) => (
            <div key={index}
              onClick={() => removeCustomer(el)}
            >
              {el.name}
            </div>
          ))
        ) : 'empty'
      }
      <hr />
      <button onClick={() => { addCustomer('new', props) }}>+ cust</button>
      <hr />
      {/* <button onClick={()=>{dispatch(fetchCustomers())}}>+load all</button> */}
      <button onClick={loadCustomer}>load</button>
    </div>
  )
}

const mapStateToProps = (props) => {
  return {
    props: props
  }
}

export default connect(mapStateToProps,
  {
    addCashActionIn,
    removeCashActionIn,
    addCustomerActionIn,
    removeCustomerActionIn,
    fetchCustomers

  }
)(Temp)
