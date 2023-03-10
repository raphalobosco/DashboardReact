import styled from "styled-components"

function UserProfile({ profile }) {
	return (
		<UserStyle>
			<img src={profile.photo} alt="" />
			<div className="info">
				<p className="name">{profile.name}</p>
				<p className="email">{profile.email}</p>
			</div>
		</UserStyle>
	)
}

const UserStyle = styled.div`
	display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	img {
		width: 60px;
		height: 60px;
		flex-shrink: 0;
		object-fit: cover;
		border-radius: 999px;
	}
	.name {
		font-size: 1rem;
		font-weight: 700;
	}
	.email {
		font-size: 0.8rem;
		font-weight: 300;
		opacity: 0.8;
	}
`



export default UserProfile