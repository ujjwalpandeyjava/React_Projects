import { Fragment } from "react";
import useFetch from "./useFetch";

function CustomHookEx() {
	const { data, isPending, isErrorState } = useFetch({ url: "https://picsum.photos/v2/list?page=1&limit=10" });
	// const { data, isPending, isErrorState } = useFetch({ url: "https://picsum.photos/list?page=1&limit=10" });
	console.log({ data, isErrorState, isPending });
	return (
		<Fragment>
			<h1>CustomHookEx</h1>
			<hr />
			<p>
				Pending: {isPending && <span>Loading...</span>}
			</p>
			<p>
				Pending: {isPending ? <span>Loading...</span> : <span>Loaded</span>}
			</p>

			<hr />
			<p>
				Data:
				{data?.map((item, index) => (
					<div key={index + 1}>{item.id}). url: <i>{item.url}</i></div>
				))}
			</p>
			<p>
				Data: {!data ? <span>No data</span> :
					data?.map((item, index) => (
						<div key={index + 1}>{item.id}). url: <i>{item.url}</i></div>
					))}
			</p>

			<hr />
			<p>
				Error: {isErrorState && <span>{isErrorState}</span>}
			</p>
			<p>
				Error: {isErrorState ? <span>{isErrorState}</span> : <span>No error</span>}
			</p>
			<hr />
		</Fragment>
	)
}

export { CustomHookEx };