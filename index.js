data.forEach(d => {
    let chapter = document.getElementById(d.class);
    let p = document.createElement("p");
    p.innerHTML = d.text;
    chapter.appendChild(p);
})