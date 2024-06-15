/* eslint-disable react/prop-types */
import Button from "../Button/Button";

function Card({ setNote, notes, setList, onClick }) {
  function handleAdd(e) {
    e.preventDefault();
    if (notes.length < 1) return;
    const newArray = { note: notes, id: Date.now(), checked: false };

    setList((list) => [...list, newArray]);
    onClick();
  }
  return (
    <form className="card" onSubmit={(e) => handleAdd(e)}>
      <div className="head">
        <label htmlFor="">New Note</label>
        <input
          type="text"
          placeholder="Input Your note"
          className="input"
          value={notes}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="btns">
        <Button className={"cancel"} someFun={onClick}>
          CANCEL
        </Button>
        <Button className={"apply"}>APPLY</Button>
      </div>
    </form>
  );
}

export default Card;
