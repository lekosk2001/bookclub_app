import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface Props { children: JSX.Element; }

const GLOBAL_STATE = new InMemoryCache()

const ApolloSetting = (props: Props) => {

	const client = new ApolloClient({
		cache: GLOBAL_STATE,
		connectToDevTools: true,
		uri: "https://backendonline.codebootcamp.co.kr/graphql",
	});

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
