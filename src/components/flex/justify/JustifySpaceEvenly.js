import React from 'react'
import styled from 'styled-components';

const JustifySpaceEvenly = () => {
  return (
		<Wrapper>
			<h3>space-evenly</h3>
			<SquareContainer>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
			<SquareContainer>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
			<SquareContainer>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
		</Wrapper>
  );
}

export default JustifySpaceEvenly;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	border: 5px dotted black;
	padding: 10px;
	margin: 5px;
`;

const SquareContainer = styled.div`
	display: inline-block;
`;

const RedSquare = styled.div`
	background: red;
	height: 50px;
	width: 50px;
	margin: 5px;
`;
