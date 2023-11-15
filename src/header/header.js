import template from './header.html';

/**
 * header
 */
const header = document.createElement('div');
header.className = 'header';

header.innerHTML = template;

document.body.appendChild(header);
