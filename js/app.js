const ADMIN_HASH = "__ADMIN_HASH__";

async function verifyAdminPassword(inputPassword) {
    if (!ADMIN_HASH || ADMIN_HASH === "__ADMIN_HASH__") {
        console.warn("Mode Admin par défaut ou non configuré.");
        return inputPassword === "admin"; // Mot de passe de secours en local si besoin
    }

    const msgBuffer = new TextEncoder().encode(inputPassword);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const inputHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return inputHash === ADMIN_HASH;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("NerdStats Studio initialisé.");
});
