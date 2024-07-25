export default function Square({ value }) {
  return (
    <>
      <div className="row-1">
        <button className="square-class">{value}</button>
        <button className="square-class">{value}</button>
        <button className="square-class">{value}</button>
      </div>
      <div className="row-2">
        <button className="square-class">{value}</button>
        <button className="square-class">{value}</button>
        <button className="square-class">{value}</button>
      </div>
      <div className="row-3">
        <button className="square-class">{value}</button>
        <button className="square-class">{value}</button>
        <button className="square-class">{value}</button>
      </div>
    </>
  );
}
