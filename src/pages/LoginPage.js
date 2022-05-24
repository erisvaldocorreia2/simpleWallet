import React from "react";

export default function LoginPage() {
  const key = "@testSimpleWallet-2022";
  const [contentKey, setContentKey] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  function handleChange(event) {
    setPassword(event.target.value);
  }

  function handleChangeConfirm(event) {
    setConfirmPassword(event.target.value);
  }

  React.useEffect(() => {
    const content = window.localStorage.getItem(key);
    setContentKey(content);
  }, []);

  return (
    <div>
      <h1>Simple Wallet</h1>
      <h2>Login</h2>

      {contentKey !== null ? (
        <p>Há conteudo</p>
      ) : (
        <div>
          <p>Crie uma senha para usar a carteira</p>
          <form>
            <label htmlFor="name">Defina uma senha: </label>
            <input value={password} onChange={handleChange} id="name" />
            <label htmlFor="name">Repita a senha: </label>
            <input
              value={confirmPassword}
              onChange={handleChangeConfirm}
              id="name"
            />
          </form>
        </div>
      )}
    </div>
  );
}
