exports.learn = function(req, res) {
  res.render('Learn/index', {
    title: 'Learn'
  });
};


extends layout

block content
  h1 Learn Feed