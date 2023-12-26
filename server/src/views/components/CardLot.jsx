const React = require("react");

const CardLot = ({ el }) => (
  <div className="card">
    <div className="superdiv">
      <h4>Название лота {el.title}</h4>
      <h4>Описание лота {el.description}</h4>
      <h4>начало торгов {el.startDate.toLocaleDateString()}</h4>
      <h4>Конец торгов {el.endDate.toLocaleDateString()}</h4>
      <h4>Номер продавца {el.user_id}</h4>
      <button
        data-id={el.id}
        type="button"
        className="w-100 btn btn-outline-warning btn-lg delete"
      >
        🗑️
      </button> 
      <button
        data-id={el.id}
        type="button"
        className="w-100 btn btn-outline-warning btn-lg edit"
      >
        Редактировать
      </button>
      <button
        data-id={el.id}
        type="button"
        className="w-100 btn btn-outline-warning btn-lg about"
      >
        Подробнее/Устроить торги
      </button>
    </div>
  </div>
);

module.exports = CardLot;
