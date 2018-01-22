function wordcloud(selector, url, weight) {
  var width = window.innerWidth * 0.3 , // changed
      height = window.innerHeight * 0.5;
  var fill = d3.scale.category20();
  d3.csv(url, function(d) {
      return {
        text: d.word,
        size: +d.freq * weight
      }
    },

    function(data) {
      data.sort(function(a, b) { return b.size - a.size})
      data = data.slice(0, 300) // changed
      d3.layout.cloud().size([width, height]).words(data)
        //.rotate(function() { return ~~(Math.random() * 2) * 90; })
        .rotate(0)
        .font('Godo')
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();
      function draw(words) {
        d3.select(selector).append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", "translate(" + width/2 + "," + height/2 + ")")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", 'Godo')
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
          .text(function(d) { return d.text; });
      }
    });
}
