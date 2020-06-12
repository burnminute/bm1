import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./home";
// import Navbar from "./components/navbar.component";
import { ExerciseListView } from "./exercise-list";
import { ExerciseDetailsView } from "./exercise-details";
import { Home } from "./home";
// import { UserDetails } from "./user-details";

export const ViewRouter = () => {
	return (
		<Router>
			<Switch>
				{/* <Route path="/"> */}
				{/* <Home /> */}
				{/* </Route> */}
				<Route path="/" exact component={Home} />
				<Route path="/exercises" exact component={ExerciseListView} />
				<Route path="/create" component={ExerciseDetailsView} />
				<Route path="/edit/:id" component={ExerciseDetailsView} />
				{/* <Route path="/user" component={UserDetails} /> */}
			</Switch>
		</Router>
	);
};
