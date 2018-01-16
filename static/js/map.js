var markers = [];
var categoryies = {
  'hospital': 'static/img/map_icon/hospital.png',
  'gym': 'static/img/map_icon/gym.png',
  'edu' : 'static/img/map_icon/edu.png',
  'karaoke' : 'static/img/map_icon/karaoke.png',
  'movie' : 'static/img/map_icon/movie.png',
  'bakery' : 'static/img/map_icon/bakery.png',
  'cafe' : 'static/img/map_icon/cafe.png',
  'fastfood' : 'static/img/map_icon/fastfood.png',
  'conv' : 'static/img/map_icon/conv.png',
};

var map = L.map('map').setView([37.38748, 126.6470], 13);
var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
  'https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=3c2e1455566d4fb68c550e42b255c329',
  {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
  }
).addTo(map);

map._initPathRoot();

var svg = d3.select("#map").append("svg");
var g = svg.append("g");

d3.csv("static/data/mapping_real.csv", function(collection) {
  collection = collection.map(function(d) {
    var icon = new L.icon({
      iconUrl: categoryies[d['category']],
      iconSize:     [20, 20],
      iconAnchor:   [22, 22],
      popupAnchor:  [-5, -26]
    });

    return {
      'category': d['category'],
      'brand' : d['brand'],
      'icon': icon,
      'latitude': +d['latitude'],
      'longitude': +d['longitude'],
      'openDate': parseDate(d['openDate']),
      'closeDate': parseDate(d['closeDate'])
    };
  });

  // 불완전한 opdate에 조건을 걸면 인식가능? 아니라면 opdate의 월 까지만 substr하는 법..
  //d3.min(collection, function(d) {return d['opdate'];})

  // 필터가 바뀌면 update 함수가 호출되도록.
  d3.select('#opdateFilter').on('change', update);
  d3.selectAll('#checkboxes input').on('change', update);
  update();

  function update() {
    // 기존 마커를 몽땅 지우고...
    markers.forEach(function(m) {
      map.removeLayer(m);
    });

    // 필터에 맞게 데이터를 골라내고...
    var years = [
      parseDate('20120101'),
      parseDate('20140706'),
      parseDate('20160207'),
      parseDate('20181231')
    ];

    var checkboxes = document.querySelectorAll('.LifeCheckbox:checked');
    var categories = [];
    for(var i = 0; i < checkboxes.length; i++) {
      categories.push(checkboxes[i].value);
    }
    var yearIndex = +document.querySelector('#opdateFilter').value;
    var yearFrom = years[yearIndex];
    var yearTo = years[yearIndex + 1];
    var filteredData = collection.filter(function(d) {
      var categoryMatches = categories.indexOf(d.category) !== -1;
      var yearMatches = d.openDate < yearTo && (!d.closeDate || d.closeDate > yearFrom);
      return categoryMatches && yearMatches;
    });

    // 골라낸 데이터를 마커로 추가.
    filteredData.forEach(function(d) {
      var marker = L.marker([d.latitude, d.longitude], {icon: d.icon});
      markers.push(marker);
      marker.addTo(map).bindPopup(d['brand']);
    });
  }
});

function parseDate(str) {
  if(!str) return null;

  var y = str.substring(0,4);
  var m = str.substring(4,6);
  var d = str.substring(6,8);
  return new Date(y, m-1, d);
}
