import { Hero } from "./classes/Hero";
// import { Hero as SuperHero, Hero2  } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";

// we can put whatever name at import our file
// import powercito from './data/powers';

// const Hero = 123;

// const ironman = new SuperHero('Ironman', 5000, 45);
const ironman = new Hero('Ironman', 5000, 45);
console.log(ironman);
console.log(ironman.powerId);
