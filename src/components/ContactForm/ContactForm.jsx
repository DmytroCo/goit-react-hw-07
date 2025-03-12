import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from "./ContactForm.module.css";
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';


const ContactForm = () => {
    const initialValues = { name: '', number: ''}
    const dispatch = useDispatch()
    const oneSubmit = (values, option) => {
    const newContact = {
        name: values.name,
        number: values.number,
        } 
        dispatch(addContact(newContact))
    option.resetForm()    
    }
    const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Too Short!").max(50, "Too Long!"),
    number: Yup.string().required("Number is required").matches(
    /^[0-9]+$/,
    "Number must contain only digits"
    ).min(3, "Too Short!").max(50, "Too Long!"),
})
    
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={oneSubmit}
                validationSchema={validationSchema}
            >
                <Form className={styles.form}>
                    <label className={styles.label}>
                        <span className={styles.span}>
                            Name
                        </span>
                        <Field className={styles.input} name="name" type="text"  ></Field>
                        <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '0.9em' }}/>
                    </label>
                    <label className={styles.label} >
                        <span className={styles.span}>
                            Number
                        </span>
                        <Field className={styles.input} name="number" type="tel" ></Field>
                        <ErrorMessage name="number" component="div" style={{ color: 'red', fontSize: '0.9em' }} />
                    </label>
                    <button className={styles.button} type="submit">Add contact</button>
                </Form>
            </Formik>
        )
    }


export default ContactForm