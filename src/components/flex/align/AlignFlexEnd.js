import React from 'react';
import styled from 'styled-components';

const AlignFlexEnd = () => {
  return (
		<Wrapper>
			<h3>flex-end</h3>
			<SquareContainer>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
		</Wrapper>
  );
}

export default AlignFlexEnd;

const Wrapper = styled.div`
	display: flex;
	align-items: flex-end;
	border: 5px dotted black;
	padding: 10px;
	margin: 5px;
`;

const SquareContainer = styled.div`
	height: 200px;
	display: flex;
	align-items: flex-end;
`;

const RedSquare = styled.div`
	background: red;
	height: 50px;
	width: 50px;
	margin: 5px;
`;
