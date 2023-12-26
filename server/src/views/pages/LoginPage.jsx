const React = require("react");
const Layout = require("../Layout");

module.exports = function Login({ user }) {
  return (
    <Layout user={user}>
      <div className="form-container">
        <form className="needs-validation" noValidate="" method="POST">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Почта
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="you@example.com"
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
              placeholder="1234"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-100 btn btn-outline-warning btn-lg"
          >
            Войти
          </button>
        </form>
      </div>
    </Layout>
  );
};
