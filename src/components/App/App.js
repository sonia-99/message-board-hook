import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const API_ENDPOINT = 'https://student-json-api.lidemy.me/comments';

const Button = styled.button`
	border-radius: 8px;
	padding: 0.5rem 1rem;
	font-size: 0.8rem;
`;

const Page = styled.div`
	width: 550px;
	margin: 0 auto;
`;
const Title = styled.h1`color: navy;`;
const MessageForm = styled.form``;
const NameInput = styled.div`margin-bottom: 8px;`;
const MessageTextarea = styled.textarea`
	display: block;
	width: 99%;
`;
const SubmitButton = styled(Button)`margin-top: 8px;`;
const MessageList = styled.div`margin-top: 16px;`;
const ErrorMessage = styled.div`
	background: pink;
	color: red;
	padding: 1rem;
	margin: 1rem 0;
	border-radius: 8px;
	border: 1px solid grey;
`;
const LoadingMessage = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	color: white;
	font-weight: bold;
`;

const MessageContainer = styled.div`
	border: 1px solid grey;
	padding: 8px 16px;
	border-radius: 8px;
	& + & {
		margin-top: 0.5rem;
	}
`;
const MessageHead = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;
const MessageAuthor = styled.div`font-size: 1rem;`;
const MessageTime = styled.div``;
const MessageBody = styled.div`
	font-size: 0.9rem;
	margin-top: 1rem;
`;

const MessageDelete = styled(Button)`
	display: block;
	margin: 0.6rem auto;
	margin-right: 10px;
`;
function Message({ author, time, children, handleDelete, id }) {
	return (
		<MessageContainer>
			<MessageHead>
				<MessageAuthor>{author}</MessageAuthor>
				<MessageTime>{time}</MessageTime>
			</MessageHead>
			<MessageBody>{children}</MessageBody>
			<MessageDelete
				onClick={() => {
					handleDelete(id);
				}}
			>
				Delete
			</MessageDelete>
		</MessageContainer>
	);
}

function App() {
	const [ messages, setMessages ] = useState([]);
	const [ value, setValue ] = useState('');
	const [ nickname, setNickname ] = useState('');
	const [ messageApiError, setMessageApiError ] = useState(null);
	const [ postMessageApiError, setPostMessageApiError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(null);

	const fetchAllData = () => {
		fetch(API_ENDPOINT + '?_sort=createdAt&_order=desc')
			.then((response) => response.json())
			.then((data) => {
				setMessages(data);
			})
			.catch((err) => {
				setMessageApiError(err.message);
			});
	};
	useEffect(
		() => {
			// get data from api server
			fetchAllData();
		},
		[ messages ]
	);
	const handleNicknameChange = (e) => {
		setNickname(e.target.value);
	};
	const handleTextareaChange = (e) => {
		//wire up state with input value
		setValue(e.target.value);
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (isLoading) {
			return;
		}
		setIsLoading('Loading...');
		// add new comment to api server
		fetch('https://student-json-api.lidemy.me/comments', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				nickname: nickname,
				body: value
			})
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('Added: ', data);
				if (data.ok === 0) {
					setPostMessageApiError(data.message);
					setIsLoading('');
					return;
				}
				setValue('');
				setNickname('');
				setIsLoading('');
			});
	};
	const handleDelete = (id) => {
		setIsLoading('Deleting...');
		// send delete comment request to api server
		fetch('https://student-json-api.lidemy.me/comments/' + id, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('Deleted: ', data);
				setIsLoading('');
			});
	};
	return (
		<Page>
			<Title>留言板</Title>
			<MessageForm onSubmit={handleFormSubmit}>
				<NameInput>
					Nickname: <input type="text" value={nickname} onChange={handleNicknameChange} />
				</NameInput>
				<MessageTextarea
					rows={5}
					value={value}
					onChange={handleTextareaChange}
					onFocus={() => setPostMessageApiError(null)}
				/>
				<SubmitButton>送出</SubmitButton>
			</MessageForm>
			<MessageList>
				{messageApiError && <ErrorMessage>Something went wrong... {messageApiError.toString()}</ErrorMessage>}
				{postMessageApiError && (
					<ErrorMessage>Something went wrong... {postMessageApiError.toString()}</ErrorMessage>
				)}
				{isLoading && <LoadingMessage>{isLoading}</LoadingMessage>}

				{messages &&
					messages.map((message) => (
						<Message
							key={message.id}
							author={message.nickname}
							time={new Date(message.createdAt).toLocaleString()}
							id={message.id}
							handleDelete={handleDelete}
						>
							{message.body}
						</Message>
					))}
			</MessageList>
		</Page>
	);
}
App.propTypes = {
	author: PropTypes.string,
	time: PropTypes.string,
	children: PropTypes.node
};
export default App;
