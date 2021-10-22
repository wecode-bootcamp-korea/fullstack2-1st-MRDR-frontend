const apiAddress = {
  productInfo: 'http://localhost:8000/products/ID',
  productImages: 'http://localhost:8000/products/ID/images',
  productColors: 'http://localhost:8000/products/ID/colors',
};

const fetchData = async (id, apiAddr) => {
  try {
    let response = await fetch(apiAddr.replace('ID', id));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let productData = await response.json();
    return productData;
  } catch (err) {
    console.error(err);
  }
};

const getDividedArrByCount = (originArr, count) => {
  const resultArr = [];
  for (let i = 0; i < originArr.length; i++) {
    if (i % count === 0) {
      resultArr.push([]);
    }
    resultArr[parseInt(i / count)].push(originArr[i]);
  }
  return resultArr;
};

export { apiAddress, fetchData, getDividedArrByCount };
