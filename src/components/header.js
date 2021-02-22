const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement('div');
  let dateSpan = document.createElement('span');
  let tempSpan = document.createElement('span');
  let titleH1 = document.createElement('h1');

  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  header.appendChild(dateSpan);
  header.appendChild(titleH1);
  header.appendChild(tempSpan);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
  const newHeader = Header('Lambda Times','February 21, 2021','17°');
  const select = document.querySelector(selector);
  select.appendChild(newHeader);
}

export { Header, headerAppender }