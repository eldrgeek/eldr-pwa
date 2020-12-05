import React from 'react';
import logo from './logo.svg';
import { Flex, Center, Text, Button } from '@chakra-ui/react';
import './App.css';
import {
	showNotification,
	startBackgroundProcess,
	resetTimer,
	notifyMe
} from './utilities';
function App() {
	const [time, setTime] = React.useState('0:00:00');
	const update = (data: { type: string; value: string }) => {
		console.log('update');
		setTime(data.value);
	};
	React.useEffect(() => {
		startBackgroundProcess(update);
	}, []);
	return (
		// <Flex bg="red.10" align="center">
		<Flex
			direction="column"
			justify="center"
			align="center"
			id="outer"
			h="100vh"
			bg="white"
		>
			<Flex direction="row">
				<Button
					m={2}
					p={2}
					bg="red.200"
					onClick={() => notifyMe('notification')}
				>
					Notify
				</Button>
				<Button m={2} p={2} bg="red.200" onClick={resetTimer}>
					Reset
				</Button>
			</Flex>
			{time}
			{/* <Spacer></Spacer> */}
			{/* <Flex direction="row" justify="center" bg="red.40" > */}
			<Center bg="blue.300" w="50%" h="50vh" color="white">
				<Text
					fontSize="2em"
					_hover={{
						bg: 'red',
						color: 'red.400'
					}}
				>
					Me++
				</Text>
			</Center>
			{/* <Spacer></Spacer> */}

			{/* </Flex> */}
		</Flex>
		// </Flex>
	);
}

export default App;
