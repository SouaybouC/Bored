import  React  from  "react";
// Context has been created
const  ThemeContext  =  React.createContext(false);
// Provider
const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  =  React.useState(false);
    const toggleFunction =  ()  =>  {
    setToggle(!toggle);
};
document.body.style.backgroundColor = toggle ? "#1a1a1c" : "white";
return  (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };