export const getAllSnacks = () => {
  return fetch(`https://api.wegmans.io/products/categories/6942-629-648?api-version=2018-10-18&subscription-key=c455d00cb0f64e238a5282d75921f27e`)
    .then((response) => response.json())
    .then((data) => {
      let randomSnackIds = [];
      for (let i = 0; i < 10; i++ ) {
        const numberFetched = data.products.length;
        const randomIndex = Math.floor(Math.random() * Math.floor(numberFetched))
        randomSnackIds.push(data.products[randomIndex].sku)
        console.log(randomSnackIds)
      }
      return randomSnackIds
    })
};