import React from 'react'

const Anchor = ({ href, children, ...props }) => {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(href)

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div {...props} onClick={handleClick} role="presentation">
      {children}
    </div>
  )
}

export default Anchor
