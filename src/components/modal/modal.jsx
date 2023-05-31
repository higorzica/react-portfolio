import React from 'react'


const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '150px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black'
}

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={{ cursor: 'pointer', position: 'absolute', top:0, right: 10, fontWeight:'bold', fontSize: '20px '}} onClick={setModalOpen}>
            x
          </div>
          <div style={{ fontWeight:'bold', fontSize: '20px'}}>{children}</div>
        </div>
      </div>
    )
  }

  return null
}




  // position: 'fixed',
  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0,
  // backgroundColor: 'rgba(0, 0, 0, .7)',
  // zIndex: 1000