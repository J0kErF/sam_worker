export const getCollections = async () => {
  //  print the url
  const res = await fetch("https://sam-admin-bay.vercel.app/api/collections", {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  
  if (!res.ok) {
    // print the error message fully detailing the error
    console.error("[getCollections] Failed to fetch", res.statusText);
    console.error("[getCollections] Failed to fetch", res.status);
    
    console.error("[getCollections] Failed to fetch"+res.statusText);
    console.error("[getCollections] Failed to fetch");
    return [];
  }
  return await res.json();
};

export const getCollectionDetails = async (collectionId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,
    {
      cache: "no-store", // ⬅️ this is the fix
    }
  );

  if (!res.ok) {
    console.error("[getCollectionDetails] Failed to fetch");
    return null;
  }

  return await res.json();
}

export const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("[getProducts] Failed to fetch");
    return [];
  }

  return await res.json();
};


export const getProductDetails = async (productId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
    {
      cache: "no-store", // 🔁 ensures we always get the latest data
    }
  );

  if (!res.ok) {
    console.error("[getProductDetails] Failed to fetch");
    return null;
  }

  return await res.json();
};

export const getSearchedProducts = async (query: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("[getSearchedProducts] Failed to fetch");
    return [];
  }

  return await res.json();
};
export const getOrders = async (customerId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("[getOrders] Failed to fetch");
    return [];
  }

  return await res.json();
};


export const getRelatedProducts = async (productId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("[getRelatedProducts] Failed to fetch");
    return [];
  }

  return await res.json();
};