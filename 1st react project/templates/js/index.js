

function Footer(){
    return(
        <footer className="footer container">
            <small>© 2022 Heck Development. All rights reserved</small>
        </footer>
    )
}

function Header(){
    return(
        <header className="header container">
            <nav className="nav">
                <img className="react-logo" src="images/react-1-logo-svg-vector.svg"></img>
                
                <ul className="nav-items">
                    <li><span>I</span></li>
                    <li><span className="red-span-text">L</span><span>o</span><span className="red-span-text">v</span><span>e</span></li>
                    <li><span>P</span><span className="red-span-text">r</span><span>o</span><span className="red-span-text">g</span><span>r</span><span className="red-span-text">a</span><span>m</span><span className="red-span-text">m</span><span>i</span><span className="red-span-text">n</span><span>g</span></li> 
                </ul>
            </nav>
        </header>
    )
    

}

function MainContent(){
    return(
        <div className="main-content container">
            <h1>Reasons I want to learn <span>React</span></h1>
            <ol>
                <li>I want to learn <span>React</span> to become a better <span>Developer</span></li>
                <li>Learning <span>React</span> will also teach me a how to code a in javascript</li>
                <li>I want to learn <span>React</span> because I am extremely passionate about building software, and love Learning new technologies</li>
                <li>it's a widely used Hireable Skill</li>
            </ol>
        </div>
        
    )
}

function Page(){
    return(
        <div className="root container ">
            <MainContent/>  
        </div>
    )
}// 1. What is a React Component?
// A React Component is Independ and Reuseable bits of code. They serve the same purpose as Javascript Functions, but work in isolation
// Components come in two types. Class Component and Function components.
// They are turned into React elements when compiling JSX (JavaScript XML), which allows us to write HTML in React

/*
 2.What's wrong with this code?

 function myComponent(){
    return(
        <small>I'm tiny text!</small>
    )

    #This is not wraped in a parent element
    #Also every word in the function needs to start with a Capital letter
}


3. What's wrong with this code?
    function Header(){
        return (
            <header>
                <nav>
                    <img src="imgaes/react-1-logo.png" width="40px"></img>
                </nav> 
            </header>

        )
}

# 

ReactDOM.render(Header(), document.getElementById("root"))
#passed the function incorrectly. It needs to be like this <Header/>, surround it in angle brackets as if they were html tags

*/
    


ReactDOM.render(<Header/>, document.getElementById("header"))
ReactDOM.render(<Page/>, document.getElementById("root"))
ReactDOM.render(<Footer/>, document.getElementById("footer"))