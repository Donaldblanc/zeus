import React from 'react';
import bgImg from '../../public/images/intro_page.jpg'
class home extends React.Component {
  constructor() {
    super();
  
  }

  componentWillMount(){
    // var w = window,
    // d = document,
    // e = d.documentElement,
    // g = d.getElementsByTagName('body')[0],
    // x = w.innerWidth || e.clientWidth || g.clientWidth,
    // y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    // this.setState({x:x,y:y});
  }

  render() {
    const bgStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',
    }
    return (
      // <div><img className='bg' src={'https://source.unsplash.com/'+this.state.x+'x'+this.state.y+'/?nature'} /></div>
      <div style={ {width:'100%', height:'100%', backgroundColor:'#0D1A68'  }} >
     <img className='bg' style={bgStyle} src={bgImg} /> 
     <button className="btn btn-success" onClick={()=>{window.location.href="/login" }} > <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Login Button</button>
     </div>
    )
  }
}
export default home;