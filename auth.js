document.addEventListener("DOMContentLoaded", async () => {
  const auth0 = await createAuth0Client({
    domain: 'dev-ui6ntlnkvcb0l503.eu.auth0.com',
    client_id: 'z2Ajp97sTYXnAzu8N4tAZc5heSbJnvrY',
    redirect_uri: 'https://onplastic.github.io/Portfolio', // Stellen Sie sicher, dass dies exakt der konfigurierten URL entspricht
    cacheLocation: 'localstorage'
  });

  const query = window.location.search;
  if (query.includes('code=') && query.includes('state=')) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/Portfolio");
  }

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    const user = await auth0.getUser();
    console.log("Benutzerinfo:", user);
  } else {
    await auth0.loginWithRedirect();
  }
});

window.logout = async () => {
  const auth0 = await createAuth0Client({
    domain: 'dev-ui6ntlnkvcb0l503.eu.auth0.com',
    client_id: 'z2Ajp97sTYXnAzu8N4tAZc5heSbJnvrY',
    redirect_uri: 'https://onplastic.github.io/Portfolio', // Stellen Sie sicher, dass dies exakt der konfigurierten URL entspricht
    cacheLocation: 'localstorage'
  });
  auth0.logout({
    returnTo: 'https://onplastic.github.io/Portfolio' // Stellen Sie sicher, dass dies exakt der konfigurierten URL entspricht
  });
};
