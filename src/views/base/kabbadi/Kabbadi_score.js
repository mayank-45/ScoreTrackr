import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import {
    CButton,
    CForm,
    CCard,
    CCardBody,
    CCardHeader,
} from '@coreui/react';

const Score = () => {
    const [timeoutSeconds, setTimeoutSeconds] = useState(30);
    const [timeoutInterval, setTimeoutInterval] = useState(null);

    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
    const [teamASets, setTeamASets] = useState(0);
    const [teamBSets, setTeamBSets] = useState(0);
    const [setScoreLimit, setSetScoreLimit] = useState(25);

    const [scoreHistory, setScoreHistory] = useState([]);

    const scorePoint = (team) => {
        if (team === 'A') {
            setTeamAScore(teamAScore + 1);
        } else if (team === 'B') {
            setTeamBScore(teamBScore + 1);
        }

        // Add the current score to the history
        setScoreHistory([...scoreHistory, { teamAScore, teamBScore }]);

        // Check if a team has reached the set score limit
        if (teamAScore >= setScoreLimit) {
            scoreSet('A');
        } else if (teamBScore >= setScoreLimit) {
            scoreSet('B');
        }
    };

    const scoreSet = (team) => {
        if (team === 'A') {
            setTeamASets(teamASets + 1);
        } else if (team === 'B') {
            setTeamBSets(teamBSets + 1);
        }

        // Reset the scores
        setTeamAScore(0);
        setTeamBScore(0);

        // Clear the score history when a set is scored
        setScoreHistory([]);
    };

    const undoScore = () => {
        if (scoreHistory.length > 0) {
            const previousScores = scoreHistory.pop();
            setTeamAScore(previousScores.teamAScore);
            setTeamBScore(previousScores.teamBScore);
        }
    };

    const startTimeout = () => {
        setTimeoutInterval(
            setInterval(() => {
                setTimeoutSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000)
        );
    };

    const stopTimeout = () => {
        clearInterval(timeoutInterval);
    };

    useEffect(() => {
        if (timeoutSeconds === 0) {
            clearInterval(timeoutInterval);
            alert('Timeout is over!');
        }
    }, [timeoutSeconds, timeoutInterval]);

    return (
        <div className="App">
            <h1>Volleyball Scorer</h1>

            <Formik
                initialValues={{
                    setScoreLimit: setScoreLimit,
                }}
                onSubmit={(values) => {
                    setSetScoreLimit(values.setScoreLimit);
                }}
            >
                {({ values, handleChange }) => (
                    <CCard>
                        <CCardHeader>Set Score Limit</CCardHeader>
                        <CCardBody>
                            <CForm>
                                <label>Set Score Limit:</label>
                                {/* <CInput
                                    type="number"
                                    name="setScoreLimit"
                                    value={values.setScoreLimit}
                                    onChange={handleChange}
                                /> */}
                                <CButton type="submit" color="primary">
                                    Update
                                </CButton>
                            </CForm>
                        </CCardBody>
                    </CCard>
                )}
            </Formik>

            <CCard>
                <CCardHeader>Scoreboard</CCardHeader>
                <CCardBody>
                    <div>
                        <label>Team A:</label>
                        <span>{teamAScore}</span>
                        <label>Sets: {teamASets}</label>
                    </div>
                    <div>
                        <label>Team B:</label>
                        <span>{teamBScore}</span>
                        <label>Sets: {teamBSets}</label>
                    </div>
                </CCardBody>
            </CCard>

            <div>
                <CButton
                    color="primary"
                    onClick={() => scorePoint('A')}
                >
                    Team A Point
                </CButton>
                <CButton
                    color="primary"
                    onClick={() => scorePoint('B')}
                >
                    Team B Point
                </CButton>
                <CButton color="danger" onClick={undoScore}>
                    Undo
                </CButton>
            </div>

            <div>
                <CButton
                    color="primary"
                    onClick={() => scoreSet('A')}
                >
                    Team A Set
                </CButton>
                <CButton
                    color="primary"
                    onClick={() => scoreSet('B')}
                >
                    Team B Set
                </CButton>
            </div>

            <div>
                <label>Timeout:</label>
                <span>{timeoutSeconds}</span> seconds
                <CButton color="primary" onClick={startTimeout}>
                    Start Timeout
                </CButton>
                <CButton color="danger" onClick={stopTimeout}>
                    Stop Timeout
                </CButton>
            </div>
        </div>
    );
};

export default Score;