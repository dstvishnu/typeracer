import React, { Component } from 'react';
import { connect } from 'react-redux';
import Error from '../Errors/Error';
import CustomInput from './CustomInput';
import RacerContent from './RacerContent';
import {getRandomText} from '../../Actions/RacerActions';
import {
  changeSearchError,
  changeNetworkError,
  changeServerError
} from '../../Actions/ErrorActions';
const regex = /(<([^>]+)>)/gi

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      content: "",
      remainingWordsArray:[],
      textArray:[],
      typedWordsArray:[]
    };
  }
  componentDidMount() {    
    this.props.changeSearchError(false);
    this.props.changeNetworkError(false);
    this.props.changeServerError(false);
    this.props.getRandomText();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.content !== nextProps.state.randomText) {
      let parsedContent=nextProps.state.randomText ? nextProps.state.randomText.replace(regex,''):"";
      let remainingWordsArray;
      let textArray;      
      if(!prevState.content){
        remainingWordsArray=parsedContent.split(' ');
        textArray = parsedContent.split(' ');
        return {
          content: parsedContent,
          textArray,
          remainingWordsArray 
        }
      }else{

      }
      
      
    }
  }
  
  handleTextChanges = () => {
    const lastChar = this.state.textValue[this.state.textValue.length - 1]
    if (lastChar === ' ') {
        let typedWords=[...this.state.typedWordsArray];
        let remainingWords=[...this.state.remainingWordsArray];
        typedWords.push(this.state.remainingWordsArray[0] )
        remainingWords.shift()
        this.setState({
          textValue: '',
          typedWordsArray:typedWords,
          remainingWordsArray:remainingWords,          
        })
      
    }
  }
  handleTextInput = e => { 
    this.setState(
      {
        textValue: e.target.value
      },
      this.handleTextChanges
    )
  }
  
  render() {
    const {
      searchError,
      networkError,
      serverError
    } = this.props.errors;
    return (
      <div className="content">        
        {searchError ? <Error errorInfo="Failed to get the data"/> : null}        
        {networkError ? <Error errorInfo="Error Occurred while accessing the API" /> : null}
        {serverError ? <Error errorInfo="Oh! Bad.Fatal Error" /> : null}
        {!searchError && !networkError  && !serverError ? (
          <div>
              <CustomInput 
              inputId="racerInput"
              type="text"  
              inputPlaceholder="Type the Text from the below Content"
              handleChange={this.handleTextInput}/>
              
              <RacerContent
                textArray={this.state.textArray}
                typedWordsArray={this.state.typedWordsArray}
                remainingWordsArray={this.state.remainingWordsArray}
              />            
                
          </div>
        ) : null}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  state: state.racer,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    changeSearchError,
    changeNetworkError,
    changeServerError,
    getRandomText
  }
)(Layout);
