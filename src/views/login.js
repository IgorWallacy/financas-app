import React from 'react';
import Card from './components/card';
import FormGroup from './components/formGroup';


class Login extends React.Component {

  state = {
    email : '',
    senha : ''
  }


  entrar = () => {

    console.log('Email ', this.state.email)
    console.log('Senha ' , this.state.senha)
  }

    render() {
        return(
      <div className='container' style={{margin : '25px'}}>
          
          <div className='row'>
        
              <div className='col-md-6' style={ {position : 'relative', left : '300px'}}>

              <div className='bs-docs-section'> 
              
              <Card title="Login" >
             
              <FormGroup label="E-mail *" htmlFor="email" >
              <input type="text" value={this.state.email} onChange={ e => this.setState({email : e.target.value})}  className="form-control" id="email" placeholder="email@example.com"/>
              </FormGroup>

              <FormGroup label="Senha *" htmlFor="password">
              <input type="password" value={this.state.senha} onChange={ e => this.setState({senha : e.target.value})} className="form-control" id="password" placeholder="Senha"/>

              </FormGroup>
             <div style={{marginTop: "10px"}}>
            <button className='btn btn-success' 
            onClick={() => this.entrar()}
            >Entrar</button>
            <button style={{margin:"10px"}} className='btn btn-danger'>Cadastrar</button>
          </div>
          
    
    
 </Card>

              
              </div>

              </div>

          </div>





      </div>
        
        )}
}

export default Login