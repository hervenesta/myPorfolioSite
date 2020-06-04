import React, { Component } from 'react';
import fire from './fire';

class GetInTouch extends Component {
    state = {
        name:"",
        email:"",
        message:""
    }

    onEmailChange = (event) =>{
        event.preventDefault();
        this.setState({email:event.target.value})
    }
    onNamechange = (event) =>{
        event.preventDefault();
        this.setState({name:event.target.value})
    }
    onMessagechange = (event) =>{
        event.preventDefault();
        this.setState({message:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, message} = this.state;

        // var firebaseConfig = {
        //     apiKey: "AIzaSyBmFj9DU-xu4w0kTOsPIP6WVSJAk8z8RaY",
        //     authDomain: "myportfoliowebsite-6ca3d.firebaseapp.com",
        //     databaseURL: "https://myportfoliowebsite-6ca3d.firebaseio.com",
        //     projectId: "myportfoliowebsite-6ca3d",
        //     storageBucket: "myportfoliowebsite-6ca3d.appspot.com",
        //     messagingSenderId: "764577207748",
        //     appId: "1:764577207748:web:89e09b47d564bb938d4091",
        //     measurementId: "G-311X207L5N"
        //   };
          // Initialize Firebase
        //   firebase.initializeApp(firebaseConfig);
        //   firebase.analytics();
        //   console.log(firebase);
        let database = fire.database();
        let ref = database.ref('contact');

        let data = {
            name,
            email,
            message
        }
        ref.push(data)
            .then(resp => {
                alert('message successfully sent')
                this.resetField()
            })
            .catch(e => {
                alert("an error has occured")
                this.resetField();
            })
        console.log(data);
    }

    resetField = () => {
        document.getElementById("reset-fields").reset();
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Get in Touch</h2>
                    <form onSubmit={this.handleSubmit} id="reset-fields">
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
                            <div style={{display: 'flex',flexDirection:'column', marginRight:'20px'}}>
                                <label style={{margin: '10px', fontSize:'30px'}}>Name</label>
                                <input style={{width: '300px',height:'40px', fontSize:'20px'}} type="text" onChange={this.onNamechange}></input>
                            </div>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <label style={{margin: '10px', fontSize:'30px'}}>Email</label>
                                <input style={{width: '300px',height:'40px', fontSize:'20px'}} type="email"  onChange={this.onEmailChange}></input>
                            </div>
                        </div>
                        <div style={{marginBottom: '20px', display:'flex',flexDirection:'column', marginLeft:'400px'}}>
                            <label style={{margin: '10px', fontSize:'30px'}}>Message</label>
                            <textarea style={{width:'61%', fontSize:'20px'}} rows="10" cols="80" onChange={this.onMessagechange}></textarea>
                        </div>
                        <button type="submit" style={{marginLeft:'700px', marginBottom:'20px', fontSize:'30px'}}>submit</button>
                    </form>
            </div>
        )
    }
}

export default GetInTouch;
