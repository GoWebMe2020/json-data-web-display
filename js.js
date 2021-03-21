// The below code receives the data from the stream, loops over the data and then displays it within the HTML file.
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		// The below response variable's value is JSON.parse() because the data is coming from a JSOM file and it will display an error if it is not parsed as below.
        const response = JSON.parse(xhttp.responseText);
        const data = response;
		// let output = "". This will constantly change for every loop and print a new block for the different pieces of data.
        let output = "";
		// During the loop, it will collect and collate the data and place the below concatenated HTML into the index.HTML. This already contains the necessary styles.
        for(let i = 0; i < data.length; i++){
            output +=   "<div class='game_box'>" +
                        "<div class='ind_box'>" +
			            "<div class='top_of_box'>" +
				        "<div class='top_left'>" +
						// You may want to edit how the date and time is displayed in the HTML.
					    "<p><strong>" + data[i].date + " " + data[i].time + "</strong></p>" +
				        "</div>" +
				        "<div class='top_right'>" +
					    "<div class='home_team'>" +
						"<p><strong>" + data[i].p1 + "</strong></p>" +
					    "</div>" +
					    "<div class='vs'>" +
						"<p><strong>VS</strong></p>" +
					    "</div>" +
					    "<div class='away_team'>" +
						"<p><strong>" + data[i].p2 + "</strong></p>" +
					    "</div>" +
				        "</div>" +
			            "</div>" +
			            "<div class='bottom_of_box'>" +
				        "<div class='bottom_left'>" +
					    "<p><strong>" + "#" + data[i].league + "</strong></p>" +
				        "</div>" +
				        "<div class='bottom_right'>" +
					    "<div class='home_odds'>" +
						"<p><strong>" + data[i].w1 + "</strong></p>" +
					    "</div>" +
					    "<div class='draw_odds'>" +
						"<p><strong>" + data[i].x + "</strong></p>" +
					    "</div>" +
					    "<div class='away_odds'>" +
						"<p><strong>" + data[i].w2 + "</strong></p>" +
					    "</div>" +
				        "</div>" +
			            "</div>" +
		                "</div>" +
                        "</div>"
        }
	// For every loop, it will insert the HTML into the <div> tag with an id="data"
    document.getElementById("data").innerHTML = output;
    }
};

// The js.js file is receiving the data from the data.json file which is just hardcoded data. However, if you would like this to receive data from a feed, simply copy and paste the whole url into the below code by replacing data.json.
xhttp.open("GET", "data.json", true);
xhttp.send();