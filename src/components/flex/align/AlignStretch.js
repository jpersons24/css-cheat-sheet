import React from 'react';
import styled from 'styled-components';

const AlignStretch = () => {
  return (
		<Wrapper>
			<h3>stretch</h3>
			<SquareContainer>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
		</Wrapper>
  );
}

export default AlignStretch;

const Wrapper = styled.div`
	display: flex;
	align-items: stretch;
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
	height: auto;
	width: 50px;
	margin: 5px;
`;
