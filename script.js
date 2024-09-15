const addButton = document.getElementById('add-button');
const menu = document.getElementById('menu');
const savedSection = document.getElementById('saved-section');

addButton.addEventListener('click', () => {
  const topicName = document.getElementById('topic-name').value;
  const codeBlock = document.getElementById('code-block').value;
  const notes = document.getElementById('notes').value;

  if (topicName && codeBlock) {
    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.href = `#${topicName}`;
    menuLink.textContent = topicName;
    menuItem.appendChild(menuLink);
    menu.appendChild(menuItem);

    const savedBlock = document.createElement('div');
    savedBlock.className = 'saved-block';
    savedBlock.id = topicName;
    
    const savedTitle = document.createElement('h3');
    savedTitle.textContent = topicName;
    const savedCode = document.createElement('pre');
    savedCode.textContent = codeBlock;
    const savedNotes = document.createElement('p');
    savedNotes.textContent = notes;
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    
    deleteButton.addEventListener('click', () => {
      savedSection.removeChild(savedBlock);
      menu.removeChild(menuItem);
    });
    
    savedBlock.appendChild(savedTitle);
    savedBlock.appendChild(savedCode);
    savedBlock.appendChild(savedNotes);
    savedBlock.appendChild(deleteButton);
    savedSection.appendChild(savedBlock);
    
    document.getElementById('topic-name').value = '';
    document.getElementById('code-block').value = '';
    document.getElementById('notes').value = '';
  }
});
