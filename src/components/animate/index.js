import React ,{Component , Fragment} from 'react'
import AOS from 'aos'
import { Watch } from 'scrollmonitor-react'
import './animate-aos.css'

export default Watch(
    class Animation extends Component{
        constructor(props){
            super(props);
        }

        componentDidMount(){
            this.aos = AOS;
            this.aos.init({
                duration:1000
            });
        }

        componentDidUpdate(){
            this.aos.refresh()
        }

        render(){
            const { direction } = this.props
            
            return(
                <React.Fragment>
                        <div data-aos={direction}>
                            {this.props.children}
                        </div>
                </React.Fragment>
            )
        }
    }
)

