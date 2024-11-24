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
      throw new Error(result.error?.message);
    }

    return result;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw new Error(error.message);
  }
};

export const fetchCategories = async (pageSize = 10, page = 1) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${API_URL}/categories?pageSize=${pageSize}&page=${page}`,
      requestOptions
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error?.message);
    }

    return result.data.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      imageUrl: category.image?.url,
      childCategories: category.childCategories.map((child) => ({
        id: child.id,
        name: child.name,
      })),
    }));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchProducts = async (pageSize = 10, page = 1) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = `${API_URL}/products?pageSize=${pageSize}&page=${page}`;

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    return result.data.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.featureImage?.url || null,
      category:
        product.categories?.length > 0
          ? product.categories[0].name
          : "Sin categoría",
    }));
  } catch (error) {
    throw new Error(error.message);
  }
};
