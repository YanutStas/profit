const React = require("react");

function NavBar({ user }) {
  return (
    <div>
      <h1>DBC Auction</h1>
      <div className="auth-menu-container">
        {user ? (
          <div>
            <h3>{user.username}</h3>
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
          </ul>
        )}
      </div>
    </div>
  );
}

module.exports = NavBar;
