import React from 'react';
import { Grid } from 'semantic-ui-react';
import ItemForm from '../Forms/ItemForm';
import Table from '../Tables/Table';

class ListPage extends React.Component {
    state = {
        items: []
    }

    addItem = (item) => this.state.item.push(item)
    render() {
        return (
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Add Items</h1>
                        <ItemForm submit={this.addItem} />
                    </Grid.Column>
                    <Grid.Column>
                        <Table items={this.state.items} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ListPage;