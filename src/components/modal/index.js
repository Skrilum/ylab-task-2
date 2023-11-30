import React from "react"
import PropTypes from "prop-types"
import "./style.css"

function Modal({ isShow, children }){
    return (
        <>
          {isShow && (
            <div className={"Modal"}>
              <div className={"Modal-content"}>
                {children}
              </div>
            </div>
          )}
        </>
      );
}

Modal.propTypes = {
    isShow: PropTypes.bool,
    children: PropTypes.node
}

export default React.memo(Modal)