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

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

function generateTitleLinks (){

    /* [DONE] remove content of titleList */
    const clearTitleList = function(){
        document.querySelector('.titles').innerHTML = '';
    }

    clearTitleList();

    /* for each article */
    const articles = document.querySelectorAll('.post');

    for(let article of articles){};

        /* get the article id */
    const articleId = article.getAttribute('id');

        /* find the title element */

        /* get the title from the title element */

        /* create HTML of the link */
}
generateTitleLinks();