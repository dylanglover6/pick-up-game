(function () {

    //Initialize Firebase    
   

    // Get element
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');



    // Add login event
    btnLogin.addEventListener('click', e => {

        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        //Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

        //redirect to next page
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                window.location.href = 'index.html'
                
    
            } else {
                console.log('not logged in');
               
            }
        });  
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

        //redirect to next page
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                window.location.href = 'index.html'
                
    
            } else {
                console.log('not logged in');
               
            }
        });  
    });

    //Add a realtime listener
      
}());