import React, { useState } from 'react';
import styles from './ChooseLocation.module.css'

function AddressInput({setAddress, setIsForCustom}) {
  const [addressInput, setAddressInput] =  useState('');

  const handleAddressChange = (event) => {
    setAddressInput(event.target.value);
  }

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    setAddress(addressInput);
    setIsForCustom(true);
  }

  return (
    <form
      className={styles.addressInput}
      name='address form'
      onSubmit={handleAddressSubmit}>
      <input
        className={styles.inputBox}
        type='text'
        placeholder='address'
        value={addressInput}
        onChange={handleAddressChange}>
      </input>
      <button
        type='submit'
        className={styles.submitButton}>
        Submit
      </button>
    </form>
  )
}

export default AddressInput;