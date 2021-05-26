;(function () {
    'use strict'
    const markSourceEl = document.querySelector("#markSrc")
    const markedDstEl = document.querySelector("#markDst")
    const saveArticBtn = document.querySelector("#save-article-button")
    const articleTitle = document.querySelector("#article-title")

    markedDstEl.innerHTML = `
    <h1>Заголовок статьи</h1>
    `

    let result;

    markSourceEl.addEventListener('keyup', function () {
        result = marked(markSourceEl.value)
        markedDstEl.innerHTML = result
    })

    saveArticBtn.addEventListener('click', function () {
        console.log(articleTitle.value)
        const json = localStorage.getItem('articles')
        const articles = JSON.parse(json)
        const newArticle = {id: articles.length + 1, title: articleTitle.value, description: result}
        articles.push(newArticle)
        localStorage.setItem('articles', JSON.stringify(articles))
        markSourceEl.value = '';
        articleTitle.value = '';
    })


})();


