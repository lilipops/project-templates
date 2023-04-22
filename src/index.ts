import { SearchFormData } from './search'
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { getNextDay } from './search-form.js';
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { GetUserData } from './data.js'
import { GetFavoritesAmout } from './data.js';
import { search } from './search'

window.addEventListener('DOMContentLoaded', () => {
  const { username, avatarUrl } = GetUserData();
  const favoritesAmount = GetFavoritesAmout();
  renderUserBlock(username, avatarUrl, favoritesAmount);
 
  const checkInDate = getNextDay(1);
  const checkOutDate = getNextDay(3);
  renderSearchFormBlock(checkInDate, checkOutDate);
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})

const searchForm = document.querySelector('#search-form') as HTMLFormElement;
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const searchData: SearchFormData = {
    checkIn: new Date(formData.get('date-from') as string),
    checkOut: new Date(formData.get('date-to') as string),
    provider: formData.get('provider') as string,
    maxPrice: formData.get('max-price') ? parseInt(formData.get('max-price') as string, 10) : undefined,

  };
  search(searchData.checkIn, searchData.checkOut, searchData.maxPrice)
});


