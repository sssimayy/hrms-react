import React from 'react'
import { Dropdown } from "semantic-ui-react";
export default function Summary() {
    return (
        <div>
            <Dropdown item text="Highlights">
              <Dropdown.Menu>
                <Dropdown.Item>Öncelikli Cvler</Dropdown.Item>
                <Dropdown.Item>Yedekler</Dropdown.Item>
                <Dropdown.Item>Diğer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}