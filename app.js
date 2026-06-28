if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingRoutes = require("./routes/listing");
const reviewRoutes = require("./routes/review");
const userRoutes = require("./routes/user");
const bookingRoutes = require("./routes/booking");
const messageRoutes = require("./routes/message");
const hostRoutes = require("./routes/host");
const wishlistRoutes = require("./routes/wishlist");

const dbUrl = process.env.ATLASDB_URL;


mongoose.set("strictQuery", false);

app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });



async function main() {
  await mongoose.connect(dbUrl, {
    tls: true,
    tlsAllowInvalidCertificates: false,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  });
}

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "thisshouldbeabettersecret!",
  },
  tls: true,
  tlsAllowInvalidCertificates: false,
});




const sessionOption = {
  store,
  name: "session",
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};



app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get('/dashboard', (req, res) => {
    // Ensure 'currentUser' is available (e.g., from middleware or session)
    // If currentUser is undefined, you might need to check your auth middleware
    const currentUser = req.user || null;

    // Pass currentUser to the layout
    res.render('layouts/boilerplate', { 
        currentUser: currentUser 
    });
});

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/", listingRoutes);
app.use("/", reviewRoutes);
app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", messageRoutes);
app.use("/", hostRoutes);
app.use("/", wishlistRoutes);

app.use((req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err;
  res.render("error", { status, message });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`server is listening to port : ${PORT}`);
});
