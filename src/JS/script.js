const content = [['react is  awesome'], ['declarative'], ['mdn docs']];

const btnWhyReact = document.getElementById('btn-why-react');
const btnCoreFeatures = document.getElementById('btn-core-features');
const btnRelated = document.getElementById('btn-resources');
const tabContent = document.getElementById('tab-content');

function displayContent(items) {
  let listContent = '';
  for (const item of items) {
    listContent += `<li>${item} </li>`;
  }
  const list = document.createElement('ul');
  tabContent.innerHTML = ''; // clear existing content
  list.innerHTML = listContent; // insert  new content
  tabContent.append(list);
}
function highLightButton(btn) {
  // clear all existing styles / highlight
  btnWhyReact.className = '';
  btnCoreFeatures.className = '';
  btnRelated.className = '';
  btn.className = 'active'; // set new style / highlight
}

function handleClick(event) {
  const btnId = event.target.id;
  highLightButton(event.target);
  if (btnId === 'btn-why-react') {
  }
}
