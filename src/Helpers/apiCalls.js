export const getAllSnacksIds = () => {
  return fetch(`https://api.wegmans.io/products/categories/6942-629-648?api-version=2018-10-18&subscription-key=c455d00cb0f64e238a5282d75921f27e`)
    .then((response) => response.json())
    .then((data) => {
      let randomSnackIds = [];
      for (let i = 0; i < 10; i++ ) {
        const numberFetched = data.products.length;
        const randomIndex = Math.floor(Math.random() * Math.floor(numberFetched))
        randomSnackIds.push(data.products[randomIndex].sku)
      }
      return randomSnackIds
    })
};

export const getSnackDetail = (snackId) => {
  return fetch(`https://api.wegmans.io/products/${snackId}?api-version=2018-10-18&Subscription-Key=c455d00cb0f64e238a5282d75921f27e`)
    .then((response) => response.json())
    .then((data) => {
      let fetchedDetail = {};

      if (data.descriptions.consumer) {
        fetchedDetail.name = data.descriptions.consumer;
      } else {
        fetchedDetail.name = data.name;
      }

      // data.descriptions.consumer ? fetchedDetail.name = data.descriptions.consumer : fetchedDetail.name = data.name;

      fetchedDetail.brand = data.brand;
      fetchedDetail.sizeValue = data.size.value;
      fetchedDetail.sizeUnit = data.size.unitOfMeasure;
      fetchedDetail.allergens = data.allergens;
      fetchedDetail.ingredients = data.ingredients;
      fetchedDetail.organic = data.organic.agency;
      
      if (data.tradeIdentifiers.length > 0) {      
      fetchedDetail.image = data.tradeIdentifiers[0].images[0]
      }

      return fetchedDetail
    })
}

export const getSnackPrice = (snackId) => {
  return fetch(`https://api.wegmans.io/products/${snackId}/prices?api-version=2018-10-18&subscription-key=c455d00cb0f64e238a5282d75921f27e`)
    .then((response) => response.json())
    .then((data) => { return data.stores[0].price })
}