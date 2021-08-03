import React, { useState } from 'react'

export default function AccordionFrame({ title, children }) {
    const [isOpen, setOpen] = React.useState(false);
    
    return (
      <div className="accordion-wrapper">
        
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  }