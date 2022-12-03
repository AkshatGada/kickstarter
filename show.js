

import React, { Component } from 'react';
//import { convertBytes } from './helpers';
import { Form, Button, Message, Input,Header , Div} from "semantic-ui-react";
import { Router } from "../../routes";
///import DStorage from '../abis/DStorage.json'



class ex extends Component {
    render() {
        return(
             <>
                <Header as='h1'>Share File</Header>
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    const description = this.fileDescription.value;
                    this.props.uploadFile(description);
                } }><br></br>
                    <Input
                        id="fileDescription"
                        type="text"
                        ref={(input) => { this.fileDescription = input; } }
                        className="form-control text-monospace"
                        placeholder="description..."
                        required />
                    <div class="ui input">
                        <Input type="file" onChange={this.props.captureFile} />

                    </div>
                    <Button type="submit" class="ui primary button"><b>Upload!</b></Button>

                </Form>
            <h1>hello</h1></>
               
        )


    }
} 

export default ex;








/*import React, { Component } from "react";
import { Card, Grid, Button, Form, Input } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";
import { Router } from "../../routes";
import Main from "./dfnf";


class CampaignShow extends Component {
  state = {
    first: "",
    last: "",
  };


  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
      

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      
    };
  }
  
  onSubmit = async (event) => {
    event.preventDefault
    const {first,last} = this.state;
     try {await Campaign.methods
     .patientEntry(first, last);
    }
     catch{
       console.log("fuck off")
     }
  };
  // asSubmit = async (event) => {
  //   event.preventDefault();
  //   this.setState({firstname})

  // }
  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Link route={`/campaigns/${this.props.address}/main`}>
                <a>
                  <Button primary>View </Button>
                </a>
              </Link>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            
            <label>First Name</label>
            <Input placeholder ='ex:- jhonny' 
                value={this.state.first}
                onChange={(event) => this.setState({first: event.target.value}) } />
          </Form.Field> 
           <Form.Field>
            <label>Last Name</label>
            <input placeholder ='ex:- bulla'
            value={this.state.lastName}
            onChange={(event) => this.setState({lastName: event.target.value})}/>
          </Form.Field> 
        </Form>
        <Card>
          <Card.Content>
            <Card.Header>
            <h1>{this.state.first}</h1>
           

            </Card.Header>
            <Card.Header>
            <h1>{this.state.last}</h1>
            </Card.Header>
          </Card.Content>
        </Card> 



      </Layout>
    );
  }
}

export default CampaignShow;*/
