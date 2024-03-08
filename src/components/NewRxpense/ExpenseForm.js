import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formdata, setformdata] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const [formVisible, setFormVisible] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.saveExpenseData(formdata);
    setformdata({ title: '', amount: '', date: '' });
    setFormVisible(false);
  };

  const yearChangeHandler = (event) => {
    const selectedYear = event.target.value;
    props.onFilterYear(selectedYear);
  };

  const cancelHandler = () => {
    setFormVisible(false);
  };

  const showFormHandler = () => {
    setFormVisible(true);
  };

  return (
    <div className='main'>
      {!formVisible && <button onClick={showFormHandler}>Add Expense</button>}
      {formVisible && (
        <form onSubmit={submitHandler}>
          <div>
            <label>
              Expense Title:
              <input type='text' name='title' value={formdata.title} onChange={changeHandler} />
            </label>
          </div>
          <div>
            <label>
              Expense Amount:
              <input type='number' name='amount' value={formdata.amount} onChange={changeHandler} />
            </label>
          </div>
          <div>
            <label>
              Date:
              <input type='date' name='date' value={formdata.date} onChange={changeHandler} />
            </label>
          </div>
          <button type='button' className='cancel-btn' onClick={cancelHandler}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </form>
      )}

      <div className='filter'>
        <label>
        <select name="year" value={formdata.year} onChange={yearChangeHandler}>
              <option value="">Select Year</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>

            </select>
            
        </label>
      </div>
    </div>
  );
};

export default ExpenseForm;
