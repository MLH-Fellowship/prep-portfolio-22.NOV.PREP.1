URL = "https://api.github.com/repos/MLH-Fellowship/prep-portfolio-22.NOV.PREP.1/contributors"
contributors = fetch(URL)
  .then(res => res.json())
  .then(json => {
    var contributors = new Map(
      json.map(item => [item.login, item.contributions])
    );

    var ordered_contributors = new Map(
      [...contributors].sort((a, b) => b[1] - a[1])
    )

    const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
    var  Rank = 1;
    ordered_contributors.forEach((contributions, username) => {
      var userDiv = document.getElementById(username);
      if(userDiv) {
        userDiv.innerHTML += `<span class='badge badge-mlh'>Contributions: ${contributions}</span>`
      }

      var newRow = leaderboardTable.insertRow();

      var rankCell = newRow.insertCell();
      rankCell.appendChild(document.createTextNode(Rank));
      Rank++;
      
      var userCell = newRow.insertCell();
      userCell.appendChild(document.createTextNode(username));

      var contributionsCell = newRow.insertCell();
      contributionsCell.appendChild(document.createTextNode(contributions));

    });
    
  })