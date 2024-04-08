import styles from "../styles/login/login.css";

export const meta = () => {
  return [{ title: "DreamIndex || Log In" }];
};

export default function LogIn() {
  return (
    <body>
      <div className="centered">
        <div className="loginContainer">
          <h1>Login</h1>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              required=""
            />
            <label for="name" class="form__label">
              Username
            </label>
          </div>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              required=""
            />
            <label for="name" class="form__label">
              Phone #
            </label>
          </div>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              required=""
            />
            <label for="name" class="form__label">
              Password
            </label>
          </div>
          <button className="loginButton">
            <h2>Login</h2>
          </button>
        </div>
      </div>
    </body>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
