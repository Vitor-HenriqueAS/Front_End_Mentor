import projects from './projects.js';

const projects_content = document.getElementById('projects_content');
const selectElement = document.getElementById('ordenacao');

function parseDate(dateString) {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
}

function compareByDate(a, b) {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);

  return dateB - dateA;
}

function compareByLevel(a, b) {
  const levels = ['guru', 'advanced', 'intermediate', 'junior', 'newbie'];
  return levels.indexOf(a.level) - levels.indexOf(b.level);
}

function loadCardsProjects() {

  let sortedProjects;

  switch (selectElement.value) {
    case 'recentes':
      sortedProjects = projects.slice().sort(compareByDate);
      break;
    case 'antigos':
      sortedProjects = projects.slice().sort((a, b) => compareByDate(b, a));
      break;
    case 'dificuldade':
      sortedProjects = projects.slice().sort(compareByLevel);
      break;
    default:
      sortedProjects = projects;
  }

  console.log(sortedProjects)
  const newHtml = sortedProjects.map((project) => {
    return `
    <div class="project">
      <img src="src/assets/images/projetos/${project.image}.webp" alt="${project.name}">
      
      <div class="project_info">
        <div class="project_header">
          <h3>${project.image}</h3>
          <span>${project.date}</span>
        </div>

        <div class="project_details">
          <span class="${project.level}">${project.level}</span>
          <span>${project.languages}</span>
        </div>

        <div class="project_links">
          <span><a href="${project.deploy}" target="_blank">Deploy</a></span>
          <span><a href="${project.code}" target="_blank">Repositório</a></span>
        </div>
      </div>
    </div>
    `
  }).join('');

  projects_content.innerHTML = newHtml;
}

selectElement.addEventListener('change', loadCardsProjects);
loadCardsProjects();