import React ,{ Component } from 'react'
import { withTranslation } from 'react-i18next'
import { NativeSelect } from '@material-ui/core';
import India from '../../images/flags/india.png'
import Russia from '../../images/flags/russia.png'

class LanguageSwitcher extends Component{

    constructor(props){
        super(props)
        const { i18n } = this.props
        this.state ={
            language:i18n.language
        }
        // this.handleLanguageChange = this.handleLanguageChange.bind(this)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            language:nextProps.i18n.language
        })
    }
   
    handleLanguageChange = (event) =>{
        const { i18n } = this.props
        i18n.changeLanguage(event.target.value)
    }

    render(){
        const languages =[
            {code:'en',label:'EN',flag:India},
            {code:'ru',label:'RU',flag:Russia}
        ]
        return(
            <div className="LanguageSwitcher">
                <NativeSelect
                    value={this.state.language}
                    onChange={this.handleLanguageChange}
                >
                                        
                    {languages.map(language=>(
                      
                          <option value={language.code}>{language.label}</option>
                    ))}
                </NativeSelect>
            </div>
        )
    }
}
export default withTranslation('translation')(LanguageSwitcher)