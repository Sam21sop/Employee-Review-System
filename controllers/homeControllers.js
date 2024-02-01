
export const homeController = (req, res) =>{
    res.status(200).render('home')
}


export const employeeSignupForm = (req, res) => {
    res.status(200).render('registered')
}


export const employeeLoginForm = (req, res) => {
    res.status(200).render('login')
}

// server.get('/', (req, res)=>{
//     res.render('home')
// });

// // Login page route
// server.get('/login', (req, res) => {
//     res.render('login');
// });

// // Handle login form submission
// server.post('/login', (req, res) => {
//     // Handle login logic here
//     res.redirect('/'); // Redirect to home page for now
// });

// // Signup page route
// server.get('/signup', (req, res) => {
//     res.render('signup');
// });

// // Handle signup form submission
// server.post('/signup', (req, res) => {
//     // Handle signup logic here
//     res.redirect('/'); // Redirect to home page for now
// });