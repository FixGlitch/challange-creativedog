export const loginUser = async (email, password) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    identifier: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${API_URL}/auth/local`, requestOptions);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error?.message || "Error desconocido en el servidor"
      );
    }

    return result;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw new Error(
      error.message || "Credenciales incorrectas o problema con el servidor."
    );
  }
};
