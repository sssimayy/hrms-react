import React, { useState } from "react";
import Summary from "./Summary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Container,Button, Menu, Icon } from 'semantic-ui-react';

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item name="Home" as={Link} to={"/"}>
          <Icon name="home" />Ana Sayfa
          </Menu.Item>
          <Menu.Item name="Job Adverts" as={Link} to={"/jobads"} />
          <Menu.Item name="Cvs" as={Link} to={"/cvs"} />

          <Menu.Menu position="right">
          <Button primary as={Link} to={"/jobAdCreate"}>
              İlan Ekle
            </Button>
            <Summary />
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" />
              : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}