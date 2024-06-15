import Button from "../Button/Button";
import Sort from "../Sort/Sort";

// eslint-disable-next-line react/prop-types
function Input({ DarkBtnClick, dark, setSearch, search, onSort }) {
  return (
    <div>
      <input
        type="text"
        className="inpt"
        placeholder="Enter Your Note"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      ></input>
      <Sort SetSearch={onSort} />
      <Button someFun={DarkBtnClick}>
        {dark ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
      </Button>
    </div>
  );
}

export default Input;
