const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector ('.dropdown_menu');

toggleBtn.onclick =function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ?'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const arrow = item.querySelector('.arrow');

      header.addEventListener('click', () => {
          // Toggle the open class on the clicked item
          const isOpen = content.style.maxHeight;
          
          // Close all open accordions
          document.querySelectorAll('.accordion-content').forEach(c => {
              c.style.maxHeight = null;
          });
          document.querySelectorAll('.arrow').forEach(a => {
              a.classList.remove('rotate');
          });
          
          // If the clicked accordion was closed, open it
          if (!isOpen) {
              content.style.maxHeight = content.scrollHeight + "px";
              arrow.classList.add('rotate');
          }
      });
  });
});