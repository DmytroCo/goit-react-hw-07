import React, { useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import styles from "./App.module.css";
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (
    <div className={styles.div} >
  <h1 className={styles.h1}>Phonebook</h1>
          <ContactForm  />
  <SearchBox  />
          <ContactList />
</div>
  )
}

export default App
