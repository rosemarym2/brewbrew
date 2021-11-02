import Modal from "../Modal/Modal";
import { useState } from "react";
const MoreInfo = (props) => {
  const [showTips, setShowTips] = useState(false);
  const [showPairing, setShowPairing] = useState(false);

  if (!props.pairing) {
    return <p>loading...</p>;
  }
  return (
    <div style={{ border: "solid 2px green" }}>
      <h1>More Info</h1>
      <Modal
        oppositeModal={showPairing}
        setOppositeModal={setShowPairing}
        show={showTips}
        setShow={setShowTips}
        tips
      >
        <h3>brewing tips</h3>
        <p>{props.tips}</p>
      </Modal>
      <Modal
        oppositeModal={showTips}
        setOppositeModal={setShowTips}
        show={showPairing}
        setShow={setShowPairing}
        pairing
      >
        <h3>food pairing</h3>
        {props.pairing.map((pair, index) => {
          return <p key={index}>{pair}</p>;
        })}
      </Modal>
    </div>
  );
};
export default MoreInfo;
