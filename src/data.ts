interface UserData {
    username: string;
    avatarUrl: string;
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
