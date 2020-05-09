import axios from 'axios'
import React, {useEffect, useState} from 'react'

import ImageSection from '../ImageSection'
import MoneyCollected from './Components/MoneyCollected'

const URL = 'https://cranky-mirzakhani-cbd420.netlify.app/.netlify/functions/index/api/money/5eb2e0a491e3e01590e9b9ce'

//niin ne kasvavat hidastuvalla nopeudella lopullisiin lukuihin


const Donation = () => {
    const [moneyCollected, setMoney] = useState('')
    const [old, setOld] = useState('')

    useEffect(() => {
      axios.get(URL).then(response => response.data)
        .then(initialPeople => {
          setMoney(initialPeople.number)
          setOld(initialPeople.number)
        })
      }, [])

    const handleMoneyChange = (money) => {

      const updatedMoney = {
        number: money + Number(old)
      }

      axios.put(URL, updatedMoney)
      setMoney(updatedMoney.number)
      setOld(updatedMoney.number)
    }

    return (
      <ImageSection
        title={'"Liity yhteisiin talkoisiimme"'}
        description={
          'Lahjoita sinäkin tänään. Kerätyillä rahoilla rahoitamme uusien kalateiden rakentamista ympäri Suomea.'
        }
        backgroundImage={'./images/3.jpg'}
        cardAlignment={'left'}
      >
        <MoneyCollected amount={moneyCollected} handleMoneyChange={handleMoneyChange} />
      </ImageSection>
    )
  }


export default Donation;
