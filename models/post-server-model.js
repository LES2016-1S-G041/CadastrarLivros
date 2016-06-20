/*
 * Serve JSON to our AngularJS client
 */
// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "posts": [
    {
      "title": "O Brasil Tem Cura",
      "autor": "Sheherazade,Rachel",
      "valor" : "21,50",
      "text": "“O Brasil Tem Cura” faz uma radiografia sem máscaras da nossa política e, em busca de soluções, põe sob os holofotes as principais mazelas que assolam o país. Partindo de uma analise histórica, Rachel Sheherazade identifica alguns dos problemas que adoecem o Brasil e propõe caminhos para sana-los, partindo do pressuposto de que o país só será passado a limpo se cada brasileiro fizer sua parte e passar a agir com integridade inegociável, ensinando essa postura às futuras gerações. Não adianta esperar que a mudança comece pelos outros: cada um tem de fazer o que lhe compete. Nessa perspectiva, o objetivo da obra é levar o leitor a repensar suas atitudes, para que, pela soma de ações individuais, o país resgate valores como a justiça, a segurança, o respeito, a cidadania, o patriotismo e a ética. Este livro procura renovar as esperanças no Brasil e inspirar o leitor a tornar-se um agente de transformação de um país que agoniza em meio a escândalos e problemas que parecem não ter fim. O Brasil convalescente precisa de cura, libertação e restauração - e o brasileiro é o remédio."
    },
    {
      "title": "A Verdade Sufocada",
      "autor": "Carlos Alberto Brilhante Ustra",
      "valor" : "89,90",
      "text": "Em suas 541 páginas desmistifica, destrói, desmonta e manda pelos ares, ponto por ponto, as mentiras que, há mais de 40 anos, vêm sendo apresentadas à Nação brasileira a respeito da Revolução de 31 de Março de 1964 e os seus desdobramentos, quando uma esquerda desvairada, constituída por militantes treinados nas academias de guerrilhas de Cuba, Coréia do Norte, Alemanha Oriental, China e Uanião Soviética, utilizaram todos os meios – os seqüestros de autoridades e de aviões comerciais, o terrorismo, os assaltos, as guerrilhas urbana e rural e os assassinatos de cunho político e, já em seu final, os assaltos até a trocadores de ônibus – para implantar em nosso país uma república popular democrática. Derrotados, a maioria dos que sobreviveram a essa louca empreitada, após uma escala em Cuba, se juntou aos grupos terroristas da Argentina, Chile e Nicarágua, voltando a ser derrotados. Ao final, em agosto de 1979, foram anistiados pela “ditadura militar” e depois, no governo do também anistiado Luiz Inácio Lula da Silva – “anistiado” de quê, se não foi cassado e nem condenado? -, continuaram a ser recompensados, agora financeiramente, por uma Comissão de Anistia, criada em agosto de 2001 pelo governo do Sr Fernando Henrique Cardoso. Recompensados por terem sido terroristas. Somente em atrasados, as indenizações já passam de R$ 1,44 bilhão. A 38 anistiados foram concedidas indenizações que, a cada um, ultrapassam R$ 1 milhão."
    }
  ]
};

// GET

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    posts.push({
      id: i,
      title: post.title,
      autor: post.autor,
      valor: post.valor,
      text: post.text.substr(0, 50) + '...'
    });
  });
  res.json({
    posts: posts
  });
};

exports.post = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};

// POST

exports.postAdd = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

// PUT

exports.postEdit = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE

exports.postDelete = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};
