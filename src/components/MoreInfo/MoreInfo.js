import Modal from "../Modal/Modal";

const MoreInfo = (props) => {
  if (!props.pairing) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h1>More Info</h1>
      <Modal tips>
          <h3>brewing tips</h3>
            <p>{props.tips}</p>
      </Modal>
      <Modal pairing>
        <h3>food pairing</h3>
        {props.pairing.map((pair, index) => {
          return <p key={index}>{pair}</p>;
        })}
      </Modal>

    </div>
  );
};
export default MoreInfo;
