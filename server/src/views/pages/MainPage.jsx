const React = require("react");
const Layout = require("../Layout");

const Main = ({ user }) => (
  <Layout>
    <h1>DBC Auction</h1>
    <div className="auth-menu-container">
      {user ? (
        <div>
          <a href="/account">Ваш личный кабинет {user.username}</a>
          <p>|||</p>
          <a href="/logout">Выход</a>
          {/* <a href="/party">Устроить вечеринку</a> */}
        </div>
      ) : (
        <ul>
          <li>
            <a href="/login">Вход</a>
          </li>
          <li>
            <a href="/reg">Регистрация</a>
          </li>
          <li>
            <a href="/account">Посмотреть доступные торги</a>
          </li>
        </ul>
      )}
    </div>
  </Layout>
);

module.exports = Main;
