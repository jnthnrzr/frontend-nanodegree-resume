/*
This is empty on purpose! Your code to build the resume will go here.
//  */
// $("#main").append(["Jonathan Rozario"])

var name = "Jonathan Rozario";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);