import '../index.css'
import { useState } from 'react';

const UserInput = ({onChange, User}) => {

    return(
        <section id='user-input'>
        <div className='input-group'>
            <p>
            <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
            <input type='number' id='initial-investment' value={User.initialInvestment} required onChange={(event) => onChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
            <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
            <input type='number' id='annual-investment' value={User.annualInvestment} required onChange={(event) => onChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
        <div className='input-group'>
            <p>
            <label htmlFor="expected-return">EXPECTED RETURN</label>
            <input type='number' id='expected-return' value={User.expectedReturn} required onChange={(event) => onChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
            <label htmlFor="duration">DURATION</label>
            <input type='number' id='initial-investment' value={User.duration} required onChange={(event) => onChange('duration', event.target.value)}/>
            </p>
        </div>
        </section>
    );
};

export default UserInput;