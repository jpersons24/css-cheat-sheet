import React from 'react';
import styled from 'styled-components';

const AlignCenter = () => {
  return (
		<Wrapper>
			<h3>center</h3>
			<SquareContainer>
				<RedSquare>
					<p>baseline</p>
					<p>baseline</p>
				</RedSquare>
				<RedSquare></RedSquare>
				<RedSquare>
					<p>baseline</p>
					<p>baseline</p>
				</RedSquare>
				<RedSquare></RedSquare>
			</SquareContainer>
		</Wrapper>
  );
}

export default AlignCenter;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border: 5px dotted black;
	padding: 10px;
	margin: 5px;
`;

const SquareContainer = styled.div`
	height: 200px;
	display: flex;
  align-items: center;
`;

const RedSquare = styled.div`
	background: red;
	height: 70px;
	width: 60px;
	margin: 5px;
`;

