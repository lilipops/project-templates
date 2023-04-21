
import fetch from 'node-fetch';

interface SearchFormData {
    query: string;
    category: string;
    dateFrom?: Date;
    dateTo?: Date;
    minPrice?: number;
    maxPrice?: number;
  }



function dateToUnixStamp(date) {
  return date.getTime() / 1000
}

function responseToJson(requestPromise) {
  return requestPromise
    .then((response) => {
      return response.text()
    })
    .then((response) => {
      return JSON.parse(response)
    })
}


function search(checkInDate, checkOutDate, maxPrice) {
  let url = 'http://localhost:3030/places?' +
    `checkInDate=${dateToUnixStamp(checkInDate)}&` +
    `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
    'coordinates=59.9386,30.3141'
  
  if (maxPrice != null) {
    url += `&maxPrice=${maxPrice}`
  }
  
  return responseToJson(fetch(url))
}
  

const searchForm = document.querySelector('#search-form') as HTMLFormElement;
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const searchData: SearchFormData = {
    query: formData.get('query') as string,
    category: formData.get('category') as string,
    dateFrom: new Date(formData.get('date-from') as string),
    dateTo: new Date(formData.get('date-to') as string),
    minPrice: formData.get('min-price') ? parseInt(formData.get('min-price') as string, 10) : undefined,
    maxPrice: formData.get('max-price') ? parseInt(formData.get('max-price') as string, 10) : undefined,
  };
  search(searchData.dateFrom, searchData.dateTo, searchData.maxPrice)
});
