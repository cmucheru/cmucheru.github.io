const PROJECT_SECTION_CONTAINER = document.getElementById('project-section');

const createElement = (element) => {
   return document.createElement(element);
};

const projectObject = [
   {
      className: 'blur-bg1',
      title: 'Homepage',
      innerHtml: `This is book store created with reactJS.<br />
							Users can browse through to pick their like. <br />
							`,
      flipCardBtnHref: '#',
      projectLinkHref:
         '#',
   },

   {
      className: 'blur-bg2',
      title: 'Homepage',
      innerHtml: `This is a client-side`,
      flipCardBtnHref: '#',
      projectLinkHref: '#',
   },

   {
      className: 'blur-bg3',
      title: 'Homepage',
      innerHtml: `This is a solution 
							<br />
						.`,
      flipCardBtnHref: '#',
      projectLinkHref: '#',
   },

   {
      className: 'blur-bg4',
      title: 'Homepage',
      innerHtml: `This is a solution to t.<br />
							This webpage was designed `,
      flipCardBtnHref: '#',
      projectLinkHref: '#',
   },

   {
      className: 'blur-bg5',
      title: 'Homepage',
      innerHtml: `This is a client-side ... <br />
					.`,
      flipCardBtnHref: '#',
      projectLinkHref: '#',
   },

   // {
   //    className: '',
   //    title: '',
   //    innerHtml: ``,
   //    flipCardBtnHref: '',
   //    projectLinkHref: '',
   // },
];

projectObject.forEach((project) => {
   let WorksProjectContent = createElement('div');
   WorksProjectContent.className = 'project-content';

   let projectBlur = createElement('div');
   projectBlur.className = 'project-blur';

   let projectTileDiv = createElement('div');
   projectTileDiv.className = 'project-tile';

   let projectTileNav = createElement('div');
   projectTileNav.className = 'project-tile__nav';

   let projectTileH3 = createElement('h3');
   projectTileH3.className = 'project-tile__title';

   let projectTileText = createElement('p');
   projectTileText.className = 'project-tile__text flip-card__text';

   let flipCardBtn = createElement('a');
   flipCardBtn.className = 'flip-card__action';
   flipCardBtn.textContent = 'site';

   let projectTileLink = createElement('a');
   projectTileLink.className =
      'project-tile__link project-section__btn-link__sub';

   let githubIcon = createElement('img');
   githubIcon.className = 'social-media__image';
   githubIcon.src = './assets/images/icons/github.svg';
   githubIcon.alt = 'Github';

   let viewGithub = createElement('span');
   viewGithub.textContent = 'GitHub';

   WorksProjectContent.append(projectBlur, projectTileDiv, projectTileNav);
   projectTileDiv.append(projectTileH3, projectTileText);
   projectTileNav.append(flipCardBtn, projectTileLink);
   projectTileLink.append(githubIcon, viewGithub);

   projectBlur.classList.add(project.className);
   projectTileH3.textContent = project.title;
   projectTileText.innerHTML = project.innerHtml;
   flipCardBtn.href = project.flipCardBtnHref;
   projectTileLink.href = project.projectLinkHref;
   PROJECT_SECTION_CONTAINER.appendChild(WorksProjectContent);
});
