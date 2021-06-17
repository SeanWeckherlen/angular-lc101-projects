import { Component, OnInit } from '@angular/core';

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots
var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();




@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  missionName = "LaunchCode Moonshot"


  candidates = [
    { name: 'Rusty Rutabaga', data: { age: 5, mass: '0.75 kg', sidekick: 'Blake' }, image: 'assets/images/Blake.png' },
    { name: 'Tessa Tortoise', data: { age: 126, mass: '113 kg', sidekick: 'Sally' }, image: 'assets/images/Sally.png' },
    { name: 'Bernie Beagle', data: { age: 4, mass: '15 kg', sidekick: 'Paul' }, image: 'assets/images/Paul.png' },
    { name: 'Jackalope', data: { age: 45, mass: '33 kg', sidekick: 'Chris' }, image: 'assets/images/Chris.png' },
    { name: 'Champ', data: { age: 9, mass: '36 kg', sidekick: 'Carly' }, image: 'assets/images/Carly.png' },
    { name: 'Maddie', data: { age: 13, mass: '500000 kg', sidekick: 'Gia' }, image: 'https://cdn.shopify.com/s/files/1/1133/5028/files/Boston_Terrier_1904x1200_9eb02232-be2b-4924-9744-7a8353361592.jpg?v=1598041195' }
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }

  // Code the addToCrew function here:
  addToCrew(person: object) {
    // if a the person isnt in the crew .. push into the crew. used (!).
    if (!this.crew.includes(person)) {
      this.crew.push(person);
    }

  }

  // BONUS: Code the changeMissionName function here:
  changeMissionName(name: string) {
    this.missionName = name;
  }

}
