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
}

function generateTitleLinks (){

    const clearTitleList = function(){
        document.querySelector('.titles').innerHTML = '';
    }

    clearTitleList();

    const articles = document.querySelectorAll('.post');

    for(let article of articles){

        const articleId = article.getAttribute('id');

        const articleTitle = article.querySelector('.post-title').innerHTML;

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        const titlesWrapper = document.querySelector('.titles');
        titlesWrapper.insertAdjacentHTML('beforeend', linkHTML);
    }
    const links = document.querySelectorAll('.titles a');

    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }
}

generateTitleLinks();