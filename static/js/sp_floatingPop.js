// Metric
$('#floatingPop').each(function(sparklineId) {


  	var th = $(this),

        // Instead of splitting with "," we are passing the data in JSON format
        // Because splitting may cause getting datas as string
        // And that breaks scale calculators
        // Also this chain clears the HTML content
        data = [
    {'date': 'Jan-2012', 'value': 258544},
    {'date': 'Feb-2012', 'value': 275611},
    {'date': 'Mar-2012', 'value': 390145},
    {'date': 'Apr-2012', 'value': 366264},
    {'date': 'May-2012', 'value': 401986},
    {'date': 'Jun-2012', 'value': 350372},
    {'date': 'Jul-2012', 'value': 302247},
    {'date': 'Aug-2012', 'value': 297825},
    {'date': 'Sep-2012', 'value': 362703},
    {'date': 'Oct-2012', 'value': 419763},
    {'date': 'Nov-2012', 'value': 398490},
    {'date': 'Dec-2012', 'value': 360444},
    {'date': 'Jan-2013', 'value': 316517},
    {'date': 'Feb-2013', 'value': 287329},
    {'date': 'Mar-2013', 'value': 449717},
    {'date': 'Apr-2013', 'value': 454762},
    {'date': 'May-2013', 'value': 530727},
    {'date': 'Jun-2013', 'value': 426442},
    {'date': 'Jul-2013', 'value': 373862},
    {'date': 'Aug-2013', 'value': 366633},
    {'date': 'Sep-2013', 'value': 431118},
    {'date': 'Oct-2013', 'value': 531894},
    {'date': 'Nov-2013', 'value': 476167},
    {'date': 'Dec-2013', 'value': 467482},
    {'date': 'Jan-2014', 'value': 382890},
    {'date': 'Feb-2014', 'value': 374351},
    {'date': 'Mar-2014', 'value': 562918},
    {'date': 'Apr-2014', 'value': 567150},
    {'date': 'May-2014', 'value': 571559},
    {'date': 'Jun-2014', 'value': 506620},
    {'date': 'Jul-2014', 'value': 499424},
    {'date': 'Aug-2014', 'value': 451678},
    {'date': 'Sep-2014', 'value': 587532},
    {'date': 'Oct-2014', 'value': 650282},
    {'date': 'Nov-2014', 'value': 571135},
    {'date': 'Dec-2014', 'value': 540072},
    {'date': 'Jan-2015', 'value': 445488},
    {'date': 'Feb-2015', 'value': 383012},
    {'date': 'Mar-2015', 'value': 624746},
    {'date': 'Apr-2015', 'value': 619019},
    {'date': 'May-2015', 'value': 634916},
    {'date': 'Jun-2015', 'value': 546806},
    {'date': 'Jul-2015', 'value': 490949},
    {'date': 'Aug-2015', 'value': 496691},
    {'date': 'Sep-2015', 'value': 588515},
    {'date': 'Oct-2015', 'value': 663290},
    {'date': 'Nov-2015', 'value': 640076},
    {'date': 'Dec-2015', 'value': 598053},
    {'date': 'Jan-2016', 'value': 476075},
    {'date': 'Feb-2016', 'value': 439486},
    {'date': 'Mar-2016', 'value': 678605},
    {'date': 'Apr-2016', 'value': 684689},
    {'date': 'May-2016', 'value': 815562},
    {'date': 'Jun-2016', 'value': 710137},
    {'date': 'Jul-2016', 'value': 633001},
    {'date': 'Aug-2016', 'value': 650402},
    {'date': 'Sep-2016', 'value': 721761},
    {'date': 'Oct-2016', 'value': 787070},
    {'date': 'Nov-2016', 'value': 770547},
    {'date': 'Dec-2016', 'value': 721096},
    {'date': 'Jan-2017', 'value': 745489},
    {'date': 'Feb-2017', 'value': 743637},
    {'date': 'Mar-2017', 'value': 741785},
    {'date': 'Apr-2017', 'value': 739934},
    {'date': 'May-2017', 'value': 738082},
    {'date': 'Jun-2017', 'value': 736230},
    {'date': 'Jul-2017', 'value': 734378},
    {'date': 'Aug-2017', 'value': 732526},
    {'date': 'Sep-2017', 'value': 730675}


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
                    .domain([258000, 815000])
                    .range([h - yMargin, yMargin]),
        x = d3.time.scale()
        					 .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([xMargin, w - xMargin]),

        // Scale functions for creating the gradient fill/stroke
        // Calculating the color according to data in the range of colors
        // That user has passed with the data-range-[high-low]-color attributes
        gradientY = d3.scale.linear()
                            .domain([0,250000,350000,450000,550000,800000]) .range(['#e86e6b','#e86e6c','#fcd56b','#59d1ba','#59d1bb','#a5d36e']),
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
