import React, { Component } from 'react';
import { Table, Statistic } from 'semantic-ui-react';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';

class UserDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SwitchNav />
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Faves</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>31,200</Statistic.Value>
            <Statistic.Label>Views</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Members</Statistic.Label>
          </Statistic>
        </Statistic.Group>


    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row active>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Selected</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell active>Jill</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
      </div>
    )
  }
}

export default UserDashboard
