import { useRouter } from 'next/router'

const Post = () => {
	const { query } = useRouter()

	return (
		<>
			<h1>Post: {query.slug}</h1>
		</>
	)
}

export default Post
