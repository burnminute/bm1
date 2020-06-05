import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./home";
// import Navbar from "./components/navbar.component";
import { ExerciseList } from "./exercise-list";
import { ExerciseDetails } from "./exercise-details";
// import { UserDetails } from "./user-details";

export const ViewRouter = () => {
	return (
		<Router>
			<Switch>
				{/* <Route path="/"> */}
				{/* <Home /> */}
				{/* </Route> */}
				<Route path="/" exact component={ExerciseList} />
				<Route path="/create" component={ExerciseDetails} />
				<Route path="/edit/:id" component={ExerciseDetails} />
				{/* <Route path="/user" component={UserDetails} /> */}
			</Switch>
		</Router>
	);
};
