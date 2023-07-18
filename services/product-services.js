const getRequest = async () => {
  try {
    const data = await fetch('http://localhost:3000/products');
    return data.json;
  } catch(e) {
    /*window.location.href = ""; */
    return e;

  }
}

console.log(getRequest());

export const productServices = {
  getRequest
}