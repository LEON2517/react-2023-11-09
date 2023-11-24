import { useReducer } from "react";
import {Counter} from "../counter/component";

const SET_NAME = 'Entering a name value';
const SET_TEXT = 'Entering review text';
const SET_INCREMENT_RATING = 'Increase rating value';
const SET_DECREMENT_RATING = 'Decrease rating value';

const defaultFormValue = {
  name: '',
  text: '',
  rating: 5
}

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case SET_NAME:
      return {...state, name: payload.name}

    case SET_TEXT:
      return {...state, text: payload.text}

    case SET_INCREMENT_RATING:
      return {...state, rating: payload.rating}

    case SET_DECREMENT_RATING:
      return {...state, rating: payload.rating}

/*  В доке https://react.dev/reference/react/useReducer рекомендуется прокидывать ошибку вместо default,
    как делать правильно?
    default:
      return state;
*/
  }
  throw Error('Unknown action: ' + type);
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, defaultFormValue)

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(event) => dispatch({
            type: SET_NAME,
            payload: { name: event.target.value }
           })}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          value={formValue.text}
          onChange={(event) => dispatch({
            type: SET_TEXT,
            payload: { text: event.target.value }
          })}
        />
      </div>
      <Counter
        value={formValue.rating}
        increment={() => dispatch({
          type: SET_INCREMENT_RATING,
          payload: { rating: formValue.rating + 0.5 }
        })}
        decrement={() => dispatch({
          type: SET_DECREMENT_RATING,
          payload: { rating: formValue.rating - 0.5}
        })}
      />
    </form>
  )
}