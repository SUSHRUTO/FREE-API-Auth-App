const BASE_URL = "https://api.freeapi.app/api/v1/users";

function showMessage(msg, isError = false) {
  const el = document.getElementById("message");
  el.innerText = msg;
  el.style.color = isError ? "red" : "green";
}

// REGISTER
async function register() {
  try {
    showMessage("Registering...");

    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: document.getElementById("reg-email").value,
        password: document.getElementById("reg-password").value,
        username: document.getElementById("reg-username").value,
        role: "ADMIN"
      })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    showMessage("✅ Registered successfully!");
  } catch (err) {
    showMessage("❌ " + err.message, true);
  }
}

// LOGIN
async function login() {
  try {
    showMessage("Logging in...");

    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: document.getElementById("login-username").value,
        password: document.getElementById("login-password").value
      })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    // Store user locally (since cookies won’t work due to CORS)
    localStorage.setItem("user", JSON.stringify(data.data));

    showMessage("✅ Login successful!");
  } catch (err) {
    showMessage("❌ " + err.message, true);
  }
}

// GET USER (from localStorage workaround)
function getUser() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) throw new Error("User not logged in");

    document.getElementById("user-data").innerText =
      `👤 ${user.username}`;

    showMessage("✅ User fetched!");
  } catch (err) {
    showMessage("❌ " + err.message, true);
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  document.getElementById("user-data").innerText = "Not logged in";
  showMessage("✅ Logged out!");
}