import { toggleType } from './store/actions'
import { connect } from 'react-redux'

const Filter = ({ toggleType }) => {
  return (
    <p className="filters" onClick={toggleType}>
      toggleType
    </p>
  );
};
const mapDispatchToProps = {
  toggleType
}
export default connect(null, mapDispatchToProps)(Filter)