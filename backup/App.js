import { Button, makeStyles, Modal } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./App.css";
import { auth, db } from './firebase';
import Igpost from './Igpost';
import Post from "./Post";
import InstagramEmbed from 'react-instagram-embed';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes=useStyles();
  const [posts, setPost] = useState([]);
  const[open,setOpen]=useState(false);
  const[modelstyle]=useState(getModalStyle);
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[user,setUser]=useState();
  const[OpenSignIn,setOpenSignIn]=useState();
  
  const[username,setUserName]=useState();


  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser)
        setUser(authUser);


        if(authUser.displayname){

        }
        else{
           return authUser.updateProfile({
            displayname:username

           })
           
        }

      }
      else{
          setUser(null);
      }
    })
    return()=>{
      unsubscribe();
    }
  },[user,username]);
    useEffect(() => {
      db.collection('post').onSnapshot(snapshot=>{
        setPost(snapshot.docs.map(doc=>({
          id:doc.id,
          post:doc.data()
        })));
      });   
    },[]);


    const signUp=(event)=>{
      event.preventDefault();

      auth.createUserWithEmailAndPassword(email,password)
      .then((authUser)=>{
        return authUser.user.updateProfile({
          displayName:username
        })
      })
      .catch((error)=>alert(error.message));

    };
    const signIn=(event)=>{

      event.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .catch((error)=>alert(error.message));
    setOpenSignIn(false);
    }

  return (
    <div className="app">
  
   
    
     <Modal open={open} onClose={()=>setOpen(false)}>
    <div style={modelstyle} className={classes.paper}>
    <form className="app_form">
    <center>
    <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    alt=""/>
    </center>
    <input 
    placeholder="username"
    type="text"
    value={username}
    onChange={(e)=>setUserName(e.target.value)}></input>
    
      <input 
      placeholder="email"
      type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}></input>
      <input 
      placeholder="password"
      type="text"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}></input>
      <Button onClick={signUp}>SignUp</Button>
      </form>
      
    </div>
      </Modal>

      <Modal open={OpenSignIn} onClose={()=>setOpenSignIn(false)}>
      <div style={modelstyle} className={classes.paper}>
      <form className="app_form">
      <center>
      <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt=""/>
      </center>
      
        <input 
        placeholder="email"
        type="text"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}></input>
        <input 
        placeholder="password"
        type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}></input>
        <Button onClick={signIn}>SignIn</Button>
        </form>
        
      </div>
        </Modal>
    <div className="app_header">
    <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    alt=""/>
    
    {user?(<Button onClick={()=>auth.signOut()}>Logout</Button>):(
      <div className="app_loginconatiner">
      <Button onClick={()=>setOpenSignIn(true)}>SignIn</Button>
    <Button onClick={()=>setOpen(true)}>SignUp</Button>
  </div>)
}
</div>
    {/*post */}
    <div className="app_posts">
    <div className="app_postsleft">
    {
      posts.map(({id,post})=>(
        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
    ))
    }
    </div>
    <div className="app_postright">
    
    <InstagramEmbed
    url="https://www.instagram.com/p/BtDOEgPHnwD/"
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div>

     
</div>
    {user?.displayName?( <Igpost username={user.displayName}/>)
    :(
      <h1> you are not logged in</h1>
    )}
    </div>
  )
}

export default App;
