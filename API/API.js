fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(anime => console.log(anime))