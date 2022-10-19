import React from "react";
import Masonry, { MasonryBox } from "../../Layout/Masonry/Masonry";
import "./lists.css";
import "../Notes/notes.css";
import List from "./List";
import Empty from "../../components/Empty/Empty";
import { nullLists } from "../../utils/images";
import Fab from "../../components/Button/Fab";

const Lists = () => {
	const lists = [];
	return (
		<main className="lists">
			{lists.length > 0 ? (
				<section className="lists-body">
					<Masonry>
						{lists.map((list) => (
							<MasonryBox key={list._id}>
								<List {...list} />
							</MasonryBox>
						))}
					</Masonry>
				</section>
			) : (
				<Empty
					img={nullLists}
					text="No Lists Yet"
					cta={{
						text: "Create a List",
						icon: "add",
						action: () => {},
					}}
				/>
			)}
			<Fab icon="add" onClick={() => {}} />
		</main>
	);
};

export default Lists;
