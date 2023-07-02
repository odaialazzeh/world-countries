import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Error = ({ searchValue }) => (
  <>
    {' '}
    <Alert variant="danger">
      Your search -
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{searchValue}</span>
      {' '}
      - did not match any country.
    </Alert>
    {' '}
  </>
);

Error.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default Error;
