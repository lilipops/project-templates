interface SearchFormData {
    query: string;
    category: string;
    dateFrom?: Date;
    dateTo?: Date;
    minPrice?: number;
    maxPrice?: number;
  }
  
function search(formData: SearchFormData): void {
    console.log(formData);
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
  search(searchData);
});
