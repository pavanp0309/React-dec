STATE: its a js object which holds the Data or information
Data: it can be cart-icon-value ,it can be Likes ,it can be the value color(dark-lightmode),quantity of the Product

🎯state is mutable : we can change the value 
🎯State is local to a component and cannot be accessed by other components 🎯unless passed as props.
🎯state makes application interactive(Users can click buttons, input text, or 🎯perform actions )

To use state in functional component we use A hook called useState 


HOOKS: are nothing but javascript functions,it used for manging the satate and life-cycle method
Functions starting with use keyword are called Hooks.

Different TYpes Of hooks 

Basic Hooks :
🎯useState : managing the state in function component
🎯useEffect : used for managing the sideEffects (fetching the data ,
running the Timmers,events(scrolling ,cliking the button))
🎯useContext : used for managing the State globally (Data shared for all the Components)

Addvanced Hooks
1.useReducer :
2.useRef 
3.useCallback
4.useMemo
5.custom Hooks :



RULES OF WRITING THE HOOKS
1.call hooks only at the top of your functional component (inside function body) or custom hook 
  🛠 dont call Inside Class Componenents
  🛠dont call Outside Functional component (After retun statement or before function decalation)
   🛠dont call inside Conditional Statements ,loops ,js function
2.Call Hooks in the Same Order 


1.useState : it lets u to add state variable To a functional component
 it is js function which returns array 2 values 1 current state 2.seterFunction

let [data,setData]=useState(paramter)
let [count,setCount]=useState(initialvalue) 
values can be Any primitive or non-primitive Datatypes
it returns array of two value