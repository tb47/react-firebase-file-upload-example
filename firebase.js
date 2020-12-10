import app from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    my firebaseConfig - data ...
  };

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.storage();
  };
};

export default new Firebase();
