import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'

const Phrase = ( {phRandom} ) => {

  return (
    
    <div className="phrase">
        <p className="parag">{phRandom.phrase}</p>
        <FontAwesomeIcon className="iconQuote" icon={faQuoteRight} />
    </div>
  )
}

export default Phrase