import axios from 'axios'
import React, {useEffect, useState} from 'react'

import DonationSection from '../DonationSection'
import MoneyCollected from './Components/MoneyCollected'

const URL = 'https://cranky-mirzakhani-cbd420.netlify.app/.netlify/functions/index/api/money/5eb2e0a491e3e01590e9b9ce'

//reseaves information from the database and renders it on the page. Changes, when new donations are given
//uses moneycollected component to render 

const Donation = () => {
    const [moneyCollected, setMoney] = useState('')
    const [old, setOld] = useState('')

    //get the inital amount of money

    useEffect(() => {
      axios.get(URL).then(response => response.data)
        .then(initialPeople => {
          setMoney(initialPeople.number)
          setOld(initialPeople.number)
        })
      }, [])

      //sends information to database and updates the amount of money

    const handleMoneyChange = (money) => {

      const updatedMoney = {
        number: money + Number(old)
      }

      axios.put(URL, updatedMoney)
      setMoney(updatedMoney.number)
      setOld(updatedMoney.number)
    }

    return (
      <DonationSection
        title={'"Liity yhteisiin talkoisiimme"'}
        description={
          'Lahjoita sinäkin tänään. Kerätyillä rahoilla rahoitamme uusien kalateiden rakentamista ympäri Suomea.'
        }
        backgroundImage={'./images/3.jpg'}
        cardAlignment={'left'}
      >
        <MoneyCollected amount={moneyCollected} handleMoneyChange={handleMoneyChange} />
      </DonationSection>
    )
  }


export default Donation;
