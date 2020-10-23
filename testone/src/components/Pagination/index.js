import './Pagination.scss';
import React from 'react';
import Button from './Button';

const Pagination = ({ max_pages = 1, query, onNumberClick, disableNext ,onClickBack , onClickNext }) => {
  const { page = 1 } = query; //, per_page = 30, since = ''

  const prepareNumber = () => {
    const pagesNumbersArray = Array.from({length: max_pages}, (val, i) => {
      const num = i + 1;
      return <span className={`page-number ${num === page ? 'active' : ''}`} key={num} onClick={() => onNumberClick(num)}>{ ` ${num} ` }</span>
    })

    const dotSpan = (key) => <span key={key}>{' ... '}</span>;

    const preLeadNumbers = page !== 1 ? [pagesNumbersArray[0], dotSpan("dots1")] : [];
    const leadNumbers = page < max_pages - 1 ? pagesNumbersArray.slice(page - 1, page + 1) : [];
    const midNumbers = page < max_pages - 1 ? dotSpan("dots2") : [];
    const endNumbers = pagesNumbersArray.slice(-2);
    
    return preLeadNumbers.concat(leadNumbers).concat(midNumbers).concat(endNumbers);
  }
  
  return (
    <div className="pagination">
      <div className="numbers">
        { prepareNumber() }
      </div>
      <div className="actions">
        <Button
          addClass="btn btn-back fas fa-angle-left"
          text="<"
          disabled={page === 1}
          onClick={onClickBack}
        />

        <Button
          addClass="btn btn-next fas fa-angle-right"
          text=">"
          disabled={disableNext || page === max_pages}
          onClick={onClickNext}
        />
      </div>
    </div>
  )
};

export default Pagination;
