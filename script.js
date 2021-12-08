/*globals d3, topojson */
var food_product_data = [];
var food_products = [];

/*
Food product,Land Use Change,Feed,Farm,Processing,Transport,Packaging,Retail,Total from Land to Retail,Total Global Average GHG Emissions per kg,Unit of GHG Emissions
*/
/*
d3.csv("Food_Product_Emissions.csv", d3.autoType, function(data) {
  return {
    food_product: data["Food product"],
    land_use_change: +data["Land Use Change"],
    feed: +data["Feed"],
    farm: +data["Farm"],
    processing: +data["Processing"],
    transport: +data["Transport"],
    packaging: +data["Packaging"],
    retail: +data["Retail"],
    total_from_land_to_retail: +data["Total from Land to Retail"],
    total_global_average_ghg_emissions: +data[
      "Total Global Average GHG Emissions per kg"]
  };
}).then(function(data) {
  console.log("food product data:", data);
  var filteredData = data;
  for (var i = 0; i < 42; i++) {
    if (filteredData[i].land_use_change < 0) {
      filteredData[i].land_use_change = 0;
    }
  }
  console.log(filteredData);
  makeHorizontalBarGraph(filteredData);
  makeVerticalBarChart(filteredData);
  //makeStackedBarChart(filteredData);
  //There are two data variables here: the first one is raw data, the second one is slightly cleaned
  //i have set all of the negative land_use_change variables to 0 because some visualizations don't
  //handle negative data values well!
});*/

function makeHorizontalBarGraph1(){
      d3.select(".texty1").remove();
      d3.csv("Food_Product_Emissions.csv", d3.autoType, function(data) {
      return {
        food_product: data["Food product"],
        land_use_change: +data["Land Use Change"],
        feed: +data["Feed"],
        farm: +data["Farm"],
        processing: +data["Processing"],
        transport: +data["Transport"],
        packaging: +data["Packaging"],
        retail: +data["Retail"],
        total_from_land_to_retail: +data["Total from Land to Retail"],
        total_global_average_ghg_emissions: +data[
          "Total Global Average GHG Emissions per kg"
        ]
      };
    }).then(function(data) {
      //console.log("food product data:", data);
      var filteredData = data;
      for (var i = 0; i < 42; i++) {
        if (filteredData[i].land_use_change < 0) {
          filteredData[i].land_use_change = 0;
        }
      }
     // console.log(filteredData);
      makeHorizontalBarGraph(filteredData);
      //makeVerticalBarChart(filteredData);
      //makeStackedBarChart(filteredData);
      //There are two data variables here: the first one is raw data, the second one is slightly cleaned
      //i have set all of the negative land_use_change variables to 0 because some visualizations don't
      //handle negative data values well!
    });
}
//barchart 1
function makeVerticalBarChart1(){
    d3.select(".texty1").remove();
   d3.csv("Food_Product_Emissions.csv", d3.autoType, function(data) {
      return {
        food_product: data["Food product"],
        land_use_change: +data["Land Use Change"],
        feed: +data["Feed"],
        farm: +data["Farm"],
        processing: +data["Processing"],
        transport: +data["Transport"],
        packaging: +data["Packaging"],
        retail: +data["Retail"],
        total_from_land_to_retail: +data["Total from Land to Retail"],
        total_global_average_ghg_emissions: +data[
          "Total Global Average GHG Emissions per kg"
        ]
      };
    }).then(function(data) {
     // console.log("food product data:", data);
      var filteredData = data;
      for (var i = 0; i < 42; i++) {
        if (filteredData[i].land_use_change < 0) {
          filteredData[i].land_use_change = 0;
        }
      }
     // console.log(filteredData);
      //makeHorizontalBarGraph(filteredData);
      makeVerticalBarChart(filteredData);
      //makeStackedBarChart(filteredData);
      //There are two data variables here: the first one is raw data, the second one is slightly cleaned
      //i have set all of the negative land_use_change variables to 0 because some visualizations don't
      //handle negative data values well!
    });
}

