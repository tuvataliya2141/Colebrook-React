import React from 'react'

function Loding() {
  return (
    <div>
        <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <img src="assets/imgs/theme/loading.gif" alt="Loding..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loding;
