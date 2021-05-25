;(function () {
    let articles = [
        {id: 1, title: "Какой-то title", description: "Описание статьи или текст статьи"},
        {id: 2, title: "Какой-то title2", description: "Описание статьи или текст статьи2"},
        {id: 3, title: "Какой-то title3", description: "Описание статьи или текст статьи3"},
    ]

    if (!localStorage.getItem('articles')) {
        localStorage.setItem('articles', JSON.stringify(articles))
    }

})();