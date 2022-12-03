import React, { Component } from 'react';
//import { convertBytes } from './helpers';
import { Form, Button, Message, Input,Header } from "semantic-ui-react";
import { Router } from "../../routes";


class Main extends Component {
    render() {
        return(
             <><Div>
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
            </Div><h1>hello</h1></>
               
        )


    }
} 

export default Main;