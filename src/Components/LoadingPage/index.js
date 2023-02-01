import React from 'react'
import './style.css'
export default function LoadingPage() {
  return (
    <>
    <div className='primary-content'>
        <section className='content'>
                <div>
                <ul className='word'>
                    <li><p>C</p></li>
                    <li><p>a</p></li>
                    <li><p>k</p></li>
                    <li><p>e</p></li>
                </ul>
                </div>
                <div>
                <ul className='word'>
                    <li><p>P</p></li>
                    <li><p>o</p></li>
                    <li><p>o</p></li>
                    <li><p>l</p></li>
                </ul>
                </div>

        </section>
    </div>
    <button className='arrow-button'>
        <img src={require('../assets/images/arrow-button.png')} alt="" />
    </button>
    </>
  )
}
