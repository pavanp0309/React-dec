Elements : it is a js object used is for building the ui
   let a= <h1>hello</h1>

Component : are js function or class which returns an element 
          it is reuseable block of code which is builing complex ui structure 

        1.Functional component
        2.class component



RULES TO CREATE THE FOLDER AND COMPONENT NAMES
FOLDER Names : small case 
FIle_name  of component : PascalCase  eg: MyComponent




JSX : Javascript xml Syntax 
    it is syntax extension for javascript 

without jsx: 
 React.createElement(h1,attributes,content)
with jsx 
  let h1=<h1>hello</h1>


RULES: 
🎯In JSX, expressions like variables or calculations must be written inside curly braces { }
   ex:{2+2} {true&&"hello"}
🎯We  cannot directly write if-else, loops, or declare functions inside the curly braces.but  JSX can be used inside conditional statements, loops, or functions.
🎯 {if(true){}} -wrongway  {for(let i=0;i<10;i++){}}

All  child elements in Jsx must be wrapped under a single parent element or fragments. 
All the html tags must be closed 
class-- className
for -- htmlFor
style=""---style={{color:"red"}}