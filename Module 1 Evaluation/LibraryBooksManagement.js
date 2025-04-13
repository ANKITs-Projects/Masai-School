/**
 * Create functions to manage a library book system. The library is an array of objects, 
   each with properties for title, author, genre, year, and copies. Implement functions to:

    Find the most popular genre (based on total number of books)
    Calculate the average publication year across all books
    List the titles of books with fewer than 3 copies available Input:

 */

    function findMostPopularGenre(library) {
        let genreCount = {}
      
        for (let i = 0; i < library.length; i++) {
          let genre = library[i].genre

          if (genreCount[genre]) {
            genreCount[genre] += library[i].copies
          } else {
            genreCount[genre] = library[i].copies
          }
        }
      
        let mostPopularGenre = null
        let maxCount = 0
      
        for (let genre in genreCount) {
          if (genreCount[genre] > maxCount) {
            maxCount = genreCount[genre]
            mostPopularGenre = genre
          }
        }
      
        return mostPopularGenre
      }
      
      function calculateAveragePublicationYear(library) {
        let totalYears = 0
        let totalBooks = library.length
      
        for (let i = 0; i < library.length; i++) {
          totalYears += library[i].year
        }
      
        return Math.floor(totalYears / totalBooks)
      }
      
      function listTitlesWithFewCopies(library) {
        let titles = []
      
        for (let i = 0; i < library.length; i++) {
          if (library[i].copies < 3) {
            titles.push(library[i].title)
          }
        }
      
        return titles
      }
      
      let library = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, copies: 5 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, copies: 7 },
        { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988, copies: 2 },
        { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, copies: 4 },
        { title: "The Selfish Gene", author: "Richard Dawkins", genre: "Science", year: 1976, copies: 1 },
        { title: "The Origin of Species", author: "Charles Darwin", genre: "Science", year: 1859, copies: 3 }
      ]
      
      let mostPopularGenre = findMostPopularGenre(library)
      let averageYear = calculateAveragePublicationYear(library)
      let titlesWithFewCopies = listTitlesWithFewCopies(library)
      
      console.log("Most Popular Genre:", mostPopularGenre)
      console.log("Average Publication Year:", averageYear)
      console.log("Titles with Fewer than 3 Copies:", titlesWithFewCopies)
      

      







