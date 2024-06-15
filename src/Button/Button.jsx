/* eslint-disable react/prop-types */
function Button({ children, someFun, className }) {
  return (
    <button className={className ? className : "btn"} onClick={someFun}>
      {children}
    </button>
  );
}

export default Button;
