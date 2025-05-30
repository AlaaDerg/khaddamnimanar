import React from 'react'
import './Pagelist.css'
function Pagelist() {
  return (
    <div className="pagination">
    <button>{'<'}</button>
    <button className="active">1</button>
    <button>2</button>
    <button>3</button>
    <span>...</span>
    <button>99</button>
    <button>{'>'}</button>
  </div>  )
}

export default Pagelist