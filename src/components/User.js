import React from 'react'

const User = (props) => {
	let { profile } = props;
	if (profile) {
		return (
			<div className="user-detail-page">
				<h2>Profile</h2>
				<div className="image"><img src={profile.avatarImage} alt={`${profile.firstName} ${profile.lastName}`}></img></div>
				<table className="detail">
					<tbody>
						<tr>
							<td className="label">First name</td>
							<td className="value">{profile.firstName}</td>
						</tr>
						<tr>
							<td>Last name</td>
							<td>{profile.lastName}</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td>{profile.phone}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{profile.email}</td>
						</tr>
						<tr>
							<td>Bio</td>
							<td>{profile.bio}</td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<div className="clear"></div>
			</div>
		)
  } else {
    return '<>'
  }
}

export default User;