import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AccountView } from "./account";
import { ExerciseDetailsView } from "./exercise-details";
import { ExerciseDetailsViewEdit } from "./exercise-details/edit";
import { ExerciseListView } from "./exercise-list";
import { HomeView } from "./home";
import { UserDetailsView } from "./user-details";
import { UserDetailsViewEdit } from "./user-details/edit";

export const ViewRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomeView} />
				<Route path="/account" exact component={AccountView} />
				<Route path="/users/:id" exact component={UserDetailsView} />
				<Route path="/users/:id/edit/" component={UserDetailsViewEdit} />
				<Route path="/users/create" component={UserDetailsViewEdit} />
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
