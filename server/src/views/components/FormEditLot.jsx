// FormEditLot.jsx
const React = require("react");
const Layout = require("../Layout");

const FormEditLot = ({ lot }) => (
  <Layout>
    <div className="form-container">
      <form className="needs-validation"  data-id={lot.id} id="formeditlot" noValidate="" method="PUT">
        <div className="col-12">
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control" 
              name="title"
              placeholder="Название лота"
              value={lot.title}
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
            value={lot.description}
            required=""
          />
        </div>
        <div className="col-12">
          <input
            type="date"
            className="form-control"
            name="startDate"
            placeholder="Дата начала торгов"
            value={lot.startDate}
            required=""
          />
        </div>
        <div className="col-12">
          <input
            type="date"
            className="form-control"
            name="endDate"
            placeholder="Конец торгов"
            value={lot.endDate}
            required=""
          />
        </div>
        <div className="col-12">
          <input
            type="number"
            className="form-control"
            name="user_id"
            placeholder="Номер продавца"
            value={lot.user_id}
            required=""
          />
        </div>
        <button type="submit" className="w-100 btn btn-outline-warning btn-lg">
          Сохранить изменения
        </button>
      </form>
    </div>
  </Layout>
);

module.exports = FormEditLot;
