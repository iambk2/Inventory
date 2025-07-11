import React from 'react'
import "./Rating.css"

const Ratings = () => {
  return (
    <>
  <section className="py-3 text-center mb-4">
  <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
    
    <div className="d-flex align-items-center gap-2">
      <img src="/images/g2-crowd-logo.svg" alt="Logo" style={{ height: '20px' }} />
      <img src="/images/rating.svg" alt="Rating Star" style={{ height: '18px' }} />
      <span>Capterra 4.5/5</span>
    </div>

    <div className="separator">|</div>

    <div className="d-flex align-items-center gap-2">
      <img src="/images/capterra-logo.svg" alt="Logo" style={{ height: '20px' }} />
      <img src="/images/rating.svg" alt="Rating Star" style={{ height: '18px' }} />
      <span>G2 Crowd 4.5/5</span>
    </div>

    <div className="separator">|</div>

    <div className="d-flex align-items-center gap-2">
      <img src="/images/software-advice-logo.svg" alt="Logo" style={{ height: '20px' }} />
      <img src="/images/rating.svg" alt="Rating Star" style={{ height: '18px' }} />
      <span>Software Advice 4.7/5</span>
    </div>

  </div>
</section>


    </>

)
}

export default Ratings