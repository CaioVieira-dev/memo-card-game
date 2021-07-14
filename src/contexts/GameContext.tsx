import { createContext, useState, useEffect, ReactNode } from 'react'

import apple from '../assets/apple.png';
import avocado from '../assets/avocado.png';
import banana from '../assets/banana.png';
import cherry from '../assets/cherry.png';
import lemon from '../assets/lemon.png';
import orange from '../assets/orange.png';
import pear from '../assets/pear.png';
import pineapple from '../assets/pineapple.png';
import raspberry from '../assets/raspberry.png';
import strawberry from '../assets/strawberry.png';

type FruitType = {
    id: string;
    fruit: string;
    cardState: 'hidden' | 'visible' | 'done';
}

type GameContextType = {
    gameState: string;
    gameDifficulty: string;
    changeGameState: (state: "playing" | "menuScreen") => void;
    changeGameDifficulty: (difficulty: string) => void;
    gameBoard: FruitType[] | undefined;
    flipCard: (id: string) => void;
    prepareGameBoard: () => void;
    resetScore: () => void;
    gameScore: Number;
}
type GameContextProviderProps = {
    children: ReactNode;
}

export const GameContext = createContext({} as GameContextType);

export function GameContextProvider(props: GameContextProviderProps) {
    const [gameState, setGameState] = useState('menuScreen');
    const [gameDifficulty, setGameDifficulty] = useState('easy');
    const [gameBoard, setGameBoard] = useState<FruitType[]>();
    const [stepCounter, setStepCounter] = useState(0);

    const [gameScore, setGameScore] = useState(0);

    const [forceUpdate, setForceUpdate] = useState(false);

    useEffect(() => {
        if (forceUpdate) {
            setForceUpdate(false);
        }
    }, [forceUpdate])


    function changeGameState(state: "playing" | "menuScreen") {
        setGameState(state);
    }
    function changeGameDifficulty(difficulty: string) {
        setGameDifficulty(difficulty);
    }
    function prepareGameBoard() {
        let fruits = [
            apple,
            avocado,
            banana,
            cherry,
            lemon,
            orange,
            pear,
            pineapple,
            raspberry,
            strawberry,
        ];
        const pairNumber = gameDifficulty === 'easy' ? 4 : gameDifficulty === 'normal' ? 6 : 8;

        let cardSet: FruitType[] | undefined;
        for (let i = 0; i < pairNumber; i++) {
            let lock = true;
            do {
                const rng = Math.floor(Math.random() * ((fruits.length - 1) - 0 + 1));
                let found = false;
                if (cardSet) {
                    for (let i = 0; i < cardSet.length; i++) {
                        if (cardSet[i].fruit === fruits[rng]) {
                            found = true;
                            break;
                        }
                    }
                }
                if (!cardSet || !found) {
                    if (!cardSet) {
                        cardSet = [{
                            id: "card_1",
                            fruit: fruits[rng],
                            cardState: "hidden"
                        },
                        {
                            id: "card_2",
                            fruit: fruits[rng],
                            cardState: "hidden"
                        }];
                        lock = false;
                        continue;
                    }
                    cardSet?.push({ id: `card_${cardSet.length + 1}`, fruit: fruits[rng], cardState: "hidden" });
                    cardSet?.push({ id: `card_${cardSet.length + 1}`, fruit: fruits[rng], cardState: "hidden" });
                    lock = false;
                }
            } while (lock)
        }
        if (cardSet) {
            cardSet = shuffle(cardSet);
        }
        setGameBoard(cardSet)

    }
    function shuffle(array: any) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    function flipCard(id: string) {
        if (!gameBoard) {
            console.error("Ooops, this wasn't meant to happen. Missing GameBoard.")
            return;
        }

        if (winCondition() === 'yes') {
            alert('You Win!! :)')
            return;
        }

        setStepCounter(stepCounter + 1)

        if (stepCounter < 2) {
            let gameBoardCards = gameBoard;
            for (let i = 0; i < gameBoardCards.length; i++) {
                if (gameBoardCards[i].id === id) {
                    if (gameBoardCards[i].cardState === 'hidden') {
                        gameBoardCards[i].cardState = 'visible';
                    } else if (gameBoardCards[i].cardState === 'visible') {
                        gameBoardCards[i].cardState = 'hidden';
                        setStepCounter(0);
                    }
                    setForceUpdate(true);
                    setGameBoard(gameBoardCards);
                    break;
                }
            }
        } else {
            setStepCounter(0)
            const result = verifyCardMatch();
            if (typeof result != 'string') {
                //points ++
                setGameScore(gameScore + 20);
                setForceUpdate(true);
                setGameBoard(result);
            } else {

                let gameBoardCards = gameBoard;
                for (let i = 0; i < gameBoardCards.length; i++) {

                    if (gameBoardCards[i].cardState === 'visible') {
                        gameBoardCards[i].cardState = 'hidden';
                    }

                }
                setForceUpdate(true);
                setGameBoard(gameBoardCards);
            }
        }

    }
    function verifyCardMatch() {
        if (!gameBoard) {
            console.error("Ooops, this wasn't meant to happen. Missing GameBoard.")
            return 'no gameBoard cards';
        }
        let flippedCards: any = [];
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].cardState === 'visible') {
                flippedCards.push(gameBoardCards[i])
            }
        }
        if (flippedCards.length !== 2) {
            console.error("Invalid number of cards flipped when this function was called.")
            return 'invalid flipped cards number';
        }
        if (flippedCards[0].fruit === flippedCards[1].fruit) {
            for (let i = 0; i < gameBoardCards.length; i++) {
                if (gameBoardCards[i].id === flippedCards[0].id || gameBoardCards[i].id === flippedCards[1].id) {
                    gameBoardCards[i].cardState = 'done';
                }
            }
            return gameBoardCards;
        }
        return 'did not match'
    }
    function winCondition() {
        if (!gameBoard) {
            console.error("Ooops, this wasn't meant to happen. Missing GameBoard.")
            return 'no gameBoard cards';
        }
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].cardState !== 'done') {
                return 'no'
            }
        }
        return 'yes'

    }
    function resetScore() {
        setGameScore(0);
    }

    return (
        <GameContext.Provider value={{
            changeGameState,
            changeGameDifficulty,
            gameState,
            gameDifficulty,
            gameBoard,
            flipCard,
            prepareGameBoard,
            resetScore,
            gameScore
        }}>
            {props.children}
        </GameContext.Provider>
    )
}