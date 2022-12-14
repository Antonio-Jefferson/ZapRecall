
import styled from "styled-components"
import img3 from "../assets/icone_certo.png"
import img4 from "../assets/icone_erro.png"
import img5 from "../assets/icone_quase.png"

export default function BackFace({answer, questionsFinished, setQuestionsFinished, setLayout,setCorIcon, setIcon, setText}) {
    function btnClicked(element){
        if(element === "error"){
            setLayout('query')
            setCorIcon("red")
            setIcon(img4)
            setText("line-through")

        }else if(element === "almost"){
            setLayout('query')
            setCorIcon("orange")
            setIcon(img5)
            setText("line-through")

        }else if (element === "zap"){
            setLayout('query')
            setCorIcon("green")
            setIcon(img3)
            setText("line-through")
            
        }

        completedQuestions();
    }
    
    function completedQuestions(){
        const cout = questionsFinished
        if(cout !== 8){
            setQuestionsFinished(cout + 1)
        }
    }
    return (
        < Back data-test="flashcard" >
            <p data-test="flashcard-text">{answer}</p>
            <Btns>
                <button data-test="no-btn" onClick={() => btnClicked('error')} className="error">Não lembrei</button>
                <button data-test="partial-btn" onClick={() => btnClicked('almost')} className="almost">Quase não lembrei</button>
                <button data-test="zap-btn" onClick={() => btnClicked('zap')} className="zap">Zap!</button>
            </Btns>
        </Back>

    )
}

const Back = styled.div`
    width: 300px;
    height: 125px;
    margin: 12px;
    padding: 15px;
    
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #333333;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
  button{
        width: 85.17px;
        height: 37.17px;
        border: none;
        border-radius: 5px;
        align-items: center;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        align-items: center;
        text-align: center;

        color: #FFFFFF; 
    }

`
const Btns = styled.div`
    display: flex;
    justify-content: space-evenly;
    & :nth-child(1){
            background-color: #FF3030;
        }
        & :nth-child(2){
            background-color: #FF922E;
        }
        & :nth-child(3){
            background-color: #2FBE34;
        }

`
