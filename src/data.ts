interface UserData {
    username: string;
    avatarUrl: string;
  }

function GetUserData(): UserData | undefined {
    const userDataString = localStorage.getItem('user');

    if(userDataString) {
        try {
           const userData: unknown = JSON.parse(userDataString);
           if(typeof userData === 'object' && userData !== null) {
           const { username, avatarUrl } = userData as { username: unknown, avatarUrl: unknown };
        
            if (typeof username === 'string' && typeof avatarUrl === 'string') {
              return { username, avatarUrl };
            }
          }
        } catch (e) {}
      }

    return undefined
}



function GetFavoritesAmout(): number | undefined {
    const userFavoritesAmount= localStorage.getItem('favoritesAmount');

    if(userFavoritesAmount) {
        try {
            const favoritesAmount: unknown = JSON.parse(userFavoritesAmount);
        
            if(typeof favoritesAmount === 'number') {
                return favoritesAmount;
            }
        } catch(e) {}
    }
    return undefined
}

function renderUserBlock(username: string, avatarUrl: string, favoritesAmount?: number): void {
    const userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
  
    const avatarImage = document.createElement('img');
    avatarImage.src = avatarUrl;
    avatarImage.alt = `${username}'s avatar`;
  
    const usernameElement = document.createElement('span');
    usernameElement.textContent = username;
  
    const favoritesAmountElement = document.createElement('span');
    favoritesAmountElement.textContent = `${favoritesAmount ?? '0'} favorites`;
  
    userBlock.appendChild(avatarImage);
    userBlock.appendChild(usernameElement);
    userBlock.appendChild(favoritesAmountElement);
  
    document.body.appendChild(userBlock);
  }
  