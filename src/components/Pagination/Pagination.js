import { Box } from './Pagination.styled';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, change, forcePage = 1 }) => {
  return (
    <Box>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={window.innerWidth >= 768 ? 2 : 1}
        pageRangeDisplayed={window.innerWidth >= 768 ? 5 : 1}
        onPageChange={change}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        forcePage={forcePage - 1}
      />
    </Box>
  );
};

export default Pagination;