d3.csv("owid-co2-data.csv", d3.autoType, function(data) {
  return {
    iso_code: data["iso_code"],
    country: data["country"],
    Year: +data["year"],
    co2: +data["co2"],
    consumption_co2: +data["consumption_co2"],
    co2_growth_prct: +data["co2_growth_prct"],
    co2_growth_abs: +data["co2_growth_abs"],
    trade_co2: +data["trade_co2"],
    co2_per_capita: +data["co2_per_capita"],
    consumption_co2_per_capita: +data["consumption_co2_per_capita"],
    share_global_co2: +data["share_global_co2"],
    cumulative_co2: +data["cumulative_co2"],
    share_global_cumulative_co2: +data["share_global_cumulative_co2"],
    co2_per_gdp: +data["co2_per_gdp"],
    consumption_co2_per_gdp: +data["consumption_co2_per_gdp"],
    co2_per_unit_energy: +data["co2_per_unit_energy"],
    coal_co2: +data["coal_co2"],
    cement_co2: +data["cement_co2"],
    flaring_co2: +data["flaring_co2"],
    gas_co2: +data["gas_co2"],
    oil_co2: +data["oil_co2"],
    other_industry_co2: +data["other_industry_co2"],
    /*
    cement_co2_per_capita: +data["cement_co2_per_capita"],
    coal_co2_per_capita: +data["coal_co2_per_capita"],
    flaring_co2_per_capita: +data["flaring_co2_per_capita"],
    gas_co2_per_capita: +data["gas_co2_per_capita"],
    oil_co2_per_capita: +data["oil_co2_per_capita"],
    other_co2_per_capita: +data["other_co2_per_capita"],
    trade_co2_share: +data["trade_co2_share"],
    share_global_cement_co2: +data["share_global_cement_co2"],
    share_global_coal_co2: +data["share_global_coal_co2"],
    share_global_flaring_co2: +data["share_global_flaring_co2"],
    share_global_gas_co2: +data["share_global_gas_co2"],
    share_global_oil_co2: +data["share_global_oil_co2"],
    share_global_other_co2: +data["share_global_other_co2"],
    cumulative_cement_co2: +data["cumulative_cement_co2"],
    cumulative_coal_co2: +data["cumulative_coal_co2"],
    cumulative_flaring_co2: +data["cumulative_flaring_co2"],
    cumulative_gas_co2: +data["cumulative_gas_co2"],
    cumulative_oil_co2: +data["cumulative_oil_co2"],
    cumulative_other_co2: +data["cumulative_other_co2"],*/
    share_global_cumulative_cement_co2: +data[
      "share_global_cumulative_cement_co2"
    ],
    share_global_cumulative_coal_co2: +data["share_global_cumulative_coal_co2"],
    share_global_cumulative_flaring_co2: +data[
      "share_global_cumulative_flaring_co2"
    ],
    share_global_cumulative_gas_co2: +data["share_global_cumulative_gas_co2"],
    share_global_cumulative_oil_co2: +data["share_global_cumulative_oil_co2"],
    share_global_cumulative_other_co2: +data[
      "share_global_cumulative_other_co2"
    ],
    total_ghg: +data["total_ghg"],
    ghg_per_capita: +data["ghg_per_capita"],
    methane: +data["methane"],
    methane_per_capita: +data["methane_per_capita"],
    nitrous_oxide: +data["nitrous_oxide"],
    nitrous_oxide_per_capita: +data["nitrous_oxide_per_capita"],
    population: +data["population"],
    gdp: +data["gdp"],
    primary_energy_consumption: +data["primary_energy_consumption"],
    energy_per_capita: +data["energy_per_capita"],
    energy_per_gdp: +data["energy_per_gdp"]
  }; /*
}).then(function(data) {
  console.log("owid dataset", data);
  d3.csv("share-global-food-emissions.csv", d3.autoType, function(data1) {
    return {
      Entity: data1["Entity"],
      Code: data1["Code"],
      Year: +data1["Year"],
      Share_of_global_food_emissions: +data1["Share of global food emissions"]
    };
  }).then(function(data1) {
    data1 = data1.filter(function(d) {
      return d.Year == 2015;
    });
    console.log("data1", data1);

    var data2 = data.filter(function(d) {
      return d.Year == 2015;
    });
    console.log("data", data2);

    //makeStackedBarChart(data1, data2);
  });*/
});

d3.csv("stackedBarChart.csv", d3.autoType).then(function(data) {
  //console.log("stackedData", data);
  makeStackedBarChart(data);
});

d3.csv("co2-concentration-long-term.csv", d3.autoType).then(function(data) {
 // console.log(data);
  var dataUse = data.filter(function(d) {
    return d.year > 0;
  });
  
  makeLineGraph1(dataUse);
});
/*
//line graph
function makeLineGraph(data) {
  var margin = { top: 20, right: 30, bottom: 20, left: 30},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  var svg = d3
    .select(".co2-linechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    //.attr('viewBox',[20,20,20,20])

  svg
    .append("text") //title. wrong font and color tho lol
    .attr("x", width / 2)
    .attr("y", 16)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text("Atmospheric CO2 Concentration (0 B.C. - Present)");
  
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .style("font-size", "12px")
    .text("Years");
  
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "12px")
    .text("Amount of CO2 (parts/million)");
  
  var x = d3
    .scaleLinear()
    .domain(
      d3.extent(data, function(d) {
        var year = d.year + '';
        year=year.replace(/\,/g,''); 
        return parseInt(year,10);
      })
    )
    .range([0, width]);

  var xAxis = svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([
      200,
      d3.max(data, function(d) {
        return +d.concentrations;
      })
    ])
    .range([height, 0]);
  
  var yAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisLeft(y));

  
  
  var clip = svg
    .append("defs")
    .append("svg:clipPath")
    .attr("id", "clip")
    .append("svg:rect")
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);


  var brush = d3
    .brushX() 
    .extent([[0, 0], [width, height]]) 
    .on("end", updateChart); 

  var line = svg.append("g").attr("clip-path", "url(#clip)");

  line
    .append("path")
    .datum(data)
    .attr("class", "line") 
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function(d) {
          return x(d.year);
        })
        .y(function(d) {
          return y(d.concentrations);
        })
    );

  // Add the brushing
  line
    .append("g")
    .attr("class", "brush")
    .call(brush);

  var idleTimeout;
  function idled() {
    idleTimeout = null;
  }

  function updateChart() {
    var extent = d3.event.selection;

    if (!extent) {
      if (!idleTimeout) return (idleTimeout = setTimeout(idled, 350));
      x.domain([4, 8]);
    } else {
      x.domain([x.invert(extent[0]), x.invert(extent[1])]);
      line.select(".brush").call(brush.move, null); 
    }

    // Update axis and line position
    xAxis
      .transition()
      .duration(1000)
      .call(d3.axisBottom(x));
    line
      .select(".line")
      .transition()
      .duration(1000)
      .attr(
        "d",
        d3
          .line()
          .x(function(d) {
            return x(d.year);
          })
          .y(function(d) {
            return y(d.concentrations);
          })
      );
  }

  // If user double click, reinitialize the chart
  svg.on("dblclick", function() {
    x.domain(
      d3.extent(data, function(d) {
        return d.year;
      })
    );
    xAxis.transition().call(d3.axisBottom(x));
    line
      .select(".line")
      .transition()
      .attr(
        "d",
        d3
          .line()
          .x(function(d) {
            return x(d.year);
          })
          .y(function(d) {
            return y(d.concentrations);
          })
      );
  });
}
*/


