import Modal from "../Modal/Modal";
import "./MoreInfo.css";
import { useState } from "react";
const MoreInfo = (props) => {
  const [showTips, setShowTips] = useState(false);
  const [showPairing, setShowPairing] = useState(false);

  if (!props.pairing) {
    return <p>loading...</p>;
  }
  return (
    <div id="moreInfoWrapper">
      <h1>More Info</h1>
      <div id="moreInfoContainer">
        <div id="moreInfoItems">
          <div>
            <h2>{props.name}</h2>
            <p>{props.tagline}</p>
            <p>{props.first_brew}</p>
          </div>
          <div id="img_modal">
            <div id="modals">
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
            <div id="brew_img_cont">
              {props.img_url ? (
                <img alt="preview of beer packaging"id="brew_img" src={props.img_url} />
              ) : (
                <p>no image</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;
