import React, {Component } from 'react';
import classes from './Incident.css';
import { connect } from 'react-redux';
import Navbar from '../../navbar/Navbar';
import SwitchNav from '../../navbar/switchNav/SwitchNav';
import { fetchRedflagIncident } from '../../../store/actions/incident/redflag-dispatchers';
import { withRouter } from 'react-router-dom';
import pic from '../../../assets/download.png';
import { Card } from 'semantic-ui-react';

class Redflag extends Component {

  componentDidMount() {
    this.props.fetchRedflagIncident()
  }
  render () {
  const redflagInfo = this.props.redflag.map(data => {
    return {
        image: {pic},
        header: data.location,
        description: data.comment,
        meta: data.createdon,
      }
    
  })

  return (
    <div className={classes.main}>
      <Navbar name="Profile" />
      <SwitchNav />
      <Card.Group items={redflagInfo} />
    </div>
  )
}
}


const mapStateToProps = state => ({
  redflag: state.redflag.redflag
})

export default connect(mapStateToProps, {fetchRedflagIncident})(withRouter(Redflag));