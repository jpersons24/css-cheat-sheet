import React from 'react'
import styled from 'styled-components';

const FlexStart = () => {
  return (
		<Wrapper>
      <h3>flex-start</h3>
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

export default FlexStart;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
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
