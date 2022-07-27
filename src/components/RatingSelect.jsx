import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// this whole aspect is needed to be able to select the numbers then pass up that selected number to the main feedback form without over clogging. Select is being passed down as a prop from feedback form and then we use select to change the state of rating in feedback form.

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(3);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <div>
      <ul className='rating'>
        <li>
          <input
            type='radio'
            name='rating'
            id='num1'
            value='1'
            checked={selected === 1}
            onChange={handleChange}
          />
          <label htmlFor='num1'>1</label>
        </li>
        <li>
          <input
            type='radio'
            name='rating'
            id='num2'
            value='2'
            checked={selected === 2}
            onChange={handleChange}
          />
          <label htmlFor='num2'>2</label>
        </li>
        <li>
          <input
            type='radio'
            name='rating'
            id='num3'
            value='3'
            checked={selected === 3}
            onChange={handleChange}
          />
          <label htmlFor='num3'>3</label>
        </li>
      </ul>
    </div>
  );
}

export default RatingSelect;
