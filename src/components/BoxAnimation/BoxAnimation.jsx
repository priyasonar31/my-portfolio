import "./styles.scss";

export const BoxAnimation = () => (
  <div class="area">
    <ul class="circles">
      {Array.from({ length: 10 }, (_, i) => (
        <li></li>
      ))}
    </ul>
  </div>
);
