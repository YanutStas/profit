const React = require("react");

const Layout = require("../Layout");

module.exports = function Reg({ user }) {
  return (
    <Layout user={user}>
      <div className="form-container">
        <form className="needs-validation" noValidate="" method="POST">
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Имя пользователя
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Логин"
                required=""
              />
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Почта
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="почта@почта.com"
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="(кто ж знает, какой у вас пароль))"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-100 btn btn-outline-warning btn-lg"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
};
