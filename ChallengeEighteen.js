// #18
//Instructions: Our first function, bestOdds(), will receive two parameters. The first parameter will be an array of strings that are either red, green, or blue, representing the tickets that a particular person has. The second parameter is an object that shows how many entries there currently are for each raffle. By looking at the tickets that the particular person has, your function should return a string that lets the person know which raffle they have the highest chance of winning. The format of the response should be as follows (without the square brackets): "You have the best odds of winning the [COLOUR] raffle."

// While we could do this all within the bestOdds() function, we want to keep our code DRY, so we will also need to complete a helper function. This helper function countTickets() will be called from within bestOdds() and receive the array of strings that are either red, green, or blue. The function will count how many of each string there are, and then return an object with the individual counts.  

const countTickets = (tickets) => {
    var count = new Object();
    count.red = 0;
    count.green = 0;
    count.blue = 0;

    for (var x = 0; x < tickets.length; ++x) {
        if (tickets[x] === 'red') {
            count.red += 1;
        } else if (tickets[x] === 'green') {
            count.green += 1;
        } else if (tickets[x] === 'blue') {
            count.blue += 1;
        }
    }

    return count;
}



const bestOdds = (tickets, raffleEntries) => {
    var counted = countTickets(tickets);

    var redOdds = counted.red / raffleEntries.red;
    var greenOdds = counted.green / raffleEntries.green;
    var blueOdds = counted.blue / raffleEntries.blue;

    if (redOdds > greenOdds && redOdds > blueOdds) {
        return "You have the best odds of winning the red raffle.";
    } else if (greenOdds > redOdds && greenOdds > blueOdds) {
        return "You have the best odds of winning the green raffle.";
    } else if (blueOdds > redOdds && blueOdds > greenOdds) {
        return "You have the best odds of winning the blue raffle.";
    }


}