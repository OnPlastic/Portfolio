// auth.js
document.addEventListener("DOMContentLoaded", async () => {
  const auth0 = await createAuth0Client({
    domain: 'YOUR_DOMAIN',
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: window.location.origin
  });

  const isAuthenticated = await auth0.isAuthenticated();

  if (!isAuthenticated) {
    // Benutzer ist nicht authentifiziert, leite zur Auth0-Login-Seite weiter
    await auth0.loginWithRedirect();
  } else {
    // Benutzer ist authentifiziert, erlaube Zugriff auf die Website
    const user = await auth0.getUser();
    console.log("Benutzerinfo:", user);
  }
});

window.logout = async () => {
  const auth0 = await createAuth0Client({
    domain: 'YOUR_DOMAIN',
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: window.location.origin
  });
  auth0.logout({
    returnTo: window.location.origin
  });
};
