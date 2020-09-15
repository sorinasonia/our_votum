import React from "react";
import './Home.css';

class Home extends React.Component{

    constructor(props){
      super(props)
    }

    text() {
      return <div className ="random_text" >
            <p> Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other 
                "longest texts ever" on the internet, and I wanted to make my own. So here it is! This
                is going to be a WORLD RECORD! This is actually my third attempt at doing this. The first 
                time, I didn't save it. The second time, the Neocities editor crashed. Now I'm writing this in
                Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities 
                editor to avoid crashing. It sucks that my past two attempts are gone now. Those actually got pretty
                long. Not the longest, but still pretty long. I hope this one won't get lost somehow. Anyways, 
                let's talk about WAFFLES! I like waffles. Waffles are cool. Waffles is a funny word. There's a Teen
                Titans Go episode called "Waffles" where the word "Waffles" is said a hundred-something times. It's 
            </p>   
             
      </div>
    }

    render(){
      return (
        <div className = "home" >
             
                 <this.text/> 

        </div>
      );
    }
  
  
} 
  
  export default Home;
