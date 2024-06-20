import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResultPage.module.css";

const ResultPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { result } = location.state || { result: null };

	if (!result) {
		return <div className={styles.container}>No result available</div>;
	}

	const handleBackToHome = () => {
		navigate("/");
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Quiz Results</h1>
			<div className={styles.resultContainer}>
				<h2 className={styles.subtitle}>Your Answers:</h2>
				<ul className={styles.resultList}>{result}</ul>
			</div>
			<button onClick={handleBackToHome} className={styles.button}>
				Back to Home
			</button>
		</div>
	);
};

export default ResultPage;