function makeLineGraph1(data){
  // set the dimensions and margins of the graph
    var margin = {top: 25, right: 30, bottom: 60, left: 60},
        width = 550 - margin.left - margin.right,
        height = 650 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select(".co2-linechart")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    
  
    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { 
        return d.year; }))
      .range([ 0, width ]),
    xAxis = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .attr("font-size","15px");

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([200, d3.max(data, function(d) { return +d.concentrations; })])
      .range([ height, 0]),
    yAxis = svg.append("g")
      .call(d3.axisLeft(y))
      .attr("font-size","15px");

    svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width/2 + 30)
    .attr("y", height + 45)
    .style("font-size", "15px")
    .text("Years");
  
    svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", -55)
      .attr("x",-200)
      .attr("dy", ".5em")
      .attr("transform", "rotate(-90)")
      .style("font-size", "15px")
      .text("Amount of CO2 (parts/million)");
  
    svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width/2 + 15)
    .attr("y", -10)
    .style("font-size", "20px")
    .text("Atmospheric CO2 Concentration (0 B.C. - Present)");
    
    
    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("y", 0);

   
    var brush = d3.brushX()                   
        .extent( [ [0,0], [width,height] ] )  
        .on("end", updateChart)               

    
    var line = svg.append('g')
      .attr("clip-path", "url(#clip)")


    line.append("path")
      .datum(data)
      .attr("class", "line")  
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2.0)
      .attr("d", d3.line()
        .x(function(d) { return x(d.year) })
        .y(function(d) { return y(d.concentrations) })
        )

    line
      .append("g")
        .attr("class", "brush")
        .call(brush);

    
    var idleTimeout
    function idled() { idleTimeout = null; }

    function updateChart() {

      var extent = d3.event.selection

      if(!extent){
        if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); 
        x.domain([ 4,8])
      }else{
        x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
        line.select(".brush").call(brush.move, null)
      }

     
      xAxis.transition().duration(1000).call(d3.axisBottom(x))
      line
          .select('.line')
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(d.year) })
            .y(function(d) { return y(d.concentrations) })
          )
    }

    
    svg.on("dblclick",function(){
      x.domain(d3.extent(data, function(d) { return d.year; }))
      xAxis.transition().call(d3.axisBottom(x))
      line
        .select('.line')
        .transition()
        .attr("d", d3.line()
          .x(function(d) { return x(d.year) })
          .y(function(d) { return y(d.concentrations) })
      )
    });
}





function makeHorizontalBarGraph(data) {
  d3.select(".viz4").select("svg").remove();
  
  data = data.sort(function(a, b) {
    return b.land_use_change - a.land_use_change;
  });
  
  data = data.filter(function(d,i){return i<15} )
  
  var margin = { top: 50, right: 20, bottom: 50, left: 100 },
    width = 700 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

  var svg = d3
    .select(".viz4")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
    .scaleLinear()
    .domain([0, 17])
    .range([0, width]);

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
  svg
    .append("text") 
    .attr("x", width / 2)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text("Land Use Change (1960-Present)");
  
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width-150)
    .attr("y", height + 40)
    .style("font-size", "15px")
    .text("Land Use Change (Percentage Increase by Hectare)");

  var y = d3
    .scaleBand()
    .range([0, height])
    .domain(
      data.map(function(d) {
        return d.food_product;
      })
    )
    .padding(0.1);
  svg.append("g").call(d3.axisLeft(y));

  var tooltip = d3
    .select(".viz3")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white");

  var showTooltip = function(d) {
    tooltip.transition().duration(200);
    tooltip
      .style("opacity", 1)
      .html(d.food_product + ", Land Use Change: " + d.land_use_change)
      .style("left", d3.mouse(this)[0] + 30 + "px")
      .style("top", d3.mouse(this)[1] + 30 + "px");
  };
  var moveTooltip = function(d) {
    tooltip
      .style("left", d3.mouse(this)[0] + 30 + "px")
      .style("top", d3.mouse(this)[1] + 30 + "px");
  };
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0);
  };
  //Bars
  svg
    .selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "horizontal-bar")
    .attr("x", x(0))
    .attr("y", function(d) {
      return y(d.food_product);
    })
    .attr("height", y.bandwidth())
    .attr("fill", "green")
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip)
    .transition()
        .duration(1500)
        .delay(function(d,i){ return i*100})//a different delay for each bar
        .attr("width", function(d){
            return x(d.land_use_change);
        });
  
  
  
}

