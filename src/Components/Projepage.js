import React from 'react';
import { TextArea ,  Button, Segment , Grid , GridColumn , Input} from 'semantic-ui-react';
import firebase from 'firebase';
class Projepage extends React.Component{
constructor(props){
    super(props);
    this.state={
        Pa:'',
        Pbt:'',
        Pgl:'',
        Phu:'',
        Pmgl:'',
        Pal:'',
        Pya:'',
        Paa:'',
        kuid:'',
        Pbmbm:'',
        /*  Pa : Proje adı
            Pbt : Proje başlama tarihi
            Pgl : Proje git linki
            Phu : Proje Hostin Url
            Pmgl : Proje mobil git linki
            Pal : Projenin apk linki
            Pya : Projenin yapılış amacı
            Paa : Proje açıklaması
            kuid : Kullanıcı Uid si
            Pbmbm : Projenin durumu

            0 : Bitmemiş
            1 : Bitmiş
        */
    }
}
Dataadd=()=>{
firebase.database().ref('Data/'+ this.state.kuid).push({
    Pa:this.state.Pa,
    Pbt:this.state.Pbt,
    Pgl:this.state.Pgl,
    Phu:this.state.Phu,
    Pmgl:this.state.Pmgl,
    Pal:this.state.Pal,
    Pya:this.state.Pya,
    Paa:this.state.Paa,
  //  kuid:this.state.kuid,
    Pbmbm:0,
}).then(()=>{
    alert('Projeniz eklendi') 
    this.setState({
        Pa:'',
        Pbt:'',
        Pgl:'',
        Phu:'',
        Pmgl:'',
        Pal:'',
        Pya:'',
        Paa:'',
        Pbmbm:'',
    })
}).catch((err)=>{alert(err)})
}
componentWillMount(){
    const id=localStorage.getItem('uid')
this.setState({
    kuid:id
})
}
render(){
    return(
        <Segment style={{width:'30%' , margin:'auto'}}>
            <h2 style={{textAlign:'center'}}>Proje Ekle</h2>
            <hr/>           
                <Grid columns={2}>
              
                    <GridColumn>

      <label>Proje adı</label><br/>
      <Input placeholder='Proje adı' value={this.state.Pa} onChange={(e)=>{this.setState({Pa:e.target.value})}}/><br/>
   
      <label>Proje başlama tarihi</label><br/>
      <Input type='date' value={this.state.Pbt} placeholder='Proje başlama tarihi' onChange={(e)=>{this.setState({Pbt:e.target.value})}}/><br/>
    
      <label>Proje git linki</label><br/>
      <Input placeholder='Proje git linki'value={this.state.Pgl} onChange={(e)=>{this.setState({Pgl:e.target.value})}}/><br/>
    
      <label>Proje Hostin Url</label><br/>
      <Input placeholder='Proje Hostin Url' value={this.state.Phu} onChange={(e)=>{this.setState({Phu:e.target.value})}}/><br/>
  
      <label>Proje mobil linki</label><br/>
      <Input placeholder='Proje mobil git linki' value={this.state.Pmgl} onChange={(e)=>{this.setState({Pmgl:e.target.value})}}/><br/>
   
                        </GridColumn>
                        <GridColumn>
                       
      <label>Projenin apk linki</label><br/>
      <Input placeholder='Projenin apk linki' value={this.state.Pal} onChange={(e)=>{this.setState({Pal:e.target.value})}}/><br/>
   
      <label>Proje yapılış amacı</label><br/>
      <Input placeholder='Proje yapılış amacı' value={this.state.Pya} onChange={(e)=>{this.setState({Pya:e.target.value})}}/><br/>
    
      <label>Proje açıklaması</label><br/>
      <TextArea placeholder='Proje açıklaması' style={{ minHeight: 100 }} value={this.state.Paa} onChange={(e)=>{this.setState({Paa:e.target.value})}}/><br/><br/><br/>
      <Button style={{marginLeft:'70%'}} inverted color='green' onClick={this.Dataadd}>Ekle</Button>
                        </GridColumn>         
  </Grid>
        </Segment>
    )
}
}
export default Projepage;