import React, { useState } from 'react'
import styled from 'styled-components';
import JustifyFlexStart from './JustifyFlexStart'
import JustifyFlexEnd from './JustifyFlexEnd';
import JustifyCenter from './JustifyCenter';
import JustifySpaceBetween from './JustifySpaceBetween';
import JustifySpaceAround from './JustifySpaceAround';
import JustifySpaceEvenly from "./JustifySpaceEvenly";

const Flex = () => {

  const [showJustify, setShowJustify] = useState(false);
  const [showAlign, setShowAlign] = useState(false);
  console.log(showJustify)
  console.log(showAlign)

  function handleJustifyClick(e) {
    setShowJustify((showJustify) => !showJustify)
  }

  function handleAlignClick(e) {
    setShowAlign((showAlign) => !showAlign)
  }

  return (
		<Wrapper>
			<HeaderContainer>
				<FlexHeader>Flex</FlexHeader>
				{showJustify ? (
					<JustifyButton onClick={handleJustifyClick}>
						Hide Justify
					</JustifyButton>
				) : (
					<JustifyButton onClick={handleJustifyClick}>
						Show Justify
					</JustifyButton>
				)}
				{showAlign ? (
					<AlignButton onClick={handleAlignClick}>
						Hide Align
					</AlignButton>
				) : (
					<AlignButton onClick={handleAlignClick}>
						Show Align
					</AlignButton>
				)}
			</HeaderContainer>
			{showJustify ? (
				<>
					<JustifyFlexStart />
					<JustifyFlexEnd />
					<JustifyCenter />
					<JustifySpaceBetween />
					<JustifySpaceAround />
					<JustifySpaceEvenly />
				</>
			) : null}
      {showAlign ? (
        <>
        </>
      ) : null}
		</Wrapper>
  );
}

export default Flex;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: #f7deba;
`;

const HeaderContainer = styled.div`
`

const FlexHeader = styled.h2`
  display: inline-block;
  margin: 0 25px;
  padding: 15px 0;
`

const JustifyButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 30px;
`

const AlignButton = styled.button`
	display: inline-block;
	width: 100px;
	height: 30px;
`;