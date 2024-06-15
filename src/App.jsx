import { useState } from "react";
import Input from "./Input/Input";
import Notes from "./Notes/Notes";
import Button from "./Button/Button";
import Card from "./Card/Card";

function App() {
  const [dark, setDark] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [Sort, setSort] = useState("");
  function HandleDisplay() {
    setDisplayCard(!displayCard);
    setNote("");
  }
  function HandleCheckBox(id) {
    setList((list) =>
      list.map((note) =>
        note.id === id ? { ...note, checked: !note.checked } : note
      )
    );
  }
  const filterdBooks = list.filter((note) => note.note.includes(search));

  function HendleDarkBtn() {
    setDark(!dark);
  }
  console.log(filterdBooks?.length);
  return (
    <div className={dark ? "BlkBackground" : "container"}>
      <div className="App">
        <Input
          DarkBtnClick={HendleDarkBtn}
          dark={dark}
          search={search}
          setSearch={setSearch}
          onSort={setSort}
        />
        <Notes
          noteList={filterdBooks}
          onChecboxClik={HandleCheckBox}
          Sort={Sort}
        />
        {displayCard && (
          <Card
            setNote={setNote}
            notes={note}
            setList={setList}
            onClick={HandleDisplay}
          />
        )}
        <Button className={"AddBtn"} someFun={HandleDisplay}>
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
