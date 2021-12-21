import PropTypes from 'prop-types';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import s from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.listItem}>
      <p className={s.itemDesc}>{name}:</p>
      <p className={s.itemDesc}>{number}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactListItem;
