import { renderBlock } from './lib.js';
// must include now the API adress 
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock(places) {
    let placesMarkup = '';
    places.forEach(place => {
        placesMarkup += `
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="${place.image}" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${place.name}</p>
              <p class="price">${place.price}&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> ${place.distance}км от вас</div>
            <div class="result-info--descr">${place.description}</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    `;
    });
    renderBlock('search-results-block', `
      <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
          <span><i class="icon icon-filter"></i> Сортировать:</span>
          <select>
            <option selected="">Сначала дешёвые</option>
            <option>Сначала дорогие</option>
            <option>Сначала ближе</option>
          </select>
        </div>
      </div>
      <ul class="results-list">
        ${placesMarkup}
      </ul>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxtQ0FBbUM7QUFDbkMsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7OztLQUtDLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsNkJBQTZCLENBQUUsYUFBYTtJQUMxRCxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QixDQUFDLE1BQU07SUFDN0MsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsWUFBWSxJQUFJOzs7OzsyQ0FLdUIsS0FBSyxDQUFDLEtBQUs7Ozs7bUJBSW5DLEtBQUssQ0FBQyxJQUFJO2lDQUNJLEtBQUssQ0FBQyxLQUFLOztxRUFFeUIsS0FBSyxDQUFDLFFBQVE7OENBQ3JDLEtBQUssQ0FBQyxXQUFXOzs7Ozs7Ozs7S0FTMUQsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUNULHNCQUFzQixFQUN0Qjs7Ozs7Ozs7Ozs7OztVQWFNLFlBQVk7O0tBRWpCLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuLy8gbXVzdCBpbmNsdWRlIG5vdyB0aGUgQVBJIGFkcmVzcyBcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hTdHViQmxvY2sgKCkge1xuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLXJlc3VsdHMtYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiYmVmb3JlLXJlc3VsdHMtYmxvY2tcIj5cbiAgICAgIDxpbWcgc3JjPVwiaW1nL3N0YXJ0LXNlYXJjaC5wbmdcIiAvPlxuICAgICAgPHA+0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC40YHQuiwg0LfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YMg0LgmbmJzcDvQvdCw0LbQvNC40YLQtSBcItCd0LDQudGC0LhcIjwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVtcHR5T3JFcnJvclNlYXJjaEJsb2NrIChyZWFzb25NZXNzYWdlKSB7XG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XG4gICAgICA8cD4ke3JlYXNvbk1lc3NhZ2V9PC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlcykge1xuICBsZXQgcGxhY2VzTWFya3VwID0gJyc7XG4gIHBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IHtcbiAgICBwbGFjZXNNYXJrdXAgKz0gYFxuICAgICAgPGxpIGNsYXNzPVwicmVzdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzIGFjdGl2ZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIke3BsYWNlLmltYWdlfVwiIGFsdD1cIlwiPlxuICAgICAgICAgIDwvZGl2Plx0XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8cD4ke3BsYWNlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JHtwbGFjZS5wcmljZX0mIzgzODE7PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+ICR7cGxhY2UuZGlzdGFuY2V90LrQvCDQvtGCINCy0LDRgTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cGxhY2UuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIGA7XG4gIH0pO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXG4gICAgYFxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWhlYWRlclwiPlxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cbiAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxuICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQtdGI0ZHQstGL0LU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0XCI+XG4gICAgICAgICR7cGxhY2VzTWFya3VwfVxuICAgICAgPC91bD5cbiAgICBgXG4gICk7XG59XG4iXX0=