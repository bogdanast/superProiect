import { createContainer } from 'meteor/react-meteor-data';
import Donuts from '/imports/api/donuts/collection.js'
import React from 'react'
import Login from '/imports/ui/Login'

class Home extends React.Component {
    render() {
        const {loading, donuts} = this.props;
        console.log('loading este '+loading);
        console.log(donuts);
        if (loading) {
            return <div>Waiting for the method</div>
        }

        return (
            <div>
                {
                    donuts.map(donut => {
                        return <div key={donut._id}>{donut._id}</div>
                    })
                }
                <Login />
            </div>
        )
    }
}
export default createContainer((props) => {
    const handle = Meteor.subscribe('donuts');
    // reactive data sources will get tracked here
    // any change will result into a re-render of "Home" component

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
}, Home)