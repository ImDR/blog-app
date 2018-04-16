import {connect} from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = (state)=>({
    data:'Test'
})
const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;