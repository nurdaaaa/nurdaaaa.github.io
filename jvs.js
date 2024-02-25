const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const bookLists = document.querySelectorAll('.book-list');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    bookLists.forEach(bookList => {
        const books = bookList.querySelectorAll('li');
        books.forEach(book => {
            const title = book.querySelector('.book-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
});