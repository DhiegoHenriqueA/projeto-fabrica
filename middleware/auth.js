export default ({ redirect }) => {
  const isLogged = true;

  if (!isLogged) {
    return redirect("/auth/login");
  }
  console.log("verifica autenticação");
};