function makeVerticalBarChart(data) {
  d3.select(".viz4").select("svg").remove();
   data = data.sort(function(b, a) {
    return a.total_global_average_ghg_emissions - b.total_global_average_ghg_emissions;
  });
  
  data = data.filter(function(d,i){return i<15} )
  var margin = { top: 20, right: 30, bottom: 90, left: 90 },
    width = 700 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  var svg = d3
    .select(".viz4")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      data.map(function(d) {
        return d.food_product;
      })
    )
    .padding(0.2);

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")
    .style("font-size","12px");
  
  svg
    .append("text") //title. wrong font and color tho lol
    .attr("x", width / 2)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text("Global Average Greenhouse Gas Emissions by Food Product");

  
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - 260)
    .attr("y", height + 75)
    .style("font-size", "15px")
    .text("Food Category");
  
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -55)
    .attr("x",-85)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "18px")
    .text("Total Global Average GHG Emissions per kg");

  var y = d3
    .scaleLinear()
    .domain([0, 55])
    .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  var tooltip = d3
    .select(".viz3")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white");

  var showTooltip = function(d) {
    tooltip.transition().duration(200);
    tooltip
      .style("opacity", 1)
      .html(
        d.food_product +
          ", Global Avg Green House Gas Emissions: " +
          d.total_global_average_ghg_emissions
      )
      .style("left", d3.mouse(this)[0] + 30 + "px")
      .style("top", d3.mouse(this)[1] + 30 + "px");
  };
  var moveTooltip = function(d) {
    tooltip
      .style("left", d3.mouse(this)[0] + 30 + "px")
      .style("top", d3.mouse(this)[1] + 30 + "px");
  };
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0);
  };

  svg
    .selectAll("mybar")
    .attr("class", "rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d) {
      return x(d.food_product);
    })
    .attr("width", x.bandwidth())
    .attr("fill", "green")
    .attr("height", function(d) {
      return height - y(0);
    }) // always equal to 0
    .attr("y", function(d) {
      return y(0);
    })
    .attr("class", "vertical-bar")
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip);

  svg
    .selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", function(d) {
      return y(d.total_global_average_ghg_emissions);
    })
    .attr("height", function(d) {
      return height - y(d.total_global_average_ghg_emissions);
    })
    .delay(function(d, i) {
      return i * 100;
    });
}

function makeStackedBarChart(/*data1, data2, */ data) {
  /*
  var newData = [];
  for (var i = 0; i < 225; i++) {
    var entity = data1[i].Entity;
    for (var j = 0; j < 244; j++) {
      var country = data2[j].country;
      var share_global_ems = data1[i].Share_of_global_food_emissions;
      var share_co2 = data2[j].share_global_co2;
      if (entity == country) {
        newData.push({
          Country: entity,
          Global_EMs: share_global_ems,
          Share_co2: share_co2
        });
      }
    }
  }

  newData = newData
    .sort(function(x, y) {
      return d3.descending(x.Share_co2, y.Share_co2);
    })
    .slice(0, 15);

  console.log("newData,", newData);
  */
  // set the dimensions and margins of the graph
  
  var margin = { top: 10, right: 30, bottom: 20, left: 50 },
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select(".viz6")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = data.columns.slice(1);
  //console.log(subgroups)
  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = d3
    .map(data, function(d) {
      return d.Country;
    })
    .keys();

  // Add X axis
  var x = d3
    .scaleBand()
    .domain(groups)
    .range([0, width])
    .padding([0.2]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([0, 45])
    .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // color palette = one color per subgroup
  var color = d3
    .scaleOrdinal()
    .domain(subgroups)
    .range(["PaleGreen", "DarkGreen"]);

  //stack the data? --> stack per subgroup
  var stackedData = d3.stack().keys(subgroups)(data);
 // console.log("stacked data", stackedData);

  // ----------------
  // Create a tooltip
  // ----------------
  var tooltip = d3
    .select(".viz6")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px");

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d, data) {
    var subgroupName = d3.select(this.parentNode).datum().key;
    var subgroupValue = d.data[subgroupName];

    if (subgroupName == "Global_EMs") {
      subgroupName = "Share of Global CO2 Emissions";
    }

    if (subgroupName == "Share_co2") {
      subgroupName = "Percentage of Produced CO2 that is from the Food Supply Chain";
    }

    tooltip
      .html(subgroupName + "<br>" + "Value: " + subgroupValue)
      .style("opacity", 1);
  };
  var mousemove = function(d) {
    tooltip
      .style("left", d3.mouse(this)[0] + 90 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
      .style("top", d3.mouse(this)[1] + "px");
  };
  var mouseleave = function(d) {
    tooltip.style("opacity", 0);
  };
  
  // Show the bars
  svg
    .append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .enter()
    .append("g")
    .attr("fill", function(d) {
      return color(d.key);
    })
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data(function(d) {
      return d;
    })
    .enter()
    .append("rect")
    .attr("x", function(d) {
      return x(d.data.Country);
    })
    .attr("y", function(d) {
      return y(d[1]);
    })
    .attr("height", function(d) {
      return y(d[0]) - y(d[1]);
    })
    .attr("width", x.bandwidth())
    .attr("stroke", "black")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);
}

