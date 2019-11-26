//This function allows the user to input their birth year.
function start(){
    var year = readInt("What year were you born? ");
    generationDetector (year);
}

/*This function detects what generation the user is depending
on their birth year.*/
function generationDetector (year){
    if (year <= 2019 && year >= 1997){
        println("You are Generation Z.");
        println("Enter another year to start again, or press '0' to stop.");
        start();
    }
    
    if (year <= 1996 && year >= 1981){
        println("You are a Millennial.");
        println("Enter another year to start again, or press '0' to stop.");
        start();
    }
    
    if (year <= 1980 && year >= 1965){
        println("You are Generation X.");
        println("Enter another year to start again, or press '0' to stop.");
        start();
    } 
    
    if (year <= 1964 && year >= 1946){
        println("You are a Boomer.");
        println("Enter another year to start again, or press '0' to stop.");
        start();
    }
    if (year <= 1945 && year >= 1928){
        println("You are Silent.");
        println("Enter another year to start again, or press '0' to stop.");
        start();
    }
    
    if (year < 1928 && year > 1 || year > 2019){
        println("Please enter a year between 1928 and 2019.");
        start();
    }
    
    if (year = 0){
    }
    
}
