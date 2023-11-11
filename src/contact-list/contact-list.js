import contacts from './data';
import { each } from 'underscore';

const contactList = document.createElement('div');

contactList.className = 'contact-list';
/* prettier-ignore */
each(contacts, (entry) => {
  const element = document.createElement('div');
  element.className = 'contact';

  element.innerHTML = `
      <h2 class="name">${entry.name}</h2>
      
      <p class="phone">${entry.phone}</p>
    `;

  contactList.appendChild(element);
});
/* /prettier-ignore */
document.body.appendChild(contactList);
