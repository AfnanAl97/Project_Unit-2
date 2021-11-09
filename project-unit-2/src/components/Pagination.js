import React from 'react';
import './Footer.css'

const Pagination = ({ productsPerPage, totalproducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
  
      <div className='pagination'>
        {pageNumbers.map(number => (
    
    <div className='page-item'>
            <a onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
       </div>
        ))}
      </div>
 
  );
};

export default Pagination;