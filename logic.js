/*
    Ternary Switch and Logic Practice

    Today you are working on your Smart Home!  
    Your smart home has many lights that are controllable, and you can use JavaScript
    to control them.

    Complete the Following Exercises.
*/

/* ------------------------------------------------
    Exercise One 

    Choosing a color for a light.  

    Given a number, decide which color should be returned.

    Complete the following ternary statement.
    If the number is > 10, return "blue"
    otherwise return "red";
*/
function getColor(number) {
  return number > 10 ? "blue" : "red";
} /* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/

/* ( Your code Here ) ?  Your code Here  :  Your code Here */ console.log(
  "-----Tests for Exercise One-----"
);
console.log("* Check for 15");
console.log(getColor(15) === "blue");
console.log("* Check for 5");
console.log(getColor(5) === "red");
console.log("* Check for 10");
console.log(getColor(10) === "red");

/* ------------------------------------------------
    Exercise Two

    A controllable lightbulb has a brightness which is a numeric value between 0 and 255.
    You need to create a function which returns a string which summarizes the status of the lightbulb.

    Complete the following function using if statements.

    If the brightness is zero, return "off"
    otherwise if the brightness is greater than zero but less that 200, return "dimmed"
    if the brightness is greater than or equal to 200, then return "on"
*/
function lightStatus(brightness) {
  if (brightness === 0) {
    return "off";
  } else if (brightness > 0 && brightness < 200) {
    return "dimmed";
  } else if (brightness >= 200) {
    return "on";
  }
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
console.log("* Check for 0");
console.log(lightStatus(0) === "off");
console.log("* Check for 85");
console.log(lightStatus(85) === "dimmed");
console.log("* Check for 200");
console.log(lightStatus(200) === "on");
console.log("* Check for 255");
console.log(lightStatus(255) === "on");

/* ------------------------------------------------
    Exercise Three

    Given a lightbulb's status, create a switch statement which returns 
    a nicely formatted user readable string.

    A lightbulb can have any of the following statuses:
    "on", "off", "dimmed", "offline", "deleted", "missing", "broken" 

    If the lightbulb is on, return "The house is bright!"
    If the lightbulb is dimmed, return "The house is nice and dim"
    If the lightbulb is deleted, return "The lightbulb has been removed from the system"
    If the lightbulb is off, return "The house is dark"
    If the lightbulb is broken, return "The house is dark and we can't turn the light on!"
    If the lightbulb is offline or missing, return "The house is dark and we can't find the lightbulb!"
    If the lightbulb is any other value, then return "Something is wrong!"
*/

function getLightBulbStatusDisplayString(status) {
  let result = [
    "on",
    "off",
    "dimmed",
    "offline",
    "deleted",
    "missing",
    "broken",
  ];
  if (status === "on") {
    return "The house is bright!";
  } else if (status === "dimmed") {
    return "The house is nice and dim";
  } else if (status === "off") {
    return "The house is dark";
  } else if (status === "offline") {
    return "The house is dark and we can't find the lightbulb!";
  } else if (status === "deleted") {
    return "The lightbulb has been removed from the system";
  } else if (status === "missing") {
    return "The house is dark and we can't find the lightbulb!";
  } else if (status === "broken") {
    return "The house is dark and we can't turn the light on!";
  } else if (status === "") {
    return "Something is wrong!";
  } else if (status === 5) {
    return "Something is wrong!";
  } else if (status === false) {
    return "Something is wrong!";
  } else if (status === null) {
    return "Something is wrong!";
  }
  //   switch(status) {
  //     case "on":
  //       return "The house is bright!";
  //       break;
  //     case "off":
  //       alert("The house is dark");
  //       break;
  //     case "dimmed":
  //       alert("The house is nice and dim");
  //       break;
  //     case "offline":
  //     case "missing":
  //       alert("The house is dark and we can't find the lightbulb!");
  //       break;
  //     case "deleted":
  //       alert("The lightbulb has been removed from the system");
  //       break;
  //     case "broken":
  //       alert("The house is dark and we can't turn the light on!");
  //       break;
  //     case "":
  //     case 5:
  //     case null:
  //     case false:
  //     default:
  //       alert("Something is wrong!");
  //       break;
  //   }
  // }
  /* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
  console.log("-----Tests for Exercise Three-----");
  console.log("* Check for on");
  console.log(getLightBulbStatusDisplayString("on") === "The house is bright!");
  console.log("* Check for off");
  console.log(getLightBulbStatusDisplayString("off") === "The house is dark");
  console.log("* Check for dimmed");
  console.log(
    getLightBulbStatusDisplayString("dimmed") === "The house is nice and dim"
  );
  console.log("* Check for offline");
  console.log(
    getLightBulbStatusDisplayString("offline") ===
      "The house is dark and we can't find the lightbulb!"
  );
  console.log("* Check for missing");
  console.log(
    getLightBulbStatusDisplayString("missing") ===
      "The house is dark and we can't find the lightbulb!"
  );
  console.log("* Check for deleted");
  console.log(
    getLightBulbStatusDisplayString("deleted") ===
      "The lightbulb has been removed from the system"
  );
  console.log("* Check for broken");
  console.log(
    getLightBulbStatusDisplayString("broken") ===
      "The house is dark and we can't turn the light on!"
  );
  console.log("* Check for empty string");
  console.log(getLightBulbStatusDisplayString("") === "Something is wrong!");
  console.log("* Check for 5");
  console.log(getLightBulbStatusDisplayString(5) === "Something is wrong!");
  console.log("* Check for false");
  console.log(getLightBulbStatusDisplayString(false) === "Something is wrong!");
  console.log("* Check for null");
  console.log(getLightBulbStatusDisplayString(null) === "Something is wrong!");

  /* ------------------------------------------------
    Exercise Four

    Now you need to write the logic for the entire home to control the lights.

    You have the following Lightbulbs in the house:

    livingRoomLight
    diningRoomLight
    kitchenLight
    frontPorchLight
    bedroomLight

    Your home tells you the following conditions:

    somebodyIsHome
    theyAreWatchingTV
    itIsDarkOutside
    theyAreCooking
    theyWentToBed

    They are all booleans.


    Implement this logic

    If it's dark out, the porch light should be on.  If it's not dark, then it's off.
    If nobody home, then turn all the lights off (except the porch light). 
    If someone is home but they haven't gone to bed, then the living room and dining room lights should be on.
    if someone is cooking, then the kitchen light should be on.
    However, if they are watching TV, then turn off the livingroom and dining room lights.
    If they are in bed, then the bedroom light should be on.
*/

  /*
   -------START OF GIVEN CODE - DO NOT EDIT ------------------------------------
   But do read through through this code.  Try to understand what it's doing.
*/

  let currentLights = {};
  function resetLights() {}

  function turnOnLight(lightName) {
    // This turns on a light.
  }

  function turnOffLight(lightName) {
    // This turns off a light.
  }
  /*
   -------END OF GIVEN CODE - DO NOT EDIT ------------------------------------
*/

  /* 
   -------YOUR CODE-----------------------------------------------------------
*/
  function updateLights(
    somebodyIsHome,
    theyAreWatchingTV,
    itIsDarkOutside,
    theyAreCooking,
    theyWentToBed
  ) {
    if (somebodyIsHome && theyWentToBed) {
      turnOnLight(currentLights.bedroomLight);
      turnOffLight(currentLights.diningRoomLight);
      turnOffLight(currentLights.livingRoomLight);
      turnOffLight(currentLights.kitchenLight);
    }
    if (somebodyIsHome && theyWentToBed === false) {
      turnOnLight(currentLights.livingRoomLight);
      turnOnLight(currentLights.diningRoomLight);
    }
    if (itIsDarkOutside) {
      turnOnLight(currentLights.frontPorchLight);
    }
    if (itIsDarkOutside === false) {
      turnOnLight(currentLights.frontPorchLight);
    }
    if (somebodyIsHome === false) {
      turnOffLight(currentLights.bedroomLight);
      turnOffLight(currentLights.diningRoomLight);
      turnOffLight(currentLights.kitchenLight);
    }
  }

  // If someone is home but they haven't gone to bed, then the living room and dining room lights should be on.
  /* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
  console.log("-----Tests for Exercise Four-----");

  console.log("* Check if they are all off.");
  resetLights();
  updateLights(false, false, false, false, false);
  console.log(
    currentLights.livingRoomLight == "off" &&
      currentLights.diningRoomLight == "off" &&
      currentLights.kitchenLight == "off" &&
      currentLights.frontPorchLight == "off" &&
      currentLights.bedroomLight == "off"
  );

  console.log("* Check that the porch light turns on at night.");
  resetLights();
  updateLights(false, false, true, false, false);
  console.log(
    currentLights.livingRoomLight == "off" &&
      currentLights.diningRoomLight == "off" &&
      currentLights.kitchenLight == "off" &&
      currentLights.frontPorchLight == "on" &&
      currentLights.bedroomLight == "off"
  );

  console.log("* Check when somebody is home");
  resetLights();
  updateLights(true, false, true, false, false);
  console.log(
    currentLights.livingRoomLight == "on" &&
      currentLights.diningRoomLight == "on" &&
      currentLights.kitchenLight == "off" &&
      currentLights.frontPorchLight == "on" &&
      currentLights.bedroomLight == "off"
  );

  console.log("* Check when they are cooking");
  resetLights();
  updateLights(true, false, true, true, false);
  console.log(
    currentLights.livingRoomLight == "on" &&
      currentLights.diningRoomLight == "on" &&
      currentLights.kitchenLight == "on" &&
      currentLights.frontPorchLight == "on" &&
      currentLights.bedroomLight == "off"
  );

  console.log("* Check when they are watching TV");
  resetLights();
  updateLights(true, true, true, false, false);
  console.log(
    currentLights.livingRoomLight == "off" &&
      currentLights.diningRoomLight == "off" &&
      currentLights.kitchenLight == "off" &&
      currentLights.frontPorchLight == "on" &&
      currentLights.bedroomLight == "off"
  );

  console.log("* Check when they are in bed");
  resetLights();
  updateLights(true, false, true, false, true);
  console.log(
    currentLights.livingRoomLight == "off" &&
      currentLights.diningRoomLight == "off" &&
      currentLights.kitchenLight == "off" &&
      currentLights.frontPorchLight == "on" &&
      currentLights.bedroomLight == "on"
  );
}
