interface UserData {
    username: string;
    avatarUrl: string;
  }
  interface Property {
    id: number;
    name: string;
    imageUrl: string;
  }
  // interface Place {
  //   image: string;
  //   name: string;
  //   description: string;
  //   remoteness: number;
  //   bookedDates: number[];
  // }
  
function toggleFavoriteItem(property: Property): void {
  const favoriteItemsString = localStorage.getItem('favoriteItems');
  let favoriteItems: Property[] = [];
  
  if (favoriteItemsString) {
    try {
      favoriteItems = JSON.parse(favoriteItemsString);
    } catch (e) {
      console.log(Error);
    }
  }
  
  const existingIndex = favoriteItems.findIndex(item => item.id === property.id);
  
  if (existingIndex !== -1) {
    favoriteItems.splice(existingIndex, 1);
  } else {
    favoriteItems.push({ id: property.id, name: property.name, imageUrl: property.imageUrl });
  }
  
  localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  
  const favoritesAmount = getFavoritesAmount();
  const userBlock = document.querySelector('.user-block');
  if (userBlock) {
    const favoritesAmountElement = userBlock.querySelector('.favorites-amount');
    if (favoritesAmountElement) {
      favoritesAmountElement.textContent = `${favoritesAmount ?? '0'} favorites`;
    }
  }
}
  
export function getFavoritesAmount(): number | undefined {
  const favoriteItemsString = localStorage.getItem('favoriteItems');
  
  if (favoriteItemsString) {
    try {
      const favoriteItems: Property[] = JSON.parse(favoriteItemsString);
      return favoriteItems.length;
    } catch (e) {
      console.log(Error);
    }
  }
  
  return undefined;
}
  

export function GetUserData(): UserData | undefined {
  const userDataString = localStorage.getItem('user');
  // const userData = JSON.parse(userDataString);
  if(userDataString) {
    try {
      const userData: unknown = JSON.parse(userDataString);
      if(typeof userData === 'object' && userData !== null) {
        const { username, avatarUrl } = userData as { username: unknown, avatarUrl: unknown };
        
        if (typeof username === 'string' && typeof avatarUrl === 'string') {
          return { username, avatarUrl };
        }
      }
    } catch (e) {
      console.log(Error)
    }
  }

  return undefined
}



export function GetFavoritesAmout(): number | undefined {
  const userFavoritesAmount= localStorage.getItem('favoritesAmount');

  if(userFavoritesAmount) {
    try {
      const favoritesAmount: unknown = JSON.parse(userFavoritesAmount);
        
      if(typeof favoritesAmount === 'number') {
        return favoritesAmount;
      }
    } catch(e) {
      console.log(Error)
    }
  }
  return undefined
}
export function renderUserBlock(username: string, avatarUrl: string, favoritesAmount?: number): void {
  const userBlock = document.createElement('div');
  userBlock.classList.add('user-block');
  
  const avatarImage = document.createElement('img');
  avatarImage.src = avatarUrl;
  avatarImage.alt = `${username}'s avatar`;
  
  const usernameElement = document.createElement('p');
  usernameElement.classList.add('name');
  usernameElement.textContent = username;
  
  userBlock.appendChild(avatarImage);
  userBlock.appendChild(usernameElement);

  if (favoritesAmount !== undefined) {
    const favoritesAmountElement = document.createElement('span');
    favoritesAmountElement.textContent = `${favoritesAmount ?? '0'} favorites`;
    userBlock.appendChild(favoritesAmountElement);
  }
  
  document.body.appendChild(userBlock);
}
