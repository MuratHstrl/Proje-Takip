import React from 'react';
import {Tab} from 'semantic-ui-react';
import Addproject from './Addproject';
import Projepage from './Projepage';
const panes = [
    { menuItem: 'Anasayfa', render: () => <Tab.Pane><Addproject></Addproject></Tab.Pane>},
    { menuItem: 'Ekle', render: () => <Tab.Pane><Projepage></Projepage></Tab.Pane> },
  ] 
  const TabExamplePointing = () => <Tab menu={{ pointing: true }} panes={panes} />
class Projects extends React.Component{
    render(){    
        return(
           <div style={{backgroundColor:"white" , width:'98%', marginTop: '0.2%' , margin: 'auto',borderRadius:'3%' }}>
           <div ><h2 style={{textAlign:'center'}}>Proje Takip Sistemi</h2></div>
           <hr></hr>
              <TabExamplePointing></TabExamplePointing>
           </div>
       
        )
    }
}

export default Projects;