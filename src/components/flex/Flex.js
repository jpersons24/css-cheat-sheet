import React, { useState } from 'react';
import styled from 'styled-components';
import JustifyFlexStart from './justify/JustifyFlexStart'
import JustifyFlexEnd from './justify/JustifyFlexEnd';
import JustifyCenter from './justify/JustifyCenter';
import JustifySpaceBetween from './justify/JustifySpaceBetween';
import JustifySpaceAround from './justify/JustifySpaceAround';
import JustifySpaceEvenly from './justify/JustifySpaceEvenly';
import AlignFlexStart from './align/AlignFlexStart';
import AlignFlexEnd from './align/AlignFlexEnd';
import AlignStretch from './align/AlignStretch';
import AlignCenter from './align/AlignCenter';
import AlignBaseline from './align/AlignBaseline';

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
			<div>
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
			</div>
			{showJustify ? (
				<>
          <h3>justify-content:</h3>
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
          <h3>align-items:</h3>
          <AlignFlexStart />
          <AlignFlexEnd />
          <AlignStretch />
          <AlignCenter />
          <AlignBaseline />
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
  padding: 0 15px;
`;

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