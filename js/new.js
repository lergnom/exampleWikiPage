;(function () {
    'use strict'
    const markSourceEl = document.querySelector("#markSrc")
    const markedDstEl = document.querySelector("#markDst")

    markedDstEl.innerHTML = `
    <h1>Заголовок статьи</h1>
    `


    markSourceEl.addEventListener('keyup', function () {
        console.log(markSourceEl.value)
        markedDstEl.innerHTML = marked(markSourceEl.value)
    })


})();


