
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { getNextDay } from './search-form.js';
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { GetUserData } from './data.js'
import { GetFavoritesAmout } from './data.js';

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
