import React, { Component } from 'react'
import AuthService from './AuthService'

export default function withAuth(WrappedComponent) {
	const Auth = new AuthService()
	return class AuthWrapped extends Component {
		constructor() {
			super();
			this.setSelectedGroupId = this.setSelectedGroupId.bind(this);

			this.state = {
				userId: '',
			  groupId: '',
			}
		}

    setSelectedGroupId(groupId)
		{
       Auth.setGroupId(groupId)
		}

		componentWillMount() {
			if(!Auth.loggedIn()) {
				console.log("not logged in!");
				this.props.history.replace('/login')
			} else {
				try {
					const userId = Auth.getUserId()
					const groupId = Auth.getGroupId()

					this.setState({
						userId: userId,
						groupId: groupId,
					})
				}
				catch(err) {
					Auth.logout()
					this.props.history.replace('/login')
				}
			}
		}

		render() {
			if (this.state.userId) {
				return (
					<WrappedComponent
						history={this.props.history}
						userId={this.state.userId}
						groupId={this.state.groupId}
						setSelectedGroupId={this.setSelectedGroupId}
					/>
				)
			} else {
				return null
			}
		}
	}
}
