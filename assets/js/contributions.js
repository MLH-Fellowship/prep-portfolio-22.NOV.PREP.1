URL = "https://api.github.com/repos/MLH-Fellowship/prep-portfolio-22.NOV.PREP.1/contributors"
contributors = fetch(URL)
  .then(res => res.json())
  .then(json => {
    contributor_list = new Map(
      json.map(item => {
        return [item.login, item.contributions];
      })
    );

    var leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];

    contributor_list.forEach((contributions, login) => {
      var userDiv = document.getElementById(login);
      if(userDiv) {
        var content = document.createTextNode("Contributions: " + contributions);
        userDiv.appendChild(content);
      }

      var newRow = leaderboardTable.insertRow();
      var userCell = newRow.insertCell();
      userCell.appendChild(document.createTextNode(login));

      var contributionsCell = newRow.insertCell();
      contributionsCell.appendChild(document.createTextNode(contributions));

    });
    
  })