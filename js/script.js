// Main Variable
let theInput = document.querySelector('.get-repos input');
let getButton = document.querySelector('.get-button');
let reposData = document.querySelector('.show-data');

getButton.onclick = function () {
    getRepos();
}
// Get Repos Function 
function getRepos() {
    // If Value Is Empty
    if (theInput.value == '') {  
        reposData.innerHTML = "<span>Pleas Write Github Username.</span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())
        .then((data) => {
            // Emplty the Container
            reposData.innerHTML = '';
            // Loop On repositories
            data.forEach(repo => {
                // Creat The Main Div Element
                let mainDiv = document.createElement('div');
                // Creat repo Name text
                let repoName = document.createTextNode(repo.name);
                // Creat repo URl
                let theUrl = document.createElement('a');
                // creat repo URl TExt
                let theUrltext = document.createTextNode('Visit')
                // append the repo Url Text
                theUrl.appendChild(theUrltext);
                // Add The HyperText Referance "href"
                theUrl.href =  `https://github.com/${theInput.value}/${repo.name}`;
                // Set Attribute Blanck
                theUrl.setAttribute('target', '_blanck');
                // Append The text to the Main Div
                mainDiv.appendChild(repoName);
                // Append URl Anchor to Main Div
                mainDiv.appendChild(theUrl);
                // Creat Stars Count span
                let starsSpan = document.createElement('span');
                // Creat The Stars Count text
                let starstext = document.createTextNode(`Stars ${repo.stargazers_count}`);
                // Add Stars Count Text To Stars Span
                starsSpan.appendChild(starstext);
                // Append Stars Count Span To MAin Div
                mainDiv.appendChild(starsSpan);
                // Add Class on main Div
                mainDiv.className = 'repo-box'
                // Append The Main Div To Containe
                reposData.appendChild(mainDiv);
            })
        })
    }

}

