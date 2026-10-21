type propType = {
  brand: string;
};
const Popup = ({ brand }: propType) => {
  return (
    <div>
      {brand == "Intel" ? (
        <ul>
          <li>
            <span>Intel Core i5-12400F</span>
            <span>6 cores, 12 threads, LGA1700</span>
            <span>$90</span>
          </li>
        </ul>
      ) : null}
      {brand == "AMD" ? (
        <ul>
          <li>
            <span>Ryzen 5 5600</span>
            <span>6 cores, 12 threads, AM4</span>
            <span>$70</span>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Popup;
