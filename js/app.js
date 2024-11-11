// Part 1
// The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.

const titleElements = document.querySelector('#main-title')
titleElements.textContent='Welcome to the Cozy Cafe'
titleElements.style.textAlign = 'center'

// Part 2
// Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)

const bodyElement = document.querySelector('body')
bodyElement.style.color = 'pink'

// Part 3
// Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).

const paragraghElement = document.querySelector('#quote-of-the-day')
paragraghElement.textContent="Life happens, coffee helps."

// Part 4
// Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.
const allElements = document.querySelectorAll('.highlight-title')
allElements.forEach( (element) => {
element.style.fontStyle='italic'
} )

// Part 5
// Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.
 const ulElement = document.querySelector('ul')
const liElement = document.createElement('li')
liElement.textContent='Rose Cake'
ulElement.appendChild(liElement)

// Part 6
// Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).
const ul2Element = document.querySelector('#cafe-specialties')
const newlistElement = document.createElement('li')
newlistElement.textContent='Karak tea'
ul2Element.appendChild(newlistElement)

//Part 7
//Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.

const blogElement = document.querySelector('#blogs')
const newblogElement = document.createElement('div')
newblogElement.classList.add('blog-post')
blogElement.appendChild(newblogElement)

const h1Element = document.createElement('h3')
h1Element.textContent = 'Karak Tea Tasting Event'
newblogElement.appendChild(h1Element)

const pElement = document.createElement('p')
pElement.textContent = "Come try the new amazing karak flavore with cardomon and zafron."
h1Element.appendChild(pElement)