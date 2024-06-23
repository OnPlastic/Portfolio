// auth.js

document.addEventListener("DOMContentLoaded", async function () {
    const auth0 = await createAuth0Client({
        domain: 'dev-ui6ntlnkvcb0l503.eu.auth0.com',
        client_id: 'cubDeQFTlzV1SnmUM01zsd5Hlj5JKtmc'
    });

    const isAuthenticated = await auth0.isAuthenticated();
    if (!isAuthenticated) {
        window.location.href = 'login.html';
    }
});