d3.csv("FAOSTAT-1.csv", d3.autoType, function(data) {
  return {
    //Domain_Code: data['Domain Code'],
    Domain: data['Domain'],
    //Area_Code_ISO3: data['Area Code (ISO3)'],
    Area: data['Area'], 
    //Element_Code: +data['Element Code'],
    Element: data['Element'],
    //Item_Code:data['Item Code (FAO)'],
    Item: data['Item'],
    //Year_Code: data['Year Code'],
    Year: data['Year'],
    //Unit: data['Unit'],
    Value: +data['Value'],
    Flag: data['Flag']
  };
}).then(function(data) {
  var newData = []
  var bestList = []
 // console.log("FAO STAT DATA", data);
 // console.log("filtered FAO", filteredData)
  for(var i=0; i<93041; i++){
    if(data[i].Year == 2018 && data[i].Flag == "" && data[i].Item != "Hen Eggs (number)"){
      newData.push(data[i]);
    }
  }
  //console.log("NEW DATAA", newData)
  //console.log("newData for 2015", newData)
  var allCountries = d3.map(data, function(d){return(d.Area)}).keys()
  //console.log('allCountries',allCountries)
  newData = newData.sort(function(a,b) { return d3.descending(a.Area, b.Area) ||  (b.Value - a.Value) } )
  for(var i=0; i<668; i++){
    var area = newData[i].Area
    if(bestList.includes(area) == false){
      bestList.push(newData[i].Area, newData[i].Item, newData[i].Value)
    }
  }
  //console.log(bestList, "bestList")
  var countries = [], items = [], values = [];
  
  for(var i =0; i<420; i+=3){
    countries.push(bestList[i])
    items.push(bestList[i+1])
    values.push(bestList[i+2])
  }
  
 // console.log("countries", countries, "items", items, "values", values)
  
  var dataDict = {}
  
  for(var i =0; i<420; i++){
    dataDict[i] = [countries[i], items[i], values[i]];
  }
  //var finalData = dataDict
 // console.log('dataDict',dataDict)
  var finalData = []
  for(var i=0; i<140;i++){
    var data = dataDict[i]
    //console.log("here",data)
    finalData.push(data)
  }
  
  //console.log("FINAL DATA:",finalData)
  //console.log(finalData[1])
  
   //console.log(finalData[0][2])
   //console.log(countries,items)
  
 var csv = finalData.map(function(d){
    return d.join();
  }).join('\n'); 

 //console.log(csv);
  
});


function bubbleChart() {
  const width = 650;
  const height = 500;

  const centre = { x: width / 2, y: height / 2 };

  const forceStrength = 0.02;

  let svg = null;
  let bubbles = null;
  let labels = null;
  let nodes = [];

  function charge(d) {
    return Math.pow(d.radius, 2.0) * 0.01;
  }

  // create a force simulation and add forces to it
  const simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody().strength(charge))

    .force(
      "x",
      d3
        .forceX()
        .strength(forceStrength)
        .x(centre.x)
    )
    .force(
      "y",
      d3
        .forceY()
        .strength(forceStrength)
        .y(centre.y)
    )
    .force("collision", d3.forceCollide().radius(d => d.radius + 1))
    .force('attract', d3.forceRadial(0, width / 2, height / 2).strength(0.01))

  simulation.stop();

  const colorList = [
    d3.interpolateGreens(0),
    d3.interpolateGreens(0.1),
    d3.interpolateGreens(0.15),
    d3.interpolateGreens(0.3),
    d3.interpolateGreens(0.45),
    d3.interpolateGreens(0.6),
    d3.interpolateGreens(0.75),
    d3.interpolateGreens(0.9),
    d3.interpolateGreens(1.0)
  ];

  function createNodes(rawData) {
    const maxSize = d3.max(rawData, d => d.Value);
    //console.log(maxSize);

    // size bubbles based on area
    const radiusScale = d3
      .scaleSqrt()
      .domain([0, maxSize])
      .range([0, 80]);

    const myNodes = rawData.map(d => ({
      radius: radiusScale(d.Value / 1.15),
      size: d.Value / 1,
      x: Math.random() * 900,
      y: Math.random() * 800,
      Name: d.Country,
      Product: d.Product,
      Value: d.Value
    }));
    //console.log("MYNODES", myNodes);
    return myNodes;
  }

  let chart = function chart(selector, rawData) {
    nodes = createNodes(rawData);
    //console.log("NODES", nodes);

    svg = d3
      .select(selector)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const elements = svg
      .selectAll(".bubble")
      .data(nodes, d => d.Name)
      .enter()
      .append("g");

    const possibleProducts = [
      "Coffee",
      "Chicken Meat",
      "Pig Meat",
      "Hen Eggs",
      "Whole Milk",
      "Palm Oil",
      "Cocoa",
      "Cattle Meat",
      "Sheep Meat"
    ];

    bubbles = elements
      .append("circle")
      .classed("bubble", true)
      .attr("r", d => d.radius)
      .attr("fill", d => colorList[possibleProducts.indexOf(d.Product)])
      .style("stroke", "black")
      .style("stroke-width", "1px");

    function determineText(data) {
      if (data.radius < 18) {
        var text = "";
        return text;
      } else {
        if (data.Name.length >= data.radius) {
          text = data.Name.substring(0, 5) + ".";
          return text;
        } else {
            if (data.Name == 'Ecuador' || data.Name == 'Kazakhstan' || data.Name == 'South Africa' || data.Name == 'Albania' || data.Name == 'Romania' || data.Name == 'Switzerland'){
              text = ""
              return text;
            }
          return data.Name;
        }
      }
    }

    labels = elements
      .append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .style("font-size", 8)
      .text(d => determineText(d));

    bubbles.on("click", function(d) {
      d3.select(".jettasRequest").select("svg").remove(); //recreate new chart from bubble
     // console.log("CLICKED", d.Name);
      var country = d.Name;
     // console.log(country);
      d3.csv("FAOSTAT-1.csv", d3.autoType, function(data) {
      return {
        //Domain_Code: data['Domain Code'],
        Area: data["Area"],
        //Area_Code_ISO3: data['Area Code (ISO3)'],
        Item: data["Item"],
        //Element_Code: +data['Element Code'],
        Year: data["Year"],
        Value: +data["Value"]
      };}).then(function(data) {
     //   console.log('pls say china',data)
      //  console.log(country, "country this")
        var dataUse = data.filter(function(data) {
          return (data.Year == 2018 && data.Area == country && data.Item != "Hen Eggs (number)" && data.Item != "Soybean Oil");
        });
        //console.log("new chart",dataUse);
        newBarChart(dataUse);
      });
     d3.event.stopPropagation();

      bubbles
        .on("mouseover", function(d) {
          div
            .transition()
            .duration(200)
            .style("opacity", 0.9);
          div
            .html(
              "Country: " +
                d.Name +
                "<br/>" +
                "Most Produced Product: " +
                d.Product +
                "<br/>" +
                "Number Produced: " +
                d.Value
            )
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY - 28 + "px");
        })
        .on("mouseout", function(d) {
          div
            .transition()
            .duration(500)
            .style("opacity", 0);
        });
    });
    //console.log(rawData['Country'])

    simulation
      .nodes(nodes)
      .on("tick", ticked)
      .restart();
    // Define the div for the tooltip
    var div = d3
      .select(".bubbleChart")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
  };

  function ticked() {
    bubbles.attr("cx", d => d.x).attr("cy", d => d.y);

    labels.attr("x", d => d.x).attr("y", d => d.y);
  }

  return chart;
}

