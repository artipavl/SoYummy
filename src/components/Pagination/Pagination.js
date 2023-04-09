import { Box} from './Pagination.styled';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, page, change }) => {
  return (
    <Box>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={page + 2}
        onPageChange={change}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </Box>
  );
};

export default Pagination;
