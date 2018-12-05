import React from 'react';
import firebase from'firebase';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Segment ,  Grid,  Button, GridRow, GridColumn } from 'semantic-ui-react';
class Addproject extends React.Component{
constructor(){
    super();
    this.state={
        Datass:[],
        Deneme:[],
    }
}
sil =(id) =>{
           firebase.database().ref('Data/'+this.state.s+'/'+id).remove().then(()=>
           {
                alert('silindi')
           }).catch((ee)=>{
alert(ee)
           })  
}

Gun =(id)=>{
    firebase.database().ref('Data/'+this.state.s+'/'+id).update({
            Pbmbm:1
    })
}
 componentWillMount(){
        const s = localStorage.getItem('uid');
        this.setState({
            s:s,
        })
        console.log(s);
        firebase.database().ref('Data/'+s).on('value', (Snap) => {
            const gelen = Snap.child('Pbmbm').val();
            console.log(gelen);
            let dizi = [];
            // içini gezer verileri okuyup diziye atar
                Snap.forEach((deger) => {                   
                    const value = deger.key;                 
                    const {Pa,
            Pbt,
            Pgl,
            Phu,
            Pmgl,
            Pal,
            Pya,
            Paa,
            kuid,
            Pbmbm,
             } = deger.val();
                    dizi.push({ value, Pa,Pbt,
                        Pgl,
                        Phu,
                        Pmgl,
                        Pal,
                        Pya,
                        Paa,
                        kuid,
                        Pbmbm,})
                })
            this.setState({ 
                    Datass: dizi    
                })

                                        
        })
    }
    render(){
        const x = this.state.Datass.map((deger, i) => {
            if(deger.Pbmbm == 0){
            return(
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                        <Grid columns={2}>
                                <GridRow>
                                    <GridColumn>
                                        <b>Proje Adı : </b> {deger.Pa}<br></br>
                                        <b>Proje Amacı :</b> {deger.Pya}<br></br>                                         
                                    </GridColumn>
                                    <GridColumn>
                                        <b>Proje Ekleme Tarihi :</b>  {deger.Pbt}<br></br>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </AccordionItemTitle>
                    <AccordionItemBody>
                    <p style={{textAlign:'center'}}><b>Proje Açıklaması :</b> {deger.Paa}</p>
                            <hr></hr>
                            <Grid columns={2}>
                            <GridRow>
                                <GridColumn>  
                                <b> Proje Hosting Url :</b>{deger.Phu}<br></br>
                                <b> Projenin apk linki :</b>{deger.Pal}<br></br>                           
                                </GridColumn>
                                <GridColumn>
                                <b>Proje Mobil git linki :</b>{deger.Pmgl}<br></br>
                                <b>Proje git linki : </b>{deger.Pgl}
                                </GridColumn>
                                </GridRow>
                                </Grid>
                            <Button  color="green" onClick={()=>{this.Gun(deger.value)}}>Tamamlandı</Button>
                            <Button  color="Red" onClick={() => { this.sil(deger.value) }}>Sil</Button>
                    </AccordionItemBody>
                    </AccordionItem>                
                </Accordion>
                
            )}
           
        })
        //-----------------------------------------------------------------------------------------------
        const y = this.state.Datass.map((deger, i) => {
             if (deger.Pbmbm == 1) {                         
                return(
                               
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemTitle>
                            <Grid columns={2}>
                                    <GridRow>
                                        <GridColumn>
                                            <b>Proje Adı : </b> {deger.Pa}<br></br>
                                            <b>Proje Amacı :</b> {deger.Pya}<br></br>                                         
                                        </GridColumn>
                                        <GridColumn>
                                            <b>Proje Ekleme Tarihi :</b>  {deger.Pbt}<br></br>
                                        </GridColumn>
                                    </GridRow>
                                </Grid>
                            </AccordionItemTitle>
                        <AccordionItemBody>
                        <p style={{textAlign:'center'}}><b>Proje Açıklaması :</b> {deger.Paa}</p>
                                <hr></hr>
                                <Grid columns={2}>
                                <GridRow>
                                    <GridColumn>  
                                    <b> Proje Hosting Url :</b>{deger.Phu}<br></br>
                                    <b> Projenin apk linki :</b>{deger.Pal}<br></br>                           
                                    </GridColumn>
                                    <GridColumn>
                                    <b>Proje Mobil git linki :</b>{deger.Pmgl}<br></br>
                                    <b>Proje git linki : </b>{deger.Pgl}
                                    </GridColumn>
                                    </GridRow>
                                    </Grid>
                                <Button  color="Red" onClick={() => { this.sil(deger.value) }}>Sil</Button>
                        </AccordionItemBody>
                        </AccordionItem>                
                    </Accordion>
                )
            }
        })
        return(
            <Segment>
                <Grid columns={2}>
                    <GridColumn>
                <div><p style={{textAlign:'center'}}><h3>YAPILMASINI BEKLIYENLER</h3></p><hr/>
                <div style={{overflowY:'auto', height:'800px'}}>{x}</div>
                
                </div>
                </GridColumn>
                <GridColumn>
                <div><p style={{textAlign:'center'}}><h3>Yapılanlar</h3></p><hr/>
                <div style={{overflowY:'auto' , height:'800px'}}>{y}</div>               
                </div>
                </GridColumn>
                </Grid>
            </Segment>
        )
    }
}
export default Addproject;