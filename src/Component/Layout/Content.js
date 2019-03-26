import React from 'react';

class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            parsedText: '',
            input: [],
            wordsRemaining: [],
            typedWords: []
        }
    }
    // this.remainingWordsArray = this.parsedText.split(' ')
    //   this.textArray = this.parsedText.split(' ')


}
const Content=props=>{
    return(
    <div id={props.contentId} className={props.contentClass}>
        {props.content}
    </div>
    )
}

export default Content;