let myBubbleChart = bubbleChart();

function display(data) {
  myBubbleChart(".bubbleChart", data);
  //makeTable(data)
  //Create legend items
}

function makeBubbleChart(){
  let myBubbleChart = bubbleChart();

  function display(data) {
    myBubbleChart(".bubbleChart", data);
    //makeTable(data)
    //Create legend items
  }
  d3.select(".texty").remove();
  d3.select(".bubbleChart").select("svg").remove();
  d3.csv("bubbl3.csv").then(display);  
}


d3.csv("co-emissions-per-capita.csv", d3.autoType, function(data) {
  return {
    //Domain_Code: data['Domain Code'],
    name: data["name"],
    //Area_Code_ISO3: data['Area Code (ISO3)'],
    code: data["code"],
    //Element_Code: +data['Element Code'],
    co2: +data["co2"],
    year: data["year"]
  };
}).then(function(data) {
  var dataUse = data.filter(function(d) {
    return d.year == 2018;
  });
  //console.log("emissions",dataUse);
  //makeMap(dataUse)
});

function newBarChart(data){
  
  var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 550 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select(".jettasRequest")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
  
  data = data.sort(function(b, a) {
    return a.Value - b.Value;
  });
  
  var newData = data.filter(function(d,i){return i<5} )
  //console.log('say', newData)
  // X axis
  var x = d3.scaleBand()
    .range([ 0, width])
    .domain(newData.map(function(d) { return d.Item; }))
    .padding(0.2);
  
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-5,0)rotate(-35)")
      .style("text-anchor", "end")
      .style("font-size", "14px")

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, d3.max(newData, function(d){return d.Value})])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
  
  const possibleProducts = [
      "Coffee",
      "Chicken Meat",
      "Pig Meat",
      "Hen Eggs",
      "Whole Milk",
      "Palm Oil",
      "Cocoa",
      "Cattle Meat",
      "Sheep Meat"
    ];
  
  const colorList = [
    d3.interpolateGreens(0),
    d3.interpolateGreens(0.1),
    d3.interpolateGreens(0.15),
    d3.interpolateGreens(0.3),
    d3.interpolateGreens(0.45),
    d3.interpolateGreens(0.6),
    d3.interpolateGreens(0.75),
    d3.interpolateGreens(0.9),
    d3.interpolateGreens(1.0)
  ];
  
  
  // Bars
  svg.selectAll("mybar")
    .attr("class","rext")
    .data(newData)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Item); })
      .attr("y", function(d) { return y(d.Value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.Value); })
       .attr("fill", d => colorList[possibleProducts.indexOf(d.Item)])
  
  svg
    .append("text") //title. wrong font and color tho lol
    .attr("x", width / 2)
    .attr("y", - 5)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text(newData[0].Area + "'s Most Produced Food Products");
  
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width/2)
    .attr("y", height + 80)
    .style("font-size", "14px")
    .text("Products");
  
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "8px")
    .text("CO2 Produced in 2018 (kg/tonnes)");
  
  
  svg
    .selectAll("rect")
    .transition()
    .duration(800)
    .attr("y", function(d) {
      return y(d.Value);
    })
    .attr("height", function(d) {
      return height - y(d.Value);
    })
    .delay(function(d, i) {
      return i * 100;
    });

}

