export function adaptTable () {
  let tables = document.querySelectorAll('table');
  let length = tables.length;
  let i;
  let wrapper;

for (i = 0; i < length; i++) {
  wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'wrap-table');
  tables[i].parentNode.insertBefore(wrapper, tables[i]);
  wrapper.appendChild(tables[i]);
}

}