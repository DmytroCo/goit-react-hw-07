import React from 'react';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul className={styles.ul}>
            {contacts.map((contact) => (
                <Contact {...contact} key={contact.id} />
            ))}
        </ul>
    );
}