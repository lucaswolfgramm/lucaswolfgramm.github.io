function renderiza_foto(foto) {
    const img_foto = document.getElementById('foto-perfil');
    img_foto.src = `${foto}`
}

const headers = new Headers();
headers.append('Authorization', "token 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")

const getPerfil = () => {
    fetch('https://api.github.com/users/lucaswolfgramm', { headers: headers})
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        renderiza_foto(data.avatar_url);
        document.getElementById('nome').innerText = data.name;
    })
    .catch(error => {
        console.error('Algo deu errado na requisição', error);
    }).finally(() => {});
}

const getRepo = (repoName) => {
    fetch('https://api.github.com/repos/lucaswolfgramm/' + repoName)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        createCard(data.name, data.description, data.html_url);
    })
    .catch(error => {
        console.error('Algo deu errado na requisição', error);
    }).finally(() => {});
}


getPerfil();

getRepo('AutomacaoFullStack');
getRepo('entra21');
getRepo('AluraCourses');
getRepo('operand-is-cool-projects-2017');
getRepo('ImersaoJavaAlura');
getRepo('componentesReact');
createCard("Grupo Prestes", "Site desenvolvido para uma empresa de soluções logísticas sediada em Joinville", "https://grupoprestes.000webhostapp.com/");