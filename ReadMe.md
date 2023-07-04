## Important to understand and keep note off

If you have to load your sketch asynchronously (to be started long after P5.js has loaded and looked for an existing sketch itself), you will have to add the following lines in order to start the sketch in "global mode"

>window.setup = setup;
>window.draw  = draw;
>new p5();

window is the global variable which P5 fills with all its functions in order to provide the "global mode" environment.

setup and draw are those user-defined functions, P5 will invoke in order to run your sketch. They must be globally available before new p5() is run - either because they have been defined as such or because you made them global explicitly (as shown in my example).

The latter allows you to define these two functions in a local environment (e.g. an IIFE) together with any other methods you need (and which you do not want to pollute the global namespace with) and still get rid of the nasty target object prefix (e.g. p5.xxx) in front of all P5 methods and properties.

This "solution" is more of a "hack" rather than a real "answer" (as it is undocumented and exploits behavior which might change in the future) but it helped me loading external scripts into an already loaded web page running P5 without having to tell those sketches that they will be executed in "local mode" (as a sketch should never need to know the mode it will be run in)