const React = require("react");
const Layout = require("../Layout");

const FormLot = ({ lot }) => (
  <Layout>
  <div className="form-container">
    <form className="needs-validation" id="formalot" noValidate="" method="POST">
      <div className="col-12">
        <div className="input-group has-validation">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Название лота"
            required=""
          />
        </div>
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Описание лота"
          required=""
        />
      </div>
      <div className="col-12">
        <input
          type="date"
          className="form-control"
          name="startDate"
          placeholder="Дата начала торгов"
          required=""
        />
      </div>
      <div className="col-12">
        <input
          type="date"
          className="form-control"
          name="endDate"
          placeholder="Конец торгов"
          required=""
        />
      </div>
      <div className="col-12">
        <input
          type="number"
          className="form-control"
          name="user_id"
          placeholder="Номер продавца"
          required=""
        />
      </div>
      <button type="submit" className="w-100 btn btn-outline-warning btn-lg">
        Добавить лот
      </button>
    </form>
  </div>
  </Layout>
);

module.exports = FormLot;