(function () {

    //Initialize Firebase    
    const config = {
        apiKey: "AIzaSyBdaBaHIZ1lf5cRCD_XT2cWo-akLUATqUY",
        authDomain: "st-group-project.firebaseapp.com",
        databaseURL: "https://st-group-project.firebaseio.com",
        projectId: "st-group-project",
        storageBucket: "st-group-project.appspot.com",
        messagingSenderId: "265360412018"
    };
    firebase.initializeApp(config);

    // Get element
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');


    // Add login event
    btnLogin.addEventListener('click', e => {

        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        //Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    
    // Sign out      
    btnLogout.addEventListener('click', e => {
        firebase.auth().signout();
        
    });

    // Add signup event

    btnSignUp.addEventListener('click', e => {
        //Get email and pass
        //TODO: CHECK 4 REAL EMAIL
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        console.log(email);
        console.log(pass);

        //Sign In
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise

            .catch(e => console.log(e.message));
    });

    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');

        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    });   
}());