
const React = require("react");
const Layout = require("../Layout");

const OneLotPage = ({ lotData }) => (
  <Layout>
    <h1>{lotData.title}</h1>
    <p>{lotData.description}</p>
    <p>Начало торгов: {new Date(lotData.startDate).toLocaleDateString()}</p>
    <p>Конец торгов: {new Date(lotData.endDate).toLocaleDateString()}</p>
    <p>Номер продавца: {lotData.user_id}</p>
    <div className="form-container">
      <form className="needs-validation" id="torgi" noValidate="" method="POST">
        <div className="col-12">
          <input
            type="number"
            className="form-control"
            name="user_id"
            placeholder="Ваша ставка"
            required=""
          />
        </div>
        <button type="submit" className="w-100 btn btn-outline-warning btn-lg">
          Поставить
        </button>
      </form>
    </div>
  </Layout>
);

module.exports = OneLotPage;

