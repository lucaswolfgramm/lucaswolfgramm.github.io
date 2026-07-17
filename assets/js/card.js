let createCard = function (nome, descricao, url) {
    let section = document.getElementById("projetosContainer");
    let myCard =
        '<div class="projectCard border border-white rounded" style="width: 18rem;">'
        + ' <h5 class="card-title">' + nome + '</h5>'
        + ' <p class="card-text">' + descricao + '</p>'
        + ' <a href=" '+ url +'" target="_blank" class="btn btn-primary">Acessar projeto</a>'
        + '</div>'

    section.innerHTML += myCard;
}