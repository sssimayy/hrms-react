import React from "react";
import CandidateList from "../pages/CandidateList";
import Categories from "./Categories";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import CandidateDetail from "../pages/CandidateDetail"
import Cvs from "../pages/Cvs"
import CvDetail from "../pages/CvDetail"
import './Dashboard.css';
import JobAds from "../pages/JobAds"
import Employers from "../pages/Employers"
import EmployerDetail from "../pages/EmployerDetail";
import HomePage from "../pages/HomePage";
import JobAdDetail from "../pages/JobAdDetail";
import JobAdCreate from "../pages/JobAdCreate";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/cvs" component={Cvs}/>
            <Route exact path="/cvs/:id" component={CvDetail}/>
            <Route exact path="/candidates" component={CandidateList}/>
            <Route exact path="/candidates/:id" component={CandidateDetail}/>
            <Route exact path="/employers" component={Employers}/>
            <Route exact path="/employers/:id" component={EmployerDetail}/>
            <Route exact path="/jobads" component={JobAds}/>
            <Route exact path="/jobads/:id" component={JobAdDetail}/>
            <Route exact path="/candidateList" component={CandidateList}/>
            <Route exact path="/cvDetail/:id" component={CvDetail}/>
            <Route exact path="/jobAdCreate" component={JobAdCreate}/>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}