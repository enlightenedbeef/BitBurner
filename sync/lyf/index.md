# Learn you some JavaScript for fun

A tutorial on learning to program in JavaScript. We will use the game Bitburner as a vehicle for learning. The game is available [online](https://bitburner-official.github.io/) and through [Steam](https://store.steampowered.com/app/1812820/Bitburner/) .

[[TOC]]

<!--  Content  -->

## Hello, world

   This tutorial will help you learn computer programming. We will use JavaScript as the programming language and the game Bitburner as the learning environment. Why JavaScript? Why not Python? Or C, C++, Java, Ruby, or some other language? I find JavaScript to be reasonably easy to learn. Python is also easy to learn. However, I have not been able to find a programming game that encourages its players to write, say, Python or Ruby code. Let me know if you encounter such a game for Python or Ruby or another language. The game [ByteLegend](https://github.com/ByteLegend/ByteLegend) encourages its players to write Java code. If you prefer Java, give ByteLegend a go.

   Why Bitburner? The game encourages you to write JavaScript code, not in a programming language specifically designed for the game. Isn’t that the same purpose as [Screeps](https://store.steampowered.com/app/464350/Screeps_World/) and [Untrusted](https://alexnisnevich.github.io/untrusted/)? Yes. I have spent much more time with Bitburner than I have with Screeps or Untrusted. By all means use Screeps and/or Untrusted to learn JavaScript if you are so inclined. Bitburner offers plenty of challenges for novice and seasoned programmers. It is possible to write JavaScript programs that can automate the whole game for you. Any discussion about how to play Bitburner is incidental to our main goal: use the game to learn how to program in JavaScript.

### Bitburner

   Familiarize yourself with the Bitburner environment. Open the game in [Steam](https://store.steampowered.com/app/1812820/Bitburner/) or use the online version. You should see something similar to the left panel of the image below. The game places you at the in-game tutorial. Continue with the tutorial if you want. Otherwise click the button <kbd>SKIP TUTORIAL</kbd> and you should see something like the right panel of the image below. This is the terminal window of the game. The terminal window, abbreviated as terminal, is an area of the game that allows you to type in various commands to play the game. You know you are at the terminal because the <kbd>Terminal</kbd> tab is highlighted green. Spend some time exploring the other tabs. When you are done, click on the <kbd>Terminal</kbd> tab to return to the terminal. Note the Overview window at the top-right corner. Click on the arrow to minimize or maximize the window.

   <figure>
    <img src="https://raw.githubusercontent.com/quacksouls/lyf/main/assets/img/hello/interface.png" alt="Bitburner Interface">
    <figcaption>Bitburner Interface</figcaption>
   </figure>

   Exercise 3. The [online tutorial](https://github.com/bitburner-official/bitburner-src/blob/stable/src/Documentation/doc/help/getting_started.md) elaborates on the in-game tutorial. Work through the online tutorial for an in-depth introduction to Bitburner.

### Your first program

   When learning a programming language, the traditional first program you write is called the `Hello, world` program. At the terminal, type `nano hello.js` as shown in the left panel of the image below and press <kbd>Enter</kbd>. The command `nano` launches an editor in which you can write your JavaScript code. The argument `hello.js` given to `nano` tells the command to open the code editor and create a template file named `hello.js`. The command uses the file extension .js to figure out that you want to create a JavaScript program. The code editor is shown in the right panel of the image below. If you have not done so, explore other tabs and familiarize yourself with the game’s interface. When you are ready to code, click on the tab <kbd>Script Editor</kbd> (or press the key combination <kbd>Alt</kbd> + <kbd>e</kbd>) to return to the code editor.

   <figure>
      <img src="https://raw.githubusercontent.com/quacksouls/lyf/main/assets/img/hello/hello.png" alt="Hello, world!">
      <figcaption>Hello, World</figcaption>
   </figure>

   Copy and paste the following program into the code editor:

   [`hello.js`](https://github.com/quacksouls/lyf/blob/main/assets/src/hello/hello.js)

   ```js
   /** @param {NS} ns */
   export async function main(ns) {
      ns.tprint("Hello, world!");
   }
   ```
   Click on the button <kbd>Save</kbd> (or press the key combination <kbd>Ctrl</kbd> + <kbd>s</kbd>) to save the content of the script. Click on the <kbd>Terminal</kbd> tab (or press the key combination <kbd>Alt</kbd> + <kbd>t</kbd>) to return to the terminal. At the terminal, type the command run hello.js and press <kbd>Enter</kbd> to run your first JavaScript program. The result is shown in the following image. You should see the text Hello, world! printed to the terminal.

   <figure>
      <img src="https://raw.githubusercontent.com/quacksouls/lyf/main/assets/img/hello/run-hello.png" alt="Run, hello, run">
      <figcaption>Run, hello, run</figcaption>
   </figure>

#### Excercises

   **Exercise 1.** The terminal is the area of Bitburner that allows you to enter commands and run scripts. Read more about the terminal [here](https://github.com/bitburner-official/bitburner-src/blob/stable/src/Documentation/doc/basic/terminal.md).

   **Exercise 2.** The terminal accepts a number of commands. You have been using the command run. From the terminal, enter the command `help` to find out more about other commands you can enter from the terminal. Do not worry if you find the information incomprehensible.

   **Exercise 3.** The terminal command `help` allows you to find out more information about a command. You might not always remember how to use the command `run`. Execute the command `help` run at the terminal to refresh your memory.

   <!-- **Exercise 4.** Might I interest you in a feline companion? Why not `buy cat` from the comfort of your terminal?

   **Exercise 5.** What is that meowing you hear in the distance? Oh no, it is a tabby stuck in a cat flap. Feel free to `help cat` whenever you are ready. 
   
   These commands no longer exist in-game -->

### Any comments?

### The function main()

## Data, darta, dayta

### Pick a Number

### String me along

### Smooth operator

### Bool-urns

### Compare the pair

## Decision, decision

### I can't decide

###  So many choices

### Can you repeat that?

## Put that in a function

### I declare

### Bow and arrow

### First-class function

### Import and export

## Organise your data

### Line them up

### No duplicates

### Check the dictionary

## JSON and the Argonauts

### Objects and arguments

### Objects and I/O

### Class of its own

## Let's get functional

### filter

### map

### reduce

## Ooey Gooey

### Dialog box

### Am I pretty?

### CSS

### HTML and Javascript

### Exercises

## Wait, there's more

### Resources

### Algorithms & Functions

### Functional Programming

## Future Content Goes Here

### To be expanded upon.

## Old

