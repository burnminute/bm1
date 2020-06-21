import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AccountView } from "./account";
import { ExerciseListView } from "./exercise-list";
import { ExerciseDetailsView } from "./exercise-details";
import { UserDetailsView } from "./user-details";
import { ExerciseDetailsViewEdit } from "./exercise-details/edit";
import { HomeView } from "./home";

export const ViewRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomeView} />
				<Route path="/account" exact component={AccountView} />
				<Route path="/users/:id" exact component={UserDetailsView} />
				<Route path="/exercises" exact component={ExerciseListView} />
				<Route path="/exercises/:id" exact component={ExerciseDetailsView} />
				<Route
					path="/exercises/:id/edit/"
					component={ExerciseDetailsViewEdit}
				/>
				<Route path="/exercises/create" component={ExerciseDetailsViewEdit} />
				{/* <Route path="/user" component={UserDetails} /> */}
			</Switch>
		</Router>
	);
};