d3.select("#tooltip1").style("opacity", 0);
function makeDaMap(){Promise.all([
    
    d3.csv("bubble4.csv", d3.autoType),
    d3.json("world.json")
]).then(([shares, world]) =>{
  
  //console.log("world", world);
  
  d3.select(".texty").remove();
  d3.select(".bubbleChart").select("svg").remove();
  const width = 500
  const height = 500
  const svg = d3.select('.bubbleChart')
    .attr("width", width)
    .attr("height", height)
    .append('svg')
    .attr('viewBox',[0,0,1000,400])
  
  var colorScale = d3
    .scaleSequential(d3.interpolateGreens)
    .domain([0, d3.max(shares, d => d.Value)]);
  
  // create a geo path generator using the projection
   var projection = d3.geoMercator()
  
   const path = d3.geoPath();
  
  var tooltip = d3.select(".tooltip")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")
  
   var showTooltip = function(d) {
    const country = shares.find(s => s.id == d.id);
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Country: " + country.id)
      .style("left", (d3.mouse(this)[0]) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }
  
  //console.log("data", shares)
  //d3.select("#tooltip1").style("opacity", 0)
   svg.append("g")
    .attr("class","path1")
    .selectAll("path")
    .data(world.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      .attr("fill", d => {
      const country = shares.find(s => s.id == d.id);
      if (!country) return null;
      return colorScale(country.Value)
      })
    /*.on("mouseenter", (event, d) => {
         d3.select("#tooltip1").style("opacity", 1)
       const country = shares.find(s => s.id == d.id);
        const pos = d3.pointer(event, window);
        d3.select("#tooltip1")
          .style("left", pos[0] + "px")
          .style("top", pos[1] + "px")
          .select("#value")
          .html(
                "Country: " + country.id + "<br>" +
                "Emissions: " + country.Value + "<br>"
            )
        d3.select("#tooltip1").classed("hidden", false);
        })
    .on("mouseleave", (event, d) => {
          d3.select("#tooltip1").style("opacity", 0)
    });*/
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )
    
  svg.on("click", function(d) {
      d3.select(".jettasRequest").select("svg").remove();
     // console.log("CLICKED", d.Name);
      var country = d.Name;
     // console.log(country);
      d3.csv("FAOSTAT-1.csv", d3.autoType, function(data) {
      return {
        //Domain_Code: data['Domain Code'],
        Area: data["Area"],
        //Area_Code_ISO3: data['Area Code (ISO3)'],
        Item: data["Item"],
        //Element_Code: +data['Element Code'],
        Year: data["Year"],
        Value: +data["Value"]
      };}).then(function(data) {
     //   console.log('pls say china',data)
     //   console.log(country, "country this")
        var dataUse = data.filter(function(data) {
          return (data.Year == 2018 && data.Area == country && data.Item != "Hen Eggs (number)");
        });
        //console.log("new chart",dataUse);
        newBarChart(dataUse);
      });
  })})};

function makeVegaGraph(){
  // Assign the specification to a local variable vlSpec.
  d3.select(".viz5").select("svg").remove();
                var vlSpec = {
                  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
                  data: {
                    url:
                      "https://raw.githubusercontent.com/shevannayee/foodemissionsVIZ/main/owid-co2-data6.csv"
                  },
                  vconcat: [
                    {
                      width: 500,
                      height: 500,
                      mark: { type: "line", point: true },
                      encoding: {
                        x: { field: "year", type: "temporal" },
                        y: { field: "co2", type: "quantitative" },
                        color: { field: "country", type: "nominal" },
                        tooltip: [
                          { field: "country", type: "nominal" },
                         // { field: "date", type: "ordinal" },
                          { field: "co2", type: "quantitative" }
                        ]
                      },
                      transform: [
                        {
                          filter: {
                            timeUnit: "year",
                            field: "year",
                            gt: "1920"
                          }
                        },
                        {
                          filter: { field: "co2", gte: 2000 }
                        }
                      ],
                      selection: { brush: { type: "interval" } }
                    }
                  ]
                };
                vegaEmbed("#vis", vlSpec);
}

makeVegaGraph()

function makeGroupedBarChart(data){
  var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 1200 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select(".groupedBarChart")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  var subgroups = data.columns.slice(1)

  var groups = d3.map(data, function(d){return(d.Country)}).keys()
//  console.log("subgroups",subgroups)
//  console.log("groups",groups)

  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0));

  var y = d3.scaleLinear()
    .domain([0, 30])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  
  var z = d3.scaleOrdinal()
    .range(["LightGreen","DarkGreen"]);

  svg.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.Country) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return z(d.key); })

  var legend = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(subgroups.slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
  
  legend.append("rect")
      .attr("x", width - 19)
      .attr("width", 19)
      .attr("height", 19)
       .attr("fill", z);//function(d) { return subgroups.map(function(key){ return color(d.key); })});

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .attr("font-size", '19px')
      .text(function(d) { if(d == 'Global_EMs'){return 'Percentage of Global Emissions';} else{return 'Percentage Emissions From Food Production Per Country'} });
  
}

