import "./styles.scss";

export const BoxAnimation = () => (
  <div className="area">
    <ul className="circles">
      {Array.from({ length: 10 }, (_, i) => (
        <li></li>
      ))}
    </ul>
  </div>
);
