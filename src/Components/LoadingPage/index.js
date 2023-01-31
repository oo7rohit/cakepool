import React from 'react'
import './style.css'
export default function LoadingPage() {
  return (
    <>
    <div className='primary-content'>
        <section className='content'>

                <ul className='word'>
                    <li>C</li>
                    <li>a</li>
                    <li>k</li>
                    <li>e</li>
                </ul>

                <ul className='word'>
                    <li>P</li>
                    <li>o</li>
                    <li>o</li>
                    <li>l</li>
                </ul>

        </section>
    </div>
    <button className='arrow-button'>
        <img src={require('../assets/images/arrow-button.png')} alt="" />
    </button>
    </>
  )
}