d3.csv("stackedBarChart.csv", d3.autoType).then(function(data) {
//  console.log("stackedData", data);
  makeGroupedBarChart(data);
});

d3.csv("GDP.csv", d3.autoType).then(function(data) {
  makeBubblePlot(data)
});


function makeBubblePlot(data){
  var data = data.filter(function(data) {
          return (data.Year == 2015 && data.Country != 'World' && data.Country != 'Asia' && data.Country != 'Europe' && data.Country != 'North America' && data.Country != "Africa");
        });
  

  
  //console.log("last",data)
  var margin = {top: 60, right: 50, bottom: 50, left: 80},
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  var svg = d3.select(".bubblePlot")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


  var x = d3.scaleLinear()
    .domain([0, 80000])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 25])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add a scale for bubble size
  var z = d3.scaleLinear()
    .domain([200000, 1310000000])
    .range([ 4, 40]);

  // Add a scale for bubble color
  var myColor = d3.scaleOrdinal()
    .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
    .range(d3.schemeSet2);

  var continents = ["Asia", "Europe", "Americas", "Africa", "Oceania"]
  
  // -1- Create a tooltip div that is hidden by default:
  var tooltip = d3.select(".bubblePlot")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Country: " + d.Country)
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", "bubbly")
      .attr("cx", function (d) { return x(d.GDP); } )
      .attr("cy", function (d) { return y(d.CO2); } )
      .attr("r", function (d) { return z(d.Population); } )
      .style("fill", function (d) { return myColor(d.Continent); } )
    // -3- Trigger the functions
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )
  
  
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width /2 )
    .attr("y", height+38)
    .style("font-size", "18px")
    .text("Gross Domestic Product ($) per Capita");
  
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("y", -50)
    .attr("x", -180)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "18px")
    .text("CO2 Emissions (per capita)");
  
 
  svg
    .append("text") //title. wrong font and color tho lol
    .attr("x", width / 2)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text("CO2 Emissions Per Capita v GDP Per Capita (2015)");
  

  
  
}



d3.csv("newLine.csv", d3.autoType).then(function(data) {
  newLineChart(data)
});



function newLineChart(data){
    
  var margin = {top: 30, right: 10, bottom: 70, left: 80},
      width = 600 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

  
  var svg = d3.select(".changeLineGraph")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var allGroup = ["CO2", "GDP"]

    var dataReady = allGroup.map( function(grpName) { 
      return {
        name: grpName,
        values: data.map(function(d) {
          return {time: d.Year, value: +d[grpName]};
        })
      };
    });
   
  
    
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(['LightGreen','DarkGreen']);

   
    var x = d3.scaleLinear()
      .domain([1990,2019])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
      .domain( [0.4,160])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    var line = d3.line()
      .x(function(d) { return x(+d.time) })
      .y(function(d) { return y(+d.value) })
    svg.selectAll("myLines")
      .data(dataReady)
      .enter()
      .append("path")
        .attr("class", function(d){ return d.name })
        .attr("d", function(d){ return line(d.values) } )
        .attr("stroke", function(d){ return myColor(d.name) })
        .style("stroke-width", 4)
        .style("fill", "none")

    
    svg
      .selectAll("myDots")
      .data(dataReady)
      .enter()
        .append('g')
        .style("fill", function(d){ return myColor(d.name) })
        .attr("class", function(d){ return d.name })
      
      .selectAll("myPoints")
      .data(function(d){ return d.values })
      .enter()
      .append("circle")
        .attr("cx", function(d) { return x(d.time) } )
        .attr("cy", function(d) { return y(d.value) } )
        .attr("r", 5)
        .attr("stroke", "white")

    
    svg
      .selectAll("myLabels")
      .data(dataReady)
      .enter()
        .append('g')
        .append("text")
          .attr("class", function(d){ return d.name })
          .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; }) 
          .attr("transform", function(d) { return "translate(" + x(d.value.time) + "," + y(d.value.value) + ")"; }) 
          .attr("x", 12) // shift the text a bit more right
          .text(function(d) { return d.name; })
          .style("fill", function(d){ return myColor(d.name) })
          .style("font-size", 12)
    
   
    svg
      .selectAll("myLegend")
      .data(dataReady)
      .enter()
        .append('g')
        .append("text")
          .attr('x', function(d,i){ return 30 + i*60})
          .attr('y', 30)
          .text(function(d) { return d.name; })
          .style("fill", function(d){ return myColor(d.name) })
          .style("font-size", 15)
        .on("click", function(d){
          
          var currentOpacity = d3.selectAll("." + d.name).style("opacity")
          
          d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0:1)

        })
  
  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width /2 )
    .attr("y", height+50)
    .style("font-size", "18px")
    .text("Year");
  
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("y", -50)
    .attr("x", -200)
    .attr("dy", ".5em")
    .attr("transform", "rotate(-90)")
    .style("font-size", "18px")
    .text("Percentage Increase (since 1990)");
  
 
  svg
    .append("text") 
    .attr("x", width / 2)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .text("CO2 Emissions Per Capita v GDP Per Capita (1990-2019)");

}