import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import {
    CButton,
    CForm,
    CCard,
    CCardBody,
    CCardHeader,
} from '@coreui/react';
import './score.css';

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

            {/* Set Score Limit Form */}
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
                        <CCardBody>
                            <CForm>
                                <label>Set Score Limit:</label>
                                <div className="d-flex">
                                    {/*                                     <CInput
                                        type="number"
                                        name="setScoreLimit"
                                        value={values.setScoreLimit}
                                        onChange={handleChange}
                                    /> */}
                                    <CButton type="submit" color="primary">
                                        Update
                                    </CButton>
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
                )}
            </Formik>

            {/* Scoreboard */}
            <CCard>
                <CCardHeader>Scoreboard</CCardHeader>
                <CCardBody>
                    <div className="scoreboard">
                        <div className="team">
                            <h2>Team A</h2>
                            Point:
                            <span>{teamAScore}</span>
                            <br />
                            <label>Sets: {teamASets}</label>
                        </div>
                        <div className="team">
                            <h2>Team B</h2>
                            Point:
                            <span>{teamBScore}</span>
                            <br />
                            <label>Sets: {teamBSets}</label>
                        </div>
                    </div>
                </CCardBody>
            </CCard>
            <br />
            <div className="score-buttons">
                <CButton color="primary" onClick={() => scorePoint('A')}>
                    Team A Point
                </CButton>
                <CButton color="danger" onClick={undoScore}>
                    Undo
                </CButton>
                <CButton color="primary" onClick={() => scorePoint('B')}>
                    Team B Point
                </CButton>

            </div>

            {/* Set Buttons */}
            <div className="set-buttons">
                <CButton color="primary" onClick={() => scoreSet('A')}>
                    Team A Set
                </CButton>
                <CButton color="primary" onClick={() => scoreSet('B')}>
                    Team B Set
                </CButton>
            </div>

            {/* Timeout */}
            <div className="timeout">
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