import styled from "styled-components"

function Button({ btn }) {
	return (

		<Btn>
			<i>{btn.name}</i>
			<span>{btn.label}</span>
		</Btn>
	)
}

const Btn = styled.div`
    padding: 1rem;
		background-color: transparent;
		text-align: start;
		color: 242141;
		border: none;
		font-size: 0.9rem;
		width: 100%;
		font-weight: 500;
		border-radius: 0.8rem;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;

        &:hover {
            background-color: rgb(255 255 255 / 50%);
		}

`

export default Button