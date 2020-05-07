import 'react-circular-progressbar/dist/styles.css'
import 'rc-slider/assets/index.css'

import './styles.css'

import PropTypes from 'prop-types'
import Slider from 'rc-slider';
import React, { useState } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'

const MoneyCollected = ({ amount, handleMoneyChange }) => {
    const [donationAmount, changeDonationAmount] = useState(10)
    return (
        <div className={'money-collected'}>
            <div className={'money-collected-progress'}>
                <CircularProgressbarWithChildren
                    value={amount}
                    maxValue={10000}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.75,
                        strokeLinecap: 'round',
                        // Colors
                        pathColor: `#005580`,
                        textColor: '#333333',
                        trailColor: 'rgba(0, 0, 0, 0.25)',
                        backgroundColor: 'white',
                    })}
                >
                    <p>Rahaa kerätty</p>
                    <p>{amount} €</p>
                </CircularProgressbarWithChildren>
            </div>
            <div className={'donate'}>
                <p>Olemme keräänneet 10 000 euron tavoitteestamme {Math.round((amount / 10000) * 100)} prosenttia. Lahjoita sinäkin!</p>
                <Slider
                    min={1}
                    max={100}
                    step={1}
                    defaultValue={10}
                    value={donationAmount}
                    onChange={val => changeDonationAmount(val)}
                    trackStyle={{ backgroundColor: '#005580', height: 10 }}
                    railStyle={{ height: 10, backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
                    handleStyle={{ height: 18, width: 18, borderRadius: 9, backgroundColor: 'white', borderColor: '#005580' }}
                />
                <div onClick={() => handleMoneyChange(donationAmount)}>
                    Lahjoita {donationAmount} €
                </div>
            </div>
        </div>
    )
}

MoneyCollected.propTypes = {
    amount: PropTypes.string.isRequired
}

export default MoneyCollected