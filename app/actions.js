export  function increment(value) {
    return {type: 'INCREMENT', 
    payload: {
      value: value
    }}
  }

  export  function decrement(value) {
    return {type: 'DECREMENT', 
    payload: {
      value: value
    }}
  }

  