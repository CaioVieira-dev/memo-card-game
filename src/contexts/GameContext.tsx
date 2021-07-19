import { createContext, useState, useEffect, ReactNode } from 'react'
import { useInterval } from '../hooks/useInterval'

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
    changeGameState: (state: "playing" | "menuScreen" | "victory" | "gameOver") => void;
    changeGameDifficulty: (difficulty: "easy" | "normal" | "hard") => void;
    gameBoard: FruitType[] | undefined;
    flipCard: (card: FruitType) => void;
    prepareGameBoard: () => void;
    resetScore: () => void;
    gameScore: number;
    handleCardToFlip: (card: FruitType) => void;
    startGame: () => void;
    endGame: () => void;
    gameMaxTime: number;
    setRemainingTime: (time: number) => void;
    gameRemainingTime: number;
    gameOver: () => void;
    changeGameMode: (mode: "normal" | "limited" | "challenge") => void;
    gameMode: "normal" | "limited" | "challenge";
    limitedMoves: number;
    resetMoves: () => void;
}
type GameContextProviderProps = {
    children: ReactNode;
}

export const GameContext = createContext({} as GameContextType);

export function GameContextProvider(props: GameContextProviderProps) {
    const [gameState, setGameState] = useState('menuScreen');
    const [gameDifficulty, setGameDifficulty] = useState('easy');
    const [gameMode, setGameMode] = useState<"normal" | "limited" | "challenge">('normal');
    const [gameBoard, setGameBoard] = useState<FruitType[]>();
    const [stepCounter, setStepCounter] = useState(0);
    const [cardToFlip, setCardToFlip] = useState<FruitType>();
    const [isPlaying, setIsPlaying] = useState(false);

    const [gameScore, setGameScore] = useState(0);

    const [forceUpdate, setForceUpdate] = useState(false);
    const [delay, setDelay] = useState(10);//controls gameloop speed
    const [gameMaxTime, setGameMaxTime] = useState(60);
    const [gameRemainingTime, setGameRemainingTime] = useState(0);
    const [limitedMoves, setLimitedMoves] = useState(8);


    useEffect(() => {
        if (forceUpdate) {
            setForceUpdate(false);
        }
    }, [forceUpdate])
    useInterval(() => {
        switch (gameMode) {
            case "normal":
                normalGameLoop();
                break;
            case 'limited':
                limitedGameLoop();
                break;
            case "challenge":
                limitedGameLoop()
                break;
        }
    }, isPlaying ? delay : null)
    function normalGameLoop() {
        // check win condition
        if (winCondition() === 'yes') {
            setGameState("victory");
            return endGame();
        }
        //loss for time condition is implemented on timer component
        flipLogic();
    }
    function limitedGameLoop() {
        // check win condition
        if (winCondition() === 'yes') {
            setGameState("victory");
            return endGame();
        }
        //check loss condition
        if (limitedMoves <= 0) {
            setGameState('gameOver');
            resetMoves();
            resetScore();
            return endGame();
        }
        flipLogic();
    }
    function flipLogic() {
        // need to flip?
        if (cardToFlip) {
            //due to typescript, cardToFlip may be undefined
            //to bypass this I've done this 'if' 
            flipCard(cardToFlip);
            setCardToFlip(undefined); //reset variable
        }
        if (stepCounter === 2) {
            setDelay(800)   //time to flip card animation
            setStepCounter(stepCounter + 1)
        }
        //if two cards are opened
        if (stepCounter === 3) {
            setDelay(10)
            if (gameMode !== 'normal') {
                //reduce amount of movements
                setLimitedMoves(limitedMoves - 1) //for challenge and limited modes
            }
            //if cards match?
            // change cardState to done
            const result = verifyCardMatch();
            if (result[0] === 'cards match') {
                // @ts-ignore
                setGameBoard(getCardStateChangedToDone(result[1], result[2]));
                //points ++
                setGameScore(gameScore + 20);
                //update screen
                setForceUpdate(true);
            } else {
                //cards did not match
                console.log(result[0]);
                hideCards();
            }
            setStepCounter(0);//reset step counter
        }
    }
    function shuffle(array: any) {
        let currentIndex = array.length, randomIndex;
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
    function winCondition() {
        //this function checks if all cards are in done state
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
    function flipCard(card: FruitType) {
        if (!gameBoard) {
            console.error("Ooops, this wasn't meant to happen. Missing GameBoard.")
            return;
        }

        setStepCounter(stepCounter + 1)
        if (stepCounter < 2) {
            if (card.cardState === 'hidden') {
                const newCardSet = getCardStateChangedToVisible(card.id);
                if (newCardSet === 'no gameBoard') {
                    return;
                }
                setGameBoard(newCardSet)
            } else if (card.cardState === 'visible') {
                const newCardSet = getCardStateChangedToHidden(card.id);
                if (newCardSet === 'no gameBoard') {
                    return;
                }
                setGameBoard(newCardSet)
                setStepCounter(0); //reset stepCounter
            }
            setForceUpdate(true)
        }
    }
    function verifyCardMatch() {
        let result: string[];
        if (!gameBoard) {
            console.error("Ooops, this wasn't meant to happen. Missing GameBoard.")
            result = ['no gameBoard cards']
            return result;
        }
        let flippedCards: any = [];
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].cardState === 'visible') {
                flippedCards.push(gameBoardCards[i])
            }
        }
        if (flippedCards.length !== 2) {
            console.error("Invalid number of cards flipped when this function was called.");
            result = ['invalid flipped cards number']
            return result;
        }
        if (flippedCards[0].fruit === flippedCards[1].fruit) {
            const id1 = flippedCards[0].id;
            const id2 = flippedCards[1].id;
            result = ['cards match', id1, id2]
            return result;
        }
        result = ['did not match']
        return result
    }
    function hideCards() {
        if (!gameBoard) { return; }
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].cardState === 'visible') {
                gameBoardCards[i].cardState = 'hidden';
            }
        }
        setForceUpdate(true);
        setGameBoard(gameBoardCards);
        /*This function must set two or more cards to hidden,
        so i can't use getCardStateChangedToHidden since it only changes
        one card at time.
        */
    }
    function getCardStateChangedToVisible(id: string) {
        if (!gameBoard) { return 'no gameBoard' }
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].id === id) {
                if (gameBoardCards[i].cardState === 'hidden') {
                    gameBoardCards[i].cardState = 'visible';
                }
                return gameBoardCards
            }
        }
    }
    function getCardStateChangedToHidden(id: string) {
        if (!gameBoard) { return 'no gameBoard' }
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].id === id) {
                if (gameBoardCards[i].cardState === 'visible') {
                    gameBoardCards[i].cardState = 'hidden';
                }
                return gameBoardCards
            }
        }
    }
    function getCardStateChangedToDone(id1: string, id2: string) {
        if (!gameBoard) { return 'no gameBoard' }
        let gameBoardCards = gameBoard;
        for (let i = 0; i < gameBoardCards.length; i++) {
            if (gameBoardCards[i].id === id1 || gameBoardCards[i].id === id2) {
                gameBoardCards[i].cardState = 'done';
            }
        }
        return gameBoardCards
    }
    function startGame() {
        setIsPlaying(true);
    }
    function endGame() {
        setIsPlaying(false);
    }
    function gameOver() {
        setGameState("gameOver");
        setIsPlaying(false);
    }
    function setRemainingTime(time: number) {
        setGameRemainingTime(time)
    }
    function resetScore() {
        setGameScore(0);
    }
    function resetMoves() {
        switch (gameDifficulty) {
            case "easy":
                setLimitedMoves(8);
                break;
            case "normal":
                setLimitedMoves(9);
                break;
            case "hard":
                setLimitedMoves(10);
                break;
        }
    }
    function handleCardToFlip(card: FruitType) {
        setCardToFlip(card)
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
        ]; //fruit cards prepared
        const pairNumber = gameDifficulty === 'easy' ? 4 : gameDifficulty === 'normal' ? 6 : 8;

        let cardSet: FruitType[] | undefined;
        for (let i = 0; i < pairNumber; i++) {
            let lock = true;
            //generate random indexes to compare if a fruit is already in the cardSet
            //it repeats until a new fruit is found. 
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
    function changeGameState(state: "playing" | "menuScreen" | "victory" | "gameOver") {
        setGameState(state);
    }
    function changeGameDifficulty(difficulty: "easy" | "normal" | "hard") {
        switch (difficulty) {
            case "easy":
                setGameMaxTime(60);
                setLimitedMoves(8);
                break;
            case "normal":
                setGameMaxTime(40);
                setLimitedMoves(9);
                break;
            case "hard":
                setGameMaxTime(35);
                setLimitedMoves(10);
                break;
        }
        setGameDifficulty(difficulty);
    }
    function changeGameMode(mode: "normal" | "limited" | "challenge") {
        setGameMode(mode)
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
            gameScore,
            handleCardToFlip,
            startGame,
            endGame,
            gameMaxTime,
            setRemainingTime,
            gameRemainingTime,
            gameOver,
            changeGameMode,
            gameMode,
            limitedMoves,
            resetMoves
        }}>
            {props.children}
        </GameContext.Provider>
    )
}