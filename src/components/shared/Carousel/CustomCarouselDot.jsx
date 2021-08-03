import React from 'react'
import classNames from "classnames"

function CustomCarouselDot({
    onClick,
    active
  }) {
    return (
        <div className="py-1 px-2 cursorPointer" onClick={e => {
            onClick();
            e.preventDefault();
          }}>
            <button
              className={classNames("customCarouselDot", {
                "customCarouselDot--active": active
              })}
            >
            </button>
        </div>
    )
}

export default CustomCarouselDot


