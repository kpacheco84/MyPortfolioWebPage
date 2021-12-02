import React from 'react'
import Fade from 'react-reveal'

import graph from '../assets/graph.svg'
import quote_left from '../assets/quote_left.svg'
import quote_right from '../assets/quote_right.svg'

const Quote = (props) => {
  return (
    <div id="quote" className="quote">
      <div className="quote_content_left">
        <Fade left duration={1000}>
          <img src={graph} />
        </Fade>
      </div>
      <div className="quote_content_right">
        <div>
          <img style={{ width: '50px' }} src={quote_left} />
        </div>
        <br></br>
        <Fade right duration={1000}>
          <h2>In God We Trust All Others Must Bring Data.</h2>
          <p>
            – W. Edwards Deming (statistician, professor, author, lecturer, and
            consultant)
          </p>
        </Fade>
        <div style={{ textAlign: 'right' }}>
          <img src={quote_right} style={{ width: '50px' }} />
        </div>
      </div>
    </div>
  )
}

export default Quote
