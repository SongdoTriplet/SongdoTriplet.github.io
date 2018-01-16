var radiochecked = document.querySelector('#radios:checked');
console.log(radiochecked);

function show_franchise(){
  document.getElementById('line_franchise').style.display ='block';
};

function show_blog(){
  document.getElementById('line_blog').style.display = 'block';
};

function show_floatingPop(){
  document.getElementById('line_floatingPop').style.display = 'block';
};

function show_population(){
  document.getElementById('line_pop').style.display = 'block';
};

function show_sale(){
  document.getElementById('line_sale').style.display = 'block';
};

function show_search(){
  document.getElementById('line_search').style.display = 'block';
};

d3.select('#radios').on('change', update);
var radiochecked = document.querySelector('#radios:checked');
update(radiochecked);

function update(radiochecked) {
    document.getElementsByClassName('#radio').style.display ='none';
    document.getElementById('radiochecked').style.display='block';
};
