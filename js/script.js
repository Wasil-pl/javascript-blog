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

    /* [DONE] remove content of titleList */
    const clearTitleList = function(){
        document.querySelector('.titles').innerHTML = '';
    }

    clearTitleList();
    
    /* for each article */
    const articles = document.querySelectorAll('.post');
    
    let html = '';
    
    for(let article of articles){
        
        /* get the article id */
        const articleId = article.getAttribute('id');
        console.log(articleId);
        
        /* find the title element */
        const articleTitle = article.querySelector('.post-title').innerHTML;
        console.log(articleTitle);
        
        /* get the title from the title element */
        
        
        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log(linkHTML);

        /* insert link into html variable */
        html = html + linkHTML;
        console.log(html);
        
        let box = document.querySelector('.titles');
        box.insertAdjacentHTML('beforebegin', linkHTML);
    }
    
    clearTitleList.innerHTML = html;
    
    const links = document.querySelectorAll('.titles a');
    console.log(links);
    
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }
}

generateTitleLinks();