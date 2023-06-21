import React from 'react'

const GetCategories = (props) => {
  return (
    <>
      {props.data&&props.data.map(
        (value)=>{
          return(<button type="button" class="btn btn-dark">Dark</button>);
        }
      )}

    </>
  )
}

export default GetCategories