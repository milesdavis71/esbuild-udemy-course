import contacts from './data.json';
import { each } from 'underscore';
import template from './contact-list.html';
import './contact-list.css';

const contactList = document.createElement('div');

contactList.className = 'contact-list';
/* prettier-ignore */
each(contacts, (entry) => {
  const element = document.createElement('div');
  element.className = 'contact';

  element.innerHTML = template;
  element.querySelector('.name').innerHTML = entry.name;
  element.querySelector('.phone').innerHTML = entry.phone;

  contactList.appendChild(element);
});
/* /prettier-ignore */
document.body.appendChild(contactList);
