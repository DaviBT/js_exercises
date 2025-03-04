async function pegaDados() {
    const response = await fetch("https://api.github.com/users/omariosouto");
    const resultConvert = await response.json(); // Aguarda a conversão do JSON
    console.log(resultConvert);
  }
  
  pegaDados();
  

  /*
  {
  login: 'omariosouto',
  id: 13791385,
  node_id: 'MDQ6VXNlcjEzNzkxMzg1',
  avatar_url: 'https://avatars.githubusercontent.com/u/13791385?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/omariosouto',
  ...
  */