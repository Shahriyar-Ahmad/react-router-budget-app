// rrd
import React from 'react'
import { Form } from 'react-router-dom'

// Icon
import { UserPlusIcon } from '@heroicons/react/24/solid'

// assests
import introPic from  '../assets/illustration.jpg'

function Intro() {
  return (
    <div className='intro'>
        <div>
            <h1>
                Take Control of  
                 <span className='accent'>
                    &nbsp; Your Money
                </span>
            </h1>
            <p>
                Personal budget is secret to 
                financial freedom. Start 
                Your journey today.
            </p>
            <Form method='post'>
                <input
                type='text'
                name='userName'
                required
                placeholder='Enter Your Name.'
                aria-label='Your name'
                autoComplete='given-name'
                />
                <input type="hidden" name='_action' value='newUser' />
                <button 
                type='submit'
                className='btn btn--dark'>
                 <span>Create Account</span>
                 <UserPlusIcon width={20}/>
                </button>
            </Form>
        </div>
    <img src={introPic} alt='Intro Pic'/>
    </div>
  )
}

export default Intro
