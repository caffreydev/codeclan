async function getData() {
	const res = await fetch('https://nc-news-render.onrender.com/api/articles');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function katas() {
	const data = await getData();

	return (
		<div className='mx-auto my-10 w-5/6'>
			<h1 className=''>List of Katas</h1>

			<ul className='flex flex-col items-center justify-center'>
				{data.articles.map((element: any) => {
					return (
						<li className='m-5 w-full  rounded border-0 bg-grey-400 p-3 transition ease-in-out hover:bg-grey-200'>
							<div className='collapse-title'>{element.title} </div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
