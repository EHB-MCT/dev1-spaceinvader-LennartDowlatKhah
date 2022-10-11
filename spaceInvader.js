"use strict";

 drawline();

function drawline(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //blacksquare
    context.fillStyle = "black"
    context.beginPath();
    context.rect(0,0,300,300);
    context.fill();

    //Spaceinvador
    context.fillStyle="#39FF14";
    context.beginPath();
    context.rect(75,25,50,50);
    context.rect(25,75,50,100);
    context.rect(75,125,50,100);
    context.rect(25,225,50,50);
    context.rect(125,75,50,50);
    context.rect(175,25,50,50);
    context.rect(225,75,50,100);
    context.rect(175,125,50,100);
    context.rect(225,225,50,50);
    context.fill();
}