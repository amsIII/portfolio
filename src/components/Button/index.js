import React from "react";
import { Btn, BtnP, Bg, Base, Text } from "./button.styles";

const ValBtn = ({ btnText }) => {
	return (
		<Btn>
			<BtnP>
				<Bg></Bg>
				<Base></Base>
				<Text>{btnText}</Text>
			</BtnP>
		</Btn>
	);
};

export default ValBtn;
