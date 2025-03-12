import React from 'react'
import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({name, number, id}) => {
const dispatch = useDispatch()
return (
    <li className={styles.li}>
        <div className={styles.div}>
            <p className={styles.p} ><FaUser className={styles.icon} />{ name}</p>
            <p className={styles.p}><FaPhone className={styles.icon} />{number }</p>
            <button onClick={() => dispatch(deleteContact(id))} className={styles.button} >Delete</button>
        </div>
    </li>
)
}

export default Contact