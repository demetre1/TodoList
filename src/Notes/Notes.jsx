/* eslint-disable react/prop-types */
function Notes({ noteList, onChecboxClik, Sort }) {
  let sortOrder = noteList;
  if (Sort === "description")
    sortOrder = noteList.slice().sort((a, b) => a.note.localeCompare(b.note));
  if (Sort === "input") sortOrder = noteList;
  if (Sort === "packed")
    sortOrder = noteList
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  let length = sortOrder?.length;

  return (
    <div className="Note">
      {length >= 1 ? (
        sortOrder.map((e) => (
          <Note Notes={e} key={e.id} onCheck={onChecboxClik} />
        ))
      ) : (
        <>
          <i className="fa-solid fa-user-secret big"></i>
          Empty...
        </>
      )}
    </div>
  );
}

function Note({ Notes, onCheck }) {
  return (
    <>
      <div className="note">
        <input type="checkbox" onChange={() => onCheck(Notes.id)} />
        <p className={Notes.checked ? "crose" : ""}>{Notes.note}</p>
      </div>
      <hr />
    </>
  );
}

export default Notes;
