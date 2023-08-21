import { useContext, useEffect, useRef } from "react";
import "./Rules.scss";

import rules from "./Rules.svg";
import closeRules from "./CloseRules.svg";

import GameContext from "../../context/GameContext";

function Rules() {
	const { setIsShowing } = useContext(GameContext);

	const rulesRef = useRef();

	useEffect(() => {
		rulesRef.current.focus();
	}, []);

	return (
		<div className="rules" ref={rulesRef} tabIndex={0} onBlur={() => setIsShowing(false)}>
			<div className="rules__container">
				<span>rules</span>
				<img src={closeRules} id="close-rules" alt="close-rules" onClick={() => setIsShowing(false)} style={{ cursor: "pointer" }} />
				<img src={rules} id="rules" alt="rules" />

			</div>
		</div>
	);
}

export default Rules;
