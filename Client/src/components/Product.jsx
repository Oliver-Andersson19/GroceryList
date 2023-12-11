import React from 'react'

function Product({title, amount, id}) {
  return (
    <div className='product'>
        <input type="checkbox" />
        {title}
        {amount}
        {id}
    </div>
  )
}

export default Product