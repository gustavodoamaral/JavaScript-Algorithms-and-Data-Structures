// Usar um mixin para adicionar comportamentos comuns entre objetos não relacionados

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function(){
    console.log("I'm gliding, woohooo!!")
  }
}

glideMixin(bird)
glideMixin(boat)