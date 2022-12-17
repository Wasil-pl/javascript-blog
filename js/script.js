'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');

  const activeArticles = document.querySelectorAll('.post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  const linkAttribute = clickedElement.getAttribute('href');

  const targetArticle = document.querySelector(linkAttribute);

  targetArticle.classList.add('active');
};

const generateTitleLinks = function(customSelector = ''){

  document.querySelector('.titles').innerHTML = '';

  const articles = document.querySelectorAll('.post' + customSelector);

  const titlesWrapper = document.querySelector('.titles');

  for(let article of articles){

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector('.post-title').innerHTML;

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    titlesWrapper.insertAdjacentHTML('beforeend', linkHTML);
  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
};

generateTitleLinks();

const generateTags = function(){

  const articles = document.querySelectorAll('.post');

  //const tagsWrapper = document.querySelector('.titles');

  for(let article of articles){
    article.querySelector('.post-tags .list-horizontal').innerHTML = '';

    //const tags = article.querySelector('.post-tags .list');

    const articleTags = article.getAttribute('data-tags');

    const articleTagsArray = articleTags.split(' ');

    for(let tag of articleTagsArray){

      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

      const tagsArticle = article.querySelector('.post-tags .list-horizontal');

      tagsArticle.insertAdjacentHTML('beforeend', linkHTML);
    }
  }
};

generateTags();

const tagClickHandler = function(event){

  event.preventDefault();

  const clickedElement = this;

  const href = clickedElement.getAttribute('href');

  const tag = href.replace('#tag-', '');

  const tagsLinkActive = document.querySelectorAll('a.active[href^="#tag-"]');

  for(let tagLinkActive of tagsLinkActive){

    tagLinkActive.classList.remove('active');
  }
  const tagsLinkHref = document.querySelectorAll('a[href="' + href + '"]');

  for(let tagLinkHref of tagsLinkHref){

    tagLinkHref.classList.add('active');

  }
  generateTitleLinks('[data-tags~="' + tag + '"]');

};

const addClickListenersToTags = function(){

  const linkstags = document.querySelectorAll('.post-tags .list-horizontal a');

  for(let linkTag of linkstags){

    linkTag.addEventListener('click', tagClickHandler);

  }
};

addClickListenersToTags();

const generateAuthors = function(){

  document.querySelector('.authors').innerHTML = '';

  const articles = document.querySelectorAll('.post');

  for(let article of articles){

    const authorNameBy = article.querySelector('.post-author').innerHTML;

    const authorName = authorNameBy.replace('by ', '');

    const href = article.querySelector('.post-author');

    href.setAttribute('data-author', authorName);

    article.querySelector('.post-author').innerHTML = '';

    const linkHTML = '<a href="#author-' + authorName + '">' + authorName + '</a>';

    const authorArticle = article.querySelector('.post-author');

    authorArticle.insertAdjacentHTML('beforeend', linkHTML);
  }
};

generateAuthors();

const authorClickHandler = function(event){

  event.preventDefault();

  const clickedElement = this;

  const href = clickedElement.getAttribute('href');

  const author = href.replace('#author-', '');

  const authorsLinkActive = document.querySelectorAll('a.active[href^="#author-"]');

  for(let authorLinkActive of authorsLinkActive){

    authorLinkActive.classList.remove('active');
  }
  const authorsLinkHref = document.querySelectorAll('a[href="' + href + '"]');

  for(let authorLinkHref of authorsLinkHref){

    authorLinkHref.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + '"]');

};

const addClickListenersToAuthors = function(){

  const linksAuthors = document.querySelectorAll('.post-author a');

  for(let linkAuthor of linksAuthors){

    linkAuthor.addEventListener('click', authorClickHandler);

  }
};

addClickListenersToAuthors();
