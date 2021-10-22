import { API_ENDPOINT } from './api';

const apiAddress = {
  productInfo: `${API_ENDPOINT}products/ID`,
  productImages: `${API_ENDPOINT}products/ID/images`,
  productColors: `${API_ENDPOINT}products/ID/colors`,
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
