import { Button } from '@material-ui/core'
import React, { useState } from 'react';
import {storage,db} from './firebase';
import "./Igpost.css";

function Igpost({username}) {

	const [caption, setCaption] = useState("");

	const[image,setImage]=useState('');
	const[progess,setProgess]=useState(0);

	const handleChange=(e)=>{
		if(e.target.files[0]){
			setImage(e.target.files[0]);
		}
	}
	const handleUpload=()=>{

		const uploadTask=storage.ref(`images/${image.name}`).put(image);

		uploadTask.on(
			"state_changed",
			(snapshot)=>
			{
				// set progess

				const progess=Math.round(
					(snapshot.bytesTransferred/snapshot.totalBytes)*100

				);
				console.log(progess);
				setProgess(progess);
			},
			(error)=>{
				// error function

				console.log(error);
				alert(error.message);
			},
			()=>
			{
				// compelete function
				storage.ref("images").child(image.name).getDownloadURL().then(url=>{
					// upload the images
					db.collection("post").add({
						caption: caption,
						imageUrl:url,
						username:username
					})
					.then(function(docRef) {
						console.log("Document written with ID: ", docRef.id);
					})
					.catch(function(error) {
						console.error("Error adding document: ", error);
					});

					setProgess(0);
					setCaption("null");
					setImage();
				});
			}

		);

	};
	return (
		<div className="imageUploader">
		<h1>abc</h1>
		<progress className="imageuploader_progess" value={progess} max="100"/>
		<input type="text" placeholder="enter a caption" onChange={event=>setCaption(event.target.value)} value={caption}></input>
		<input type="file" onChange={handleChange}></input>
		<Button className="green" onClick={handleUpload}>Upload</Button>			
		</div>
	)
}

export default Igpost;
