export const Counter = ({value, decrement, increment, min = 0, max = 5}) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => decrement()}
        disabled={value <= min}
      >
        -
      </button>
      <span>
        {value}
      </span>
      <button
        type="button"
        onClick={() => increment()}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  )
}