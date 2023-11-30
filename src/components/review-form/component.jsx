import { useReducer } from "react";
import {Counter} from "../counter/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SET_NAME = 'Entering a name value';
const SET_TEXT = 'Entering review text';
const SET_RATING = 'Entering rating value';

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

    case SET_RATING:
      return {...state, rating: payload.rating}

  }
  throw Error('Unknown action: ' + type);
};

export const ReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(reducer, defaultFormValue)

  return (
    <form className={className}>
      <div className={styles.container}>
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
      <div className={classNames(styles.container, styles.marginTop)}>
        <label htmlFor="text">Text</label>
        <textarea
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
        className={styles.marginTop}
        value={formValue.rating}
        increment={() => dispatch({
          type: SET_RATING,
          payload: { rating: formValue.rating + 0.5 }
        })}
        decrement={() => dispatch({
          type: SET_RATING,
          payload: { rating: formValue.rating - 0.5}
        })}
      />
    </form>
  )
}