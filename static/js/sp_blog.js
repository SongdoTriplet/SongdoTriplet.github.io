// Metric
$('.blogpost').each(function(sparklineId) {


  	var th = $(this),

        // Instead of splitting with "," we are passing the data in JSON format
        // Because splitting may cause getting datas as string
        // And that breaks scale calculators
        // Also this chain clears the HTML content
        data = [
          {'date': 'Jan-2012', 'value': 2481},
          {'date': 'Feb-2012', 'value': 3238},
          {'date': 'Mar-2012', 'value': 4019},
          {'date': 'Apr-2012', 'value': 3325},
          {'date': 'May-2012', 'value': 3675},
          {'date': 'Jun-2012', 'value': 4039},
          {'date': 'Jul-2012', 'value': 3982},
          {'date': 'Aug-2012', 'value': 4280},
          {'date': 'Sep-2012', 'value': 3807},
          {'date': 'Oct-2012', 'value': 5154},
          {'date': 'Nov-2012', 'value': 4803},
          {'date': 'Dec-2012', 'value': 4181},
          {'date': 'Jan-2013', 'value': 3982},
          {'date': 'Feb-2013', 'value': 3782},
          {'date': 'Mar-2013', 'value': 5082},
          {'date': 'Apr-2013', 'value': 5392},
          {'date': 'May-2013', 'value': 5846},
          {'date': 'Jun-2013', 'value': 5440},
          {'date': 'Jul-2013', 'value': 6470},
          {'date': 'Aug-2013', 'value': 6588},
          {'date': 'Sep-2013', 'value': 6312},
          {'date': 'Oct-2013', 'value': 8272},
          {'date': 'Nov-2013', 'value': 6747},
          {'date': 'Dec-2013', 'value': 6827},
          {'date': 'Jan-2014', 'value': 6893},
          {'date': 'Feb-2014', 'value': 6145},
          {'date': 'Mar-2014', 'value': 7846},
          {'date': 'Apr-2014', 'value': 7749},
          {'date': 'May-2014', 'value': 8607},
          {'date': 'Jun-2014', 'value': 8930},
          {'date': 'Jul-2014', 'value': 11104},
          {'date': 'Aug-2014', 'value': 11270},
          {'date': 'Sep-2014', 'value': 10836},
          {'date': 'Oct-2014', 'value': 13096},
          {'date': 'Nov-2014', 'value': 10561},
          {'date': 'Dec-2014', 'value': 10161},
          {'date': 'Jan-2015', 'value': 11509},
          {'date': 'Feb-2015', 'value': 8492},
          {'date': 'Mar-2015', 'value': 11960},
          {'date': 'Apr-2015', 'value': 11564},
          {'date': 'May-2015', 'value': 13907},
          {'date': 'Jun-2015', 'value': 12577},
          {'date': 'Jul-2015', 'value': 12770},
          {'date': 'Aug-2015', 'value': 14028},
          {'date': 'Sep-2015', 'value': 13735},
          {'date': 'Oct-2015', 'value': 14782},
          {'date': 'Nov-2015', 'value': 13310},
          {'date': 'Dec-2015', 'value': 13646},
          {'date': 'Jan-2016', 'value': 12700},
          {'date': 'Feb-2016', 'value': 11551},
          {'date': 'Mar-2016', 'value': 14636},
          {'date': 'Apr-2016', 'value': 15239},
          {'date': 'May-2016', 'value': 18573},
          {'date': 'Jun-2016', 'value': 16620},
          {'date': 'Jul-2016', 'value': 16092},
          {'date': 'Aug-2016', 'value': 17144},
          {'date': 'Sep-2016', 'value': 17167},
          {'date': 'Oct-2016', 'value': 19437},
          {'date': 'Nov-2016', 'value': 16672},
          {'date': 'Dec-2016', 'value': 18041},
          {'date': 'Jan-2017', 'value': 17721},
          {'date': 'Feb-2017', 'value': 17205},
          {'date': 'Mar-2017', 'value': 20891},
          {'date': 'Apr-2017', 'value': 20458},
          {'date': 'May-2017', 'value': 27121},
          {'date': 'Jun-2017', 'value': 31424},
          {'date': 'Jul-2017', 'value': 32845},
          {'date': 'Aug-2017', 'value': 31165},
          {'date': 'Sep-2017', 'value': 28802}


        ];
        var parseDate = d3.time.format("%b-%Y");

        data.forEach(function(d) {
            d.date = parseDate.parse(d.date);
            d.value = +d.value;
        });


        // Get width and height of the container
        var w = th.width(),
        h = th.height(),

        // Setting the margins
        // You may set different margins for X/Y
        xMargin = 15,
        yMargin = 20,

        // Scale functions
        // Setting the range with the margin
        y = d3.scale.linear()
                    .domain([2400, 33000])
                    .range([h - yMargin, yMargin]),
        x = d3.time.scale()
        					 .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([xMargin, w - xMargin]),

        // Scale functions for creating the gradient fill/stroke
        // Calculating the color according to data in the range of colors
        // That user has passed with the data-range-[high-low]-color attributes
        gradientY = d3.scale.linear()
                            .domain([0,2400,5000,10000,20000,30000]) .range(['#e86e6b','#e86e6c','#fcd56b','#59d1ba','#59d1bb','#a5d36e']),
        // This is a different margin than the one for the chart
        // Setting the gradient stops from 0% to 100% will cause wrong color ranges
        // Because data points are positioned in the center of containing rect
        percentageMargin = 100 / data.length,
        percentageX = d3.scale.linear()
                              .domain([0, data.length - 1])
                              .range([percentageMargin, 100 - percentageMargin]),

        // Create S
        container = d3.select(this).append("div"),

        // Create SVG object and set dimensions
        vis = container
            .append("svg:svg")
            .attr("width", w)
            .attr("height", h)

        // Create the group object and set styles for gradient definition
        // Which is about to add in a few lines
        xAxis = vis.append("svg:g")
            .attr("class", "x-axis")
            .attr("transform", "translate(" + 0 + "," + (h-yMargin) + ")")
            .attr("stroke", "white")
            .call(
                d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .ticks(6)
                .tickSize(-h+(yMargin*2), 0, 0)
                .tickFormat(d3.time.format("%Y"))
            );
  		  xAxis.selectAll("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(0,5)")
            .attr("fill", "white")
            .attr("stroke-width", "0");

        yAxis = vis.append("svg:g")
            .attr("class", "y-axis")
            .attr("transform", "translate("+xMargin+"," + 0 + ")")
            .attr("stroke", "white")
            .call(d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(4)
                .tickSize(-w+(xMargin*2), 0, 0)
                  .tickFormat(function(d, i){ return d })
            );
  				 yAxis.selectAll("line")
            .style("stroke-dasharray", ("3, 3"));
            yAxis.selectAll("text")
            .style("text-anchor", "start")
            .attr("transform", "translate(3,12)")
            .attr("fill", "white")
            .attr("stroke-width", "0");


        g = vis.append("svg:g")
                .attr("stroke", "url(#sparkline-gradient-" + sparklineId + ")")
                .attr("fill", "url(#sparkline-gradient-" + sparklineId + ")"),


        // Create the line
        // Using cardinal interpolation because we need
        // The line to pass on every point
        area = d3.svg.area()
          .interpolate("cardinal")
        	.x(function(d,i) { return x(d.date); })
          .y0(h)
          .y1(function(d) { return y(d.value); }),
        line = d3.svg.line()
            .interpolate("cardinal")
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.value); });




  g.append("svg:path").attr("class","area").attr("d", area(data)).attr("style", "fill:url(#area-fill)");

  		 // Create points
        // We are only creating points for first and last data
          // Because that looks cooler :)
       var points = g.selectAll(".point")
            .data(data)
            .enter().append("svg:circle")
            .attr("class", function(d, i) { return (i === (data.length - 1) || i === 0) ? "point end" : "point"; })
            .attr("cx", function(d, i) { return x(d.date) })
            .attr("cy", function(d, i) { return y(d.value) })
            .attr("r",  function(d, i) { return (i === (data.length - 1) || i === 0) ? 5 : 3; });

    // Append the line to the group
    g.append("svg:path").attr("d", line(data));






    for (i = 0; i < data.length; ++i) {
        var tooltip = container
            .append("div")
            .attr("class", "chart-tooltip")
      	    .attr("data-index", i)
            .html(data[i].value);
        $tooltip = $(".chart-tooltip[data-index="+i+"]");
       $tooltip.data({
          calcY: y,
          calcX: x
      });
  	    var tooltipLeft = $tooltip.data("calcX")(data[i].date) - ($tooltip.width() / 2);
        var tooltipTop = $tooltip.data("calcY")(data[i].value) - 30;
        // Position it again
        $tooltip.css({
            left: tooltipLeft + "px",
            top: tooltipTop + "px"
        });
		}
        // Create tooltip







    // Bind calculator functions to tooltip


    // Create the gradient effect
    // This is where the magic happens
    // We get datas and create gradient stops with calculated colors
    var defs = vis.append("svg:defs");
    defs.append("svg:linearGradient")
        .attr("id", "sparkline-gradient-" + sparklineId)
        .attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%")
        .attr("gradientUnits", "userSpaceOnUse")
        .selectAll(".gradient-stop")
        .data(data)
        .enter()
        .append("svg:stop").attr('offset', function(d, i) {
            return ((percentageX(i))) + "%";
        }).attr("style", function(d) {
            return "stop-color:" + gradientY(d.value) + ";stop-opacity:1";
        });
    areaFill = defs.append("svg:linearGradient");
    areaFill.attr("id", "area-fill");
    areaFill.attr("x1", "0%").attr("y1", "0%").attr("x2", "0%").attr("y2", "100%");
    areaFill.append("svg:stop").attr('offset', "0%").attr("style", 'stop-color:white;stop-opacity:0.1');
  	areaFill.append("svg:stop").attr('offset', "100%").attr("style", 'stop-color:white;stop-opacity:0');


    // Creating invisible rectangles for a better hover interaction
    // Because otherwise user would need to hover to the line or point
    // Which is a terrible experience
    // Creating full height invisible bars and binding mouse events
    // To do some special stuff like showing data or adding classes to
    // The point in the targeted area

    var rect = g.selectAll(".bar-rect")
        .data(data)
        .enter().append("svg:rect")
        .attr("class", "bar-rect")
        .attr("x", function(d, i) { return x(d.date) - (w / data.length / 2) })
        .attr("y", 0)
        .attr("width", w / data.length)
        .attr("height", h)
        .on("mouseenter", function(d, i) {
					 $('.chart-tooltip[data-index='+i+']').addClass('hover');
            // Add hover class to the targeted point
            var thisPoint = $(this).parent().parent().find('.point:eq(' + i + ')');
            thisPoint.attr('class', (i===0||i===(data.length-1)) ? 'end point hover' : 'point hover');
        }).on("mouseleave", function(d, i) {
            $('.chart-tooltip').removeClass('hover');
            // Remove hover class from the targeted point
            var thisPoint = $(this).parent().parent().find('.point:eq(' + i + ')');
            thisPoint.attr('class', (i===0||i===(data.length-1)) ? 'end point' : 'point');
        });

    // Helper function to calculate the HTML content of the tooltip
    // Tooltip may contain any HTML
    function formatTooltip(d, i) {
        return '<div class="title">' + d.value + '</div>'
    }
});
