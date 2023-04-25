

export interface SearchFormData {
    checkIn: Date;
    checkOut: Date;
    provider: string;
    maxPrice?: number;
  }

//infaly trying change something here

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


export function search(checkInDate: Date, checkOutDate: Date, maxPrice?: number) {
  let url = 'http://localhost:3030/places?' +
    `checkInDate=${dateToUnixStamp(checkInDate)}&` +
    `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
    'coordinates=59.9386,30.3141'

  if (maxPrice != null) {
    url += `&maxPrice=${maxPrice}`
  }
  
  return responseToJson(fetch(url))
}

  

