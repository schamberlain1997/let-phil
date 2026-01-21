const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar(){
   sidebar.classList.toggle('hidden');
}

toggleBtn.addEventListener('click', toggleSidebar)
