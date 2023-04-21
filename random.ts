// 1 Paradigma обобщённого программирования / GENERIC_
//2 обобщённого программирования in async function
// Utilitarian types 

// hash table and array - store data structures

export interface Collection<T> {
    [key: string]: T;
}
// good practice for performance.
// export const programmingLiterature: Collection<Book> = {
//   'Creacking the coding interview': new Book(
//     'Creacking the coding interview', GENRE.Adventure, 100,
//     {
//       firstName: 'Gayle',
//       lastName: 'Laakmann',
//       rating: 5
//     }
//   )
// }

// we have MAP

const map = new Map()
map.set 