import styled from 'styled-components';
import Flex from './flex/Flex';


function App() {
  return (
		<div>
			<Header>
				<h1>CSS Study Guide</h1>
				<p>
					All styling will be done using the NPM package:{" "}
					<i>styled components</i>
				</p>
				<p>
					You can find the installation instructions for styled
					components{" "}
					<a href="https://styled-components.com/docs/basics#installation">
						here.
					</a>
				</p>
			</Header>
			<div>
				<Flex />
			</div>
			<div>
				<h2>Grid</h2>
			</div>
		</div>
  );
}

export default App;

// styled components

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
