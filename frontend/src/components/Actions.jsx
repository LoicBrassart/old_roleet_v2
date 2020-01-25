import React, { useState } from "react";
import { spring, Motion } from "react-motion";
import "./styles/Actions.scss";

// ---------------------------------------------- Helpers
const DEG_TO_RAD = 0.0174533;
function toRadians(degrees) {
  return degrees * DEG_TO_RAD;
}

// ---------------------------------------------- Items
function ActionItem({ index, item, isOpen, options, nbItems }) {
  let { childButtonDiam, mainButtonDiam, stiffness, damping } = options;
  const childClosedStyle = {
    width: childButtonDiam,
    height: childButtonDiam,
    zIndex: -1,
    top: spring(mainButtonDiam / 2 - childButtonDiam / 2, {
      stiffness,
      damping
    }),
    left: spring(mainButtonDiam / 2 - childButtonDiam / 2, {
      stiffness,
      damping
    })
  };
  const getFinalDeltaPositions = index => {
    let NUM_CHILDREN = nbItems;
    let CHILD_BUTTON_DIAM = options.childButtonDiam;
    let FLY_OUT_RADIUS = options.flyOutRadius;
    let SEPARATION_ANGLE = options.seperationAngle;
    let ROTATION = options.rotation;
    let FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE;
    let BASE_ANGLE = (180 - FAN_ANGLE) / 2 + 90 + ROTATION;

    let TARGET_ANGLE = BASE_ANGLE + index * SEPARATION_ANGLE;
    return {
      deltaX:
        FLY_OUT_RADIUS * Math.cos(toRadians(TARGET_ANGLE)) -
        CHILD_BUTTON_DIAM / 2,
      deltaY:
        FLY_OUT_RADIUS * Math.sin(toRadians(TARGET_ANGLE)) +
        CHILD_BUTTON_DIAM / 2
    };
  };

  let { deltaX, deltaY } = getFinalDeltaPositions(index);
  const childOpenStyle = {
    width: childButtonDiam,
    height: childButtonDiam,
    zIndex: spring(0, { stiffness, damping }),
    top: spring(mainButtonDiam / 2 + deltaX, { stiffness, damping }),
    left: spring(mainButtonDiam / 2 - deltaY, { stiffness, damping })
  };

  return (
    <Motion key={index} style={isOpen ? childClosedStyle : childOpenStyle}>
      {style => (
        <div onClick={item.onClick} style={style} className="button-child">
          <img src="/img/logo.svg" />
        </div>
      )}
    </Motion>
  );
}

// ---------------------------------------------- Radial Menu
export function Actions({ elements, tweaks = {} }) {
  const [isOpen, toggleMenu] = useState(false);
  const options = {
    flyOutRadius: 60,
    mainButtonDiam: 60,
    childButtonDiam: 40,
    seperationAngle: 50,
    numElements: 4,
    stiffness: 320,
    damping: 17,
    rotation: -45,
    mainButtonIcon: "bars",
    ...tweaks
  };

  return (
    <div className="button-container">
      {elements.map((item, i) => {
        return (
          <ActionItem
            key={i}
            index={i}
            item={item}
            nbItems={elements.length}
            isOpen={isOpen}
            options={options}
          />
        );
      })}
      <div
        className="button-menu"
        style={{
          width: `${options.mainButtonDiam}px`,
          height: `${options.mainButtonDiam}px`
        }}
        onClick={() => {
          toggleMenu(!isOpen);
        }}
      >
        <img src="/img/logo.svg" alt="" />
      </div>
    </div>
  );
}
