const React = require("react");
const Layout = require("../Layout");
const Main = require("./MainPage");
const CardLot = require("../components/CardLot");

const AccountPage = ({user, lotData}) => (
  <Layout>
    <Main user={user}/>
    <h3>Добро пожаловать</h3>
    <a href="/bidding">Разместить лот</a>
    <div className="megadiv">
      {lotData && lotData.length ? (
        lotData.map((el) => <CardLot key={el.id} el={el} />)
      ) : (
        <h3>Вы пока не разместили ни одного лота</h3>
      )}
    </div>
  </Layout>
);

module.exports = AccountPage;
