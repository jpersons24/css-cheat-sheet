import React from 'react';
import styled from 'styled-components';

const AlignFlexStart = () => {
  return (
		<Wrapper>
			<h3>flex-start</h3>
			<SquareContainer>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
		</Wrapper>
  );
}

export default AlignFlexStart;

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	border: 5px dotted black;
	padding: 10px;
	margin: 5px;
`;

const SquareContainer = styled.div`
  height: 200px;
	display: flex;
`;

const RedSquare = styled.div`
	background: red;
	height: 50px;
	width: 50px;
	margin: 5px;
`;
