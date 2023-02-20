import React from 'react';

const ErrorMessage: React.FC<{ name: string; messages: string[] }> = ({
	name,
	messages,
}) => {
	if (messages === undefined) return <></>;

	return (
		<>
			{messages.map((m, i) => (
				<div
					key={`error-message-${name}-${i}`}
					style={{ color: 'red' }}>
					{m}
				</div>
			))}
		</>
	);
};
export default ErrorMessage;
