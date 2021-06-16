import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/jobads"}>
            <Icon name="list" />
            Job Adverts        
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"}>
            <Icon name="factory" />
            Employers       
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidateList"}>
          <Icon name="user" />
          Candidates
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"}>
          <Icon name="wordpress forms" />
          Cvs
        </Menu.Item>
      </Menu>
    </div>
  );
}