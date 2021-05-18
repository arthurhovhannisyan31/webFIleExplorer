const getOptionsListTemplate = (arr) => `
  <ul>
    ${arr
  .map(
    ({ path, label }) => `
         <li>
           <a href='http://localhost:3000${path}'>
              ${label}
            </a>
         </li>
    `
  )
  .join("")}
  </ul>
`;

module.exports = {
  getOptionsListTemplate
}
