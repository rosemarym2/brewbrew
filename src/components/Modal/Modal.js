import "./Modal.css";
const Modal = ({
  tips,
  oppositeModal,
  setOppositeModal,
  show,
  setShow,
  children,
}) => {
  const openHandler = () => {
    setOppositeModal(false);
    setShow(!show);
  };
  const closeHandler = () => {
    setShow(false);
  };
  if (!children) {
    return <p>loading...</p>;
  }
  return (
    <div onClick={openHandler}>
      {show ? (
        <div className="modal">
          {children}
          <p id="closeModal" onClick={closeHandler}>close</p>
        </div>
      ) : (
        <div>{tips ? <p className="modalOpt">see tips</p> : <p className="modalOpt">see pairing</p>}</div>
      )}
    </div>
  );
};
export default Modal;
