import React, { Component } from "react";
import Firebase from "./firebase";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
    };
    this.setFileState = this.setFileState.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  setFileState = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };
  fileUpload = (e) => {
    e.preventDefault();
    // if no file is selected
    if (!this.state.file) {
      console.log("please select a file");
    } else {
      // send file to the database
      const storageRef = Firebase.db.ref('fileupload/' + this.state.file.name);
      storageRef.put(this.state.file);
      storageRef.getMetadata().then(res => {
        document.getElementById('fileDiv').innerText = 'fileName: ' + res.name + ', fileSize: ' + res.size + "b" 
      })
    }
  };
  render() {
    return (
      <div id="fileDiv">
        <form>
          <label>
            <input type="file" name="file" onChange={this.setFileState} />
          </label>
          <br />
          <input type="submit" value="Submit" onClick={this.fileUpload} />
        </form>
      </div>
    );
  }
}

export default Upload;
