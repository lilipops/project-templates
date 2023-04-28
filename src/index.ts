
import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { getNextDay } from './search-form.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getFavoritesAmount } from './data.js';
import { GetUserData } from './data.js';


window.addEventListener('DOMContentLoaded', () => {
  const { username, avatarUrl } = GetUserData();
  const favoritesAmount = getFavoritesAmount();
  renderUserBlock(username, avatarUrl, favoritesAmount);

  const checkInDate = getNextDay(1);
  const checkOutDate = getNextDay(3);
  renderSearchFormBlock(checkInDate, checkOutDate);
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )

  const searchForm = document.querySelector('#search-form') as HTMLFormElement;
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchData: SearchFormData = {
      checkIn: new Date((document.querySelector('#date-from') as HTMLInputElement).value),
      checkOut: new Date((document.querySelector('#date-to') as HTMLInputElement).value),
      provider: (document.querySelector('#provider') as HTMLSelectElement).value,
      maxPrice: (document.querySelector('#max-price') as HTMLInputElement).value ? parseInt((document.querySelector('#max-price') as HTMLInputElement).value, 10) : undefined,
    };
    search(searchData.checkIn, searchData.checkOut, searchData.maxPrice);
  });
});

export interface SearchFormData {
  checkIn: Date;
  checkOut: Date;
  provider: string;
  maxPrice?: number;
}

function dateToUnixStamp(date: Date): number {
  return date.getTime() / 1000;
}

function responseToJson(requestPromise: Promise<Response>): Promise<unknown> {
  return requestPromise
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      return JSON.parse(response);
    });
}

export function search(checkInDate: Date, checkOutDate: Date, maxPrice?: number): Promise<unknown> {
  let url = 'http://localhost:3030/places?' +
    `checkInDate=${dateToUnixStamp(checkInDate)}&` +
    `checkOutDate=${dateToUnixStamp(checkOutDate)}&` +
    'coordinates=59.9386,30.3141';

  if (maxPrice != null) {
    url += `&maxPrice=${maxPrice}`;
  }
  
  return responseToJson(fetch(url));
}
